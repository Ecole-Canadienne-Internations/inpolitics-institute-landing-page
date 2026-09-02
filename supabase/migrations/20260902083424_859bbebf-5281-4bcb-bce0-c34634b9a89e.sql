
DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('admin','moderator','user');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;
CREATE POLICY "Users can view their own roles" ON public.user_roles
FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

ALTER TABLE public.school_applications
  ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'pending',
  ADD COLUMN IF NOT EXISTS reference text,
  ADD COLUMN IF NOT EXISTS current_role_title text,
  ALTER COLUMN nationality DROP NOT NULL,
  ALTER COLUMN education DROP NOT NULL,
  ALTER COLUMN hear_about DROP NOT NULL;

ALTER TABLE public.school_applications
  ALTER COLUMN reference SET DEFAULT ('PRE-' || to_char(now(), 'YYYY') || '-' || upper(substr(md5(random()::text), 1, 4)));

UPDATE public.school_applications
SET reference = ('PRE-' || to_char(created_at, 'YYYY') || '-' || upper(substr(md5(random()::text), 1, 4)))
WHERE reference IS NULL;

DROP POLICY IF EXISTS "Anyone can submit an application" ON public.school_applications;
CREATE POLICY "Anyone can submit an application" ON public.school_applications
FOR INSERT TO anon, authenticated
WITH CHECK (
  length(first_name) BETWEEN 1 AND 100
  AND length(last_name) BETWEEN 1 AND 100
  AND length(email) BETWEEN 3 AND 255
  AND length(phone) BETWEEN 3 AND 40
  AND length(country) BETWEEN 1 AND 100
  AND length(program) BETWEEN 1 AND 200
  AND length(motivation) BETWEEN 1 AND 10000
  AND (nationality IS NULL OR length(nationality) <= 100)
  AND (education IS NULL OR length(education) <= 100)
  AND (hear_about IS NULL OR length(hear_about) <= 100)
  AND (current_role_title IS NULL OR length(current_role_title) <= 200)
  AND (linkedin IS NULL OR length(linkedin) <= 300)
);

CREATE POLICY "Admins can view applications" ON public.school_applications
FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update applications" ON public.school_applications
FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete applications" ON public.school_applications
FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can view contact submissions" ON public.contact_submissions
FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete contact submissions" ON public.contact_submissions
FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));
