import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hello World" },
      { name: "description", content: "A simple Hello World project." },
      { property: "og:title", content: "Hello World" },
      { property: "og:description", content: "A simple Hello World project." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight text-foreground">
          Hello World
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Welcome to your new app.
        </p>
      </div>
    </div>
  );
}
