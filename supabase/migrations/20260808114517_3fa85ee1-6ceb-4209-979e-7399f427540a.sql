CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  organisation text,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.contact_submissions TO anon, authenticated;
GRANT ALL ON public.contact_submissions TO service_role;

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact request"
  ON public.contact_submissions FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(first_name) BETWEEN 1 AND 100
    AND length(last_name) BETWEEN 1 AND 100
    AND length(email) BETWEEN 3 AND 255
    AND length(message) BETWEEN 1 AND 5000
    AND (organisation IS NULL OR length(organisation) <= 200)
  );

CREATE TABLE public.school_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  country text NOT NULL,
  nationality text NOT NULL,
  education text NOT NULL,
  program text NOT NULL,
  motivation text NOT NULL,
  linkedin text,
  hear_about text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.school_applications TO anon, authenticated;
GRANT ALL ON public.school_applications TO service_role;

ALTER TABLE public.school_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an application"
  ON public.school_applications FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(first_name) BETWEEN 1 AND 100
    AND length(last_name) BETWEEN 1 AND 100
    AND length(email) BETWEEN 3 AND 255
    AND length(phone) BETWEEN 3 AND 40
    AND length(country) BETWEEN 1 AND 100
    AND length(nationality) BETWEEN 1 AND 100
    AND length(education) BETWEEN 1 AND 100
    AND length(program) BETWEEN 1 AND 100
    AND length(motivation) BETWEEN 1 AND 10000
    AND (linkedin IS NULL OR length(linkedin) <= 300)
    AND length(hear_about) BETWEEN 1 AND 100
  );