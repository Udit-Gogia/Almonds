import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tasks/dashboard")({
  component: () => <div>Hello /tasks/dashboard!</div>,
});
