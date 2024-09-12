import { createFileRoute } from "@tanstack/react-router";
import { TasksDashboard } from "../../Pages/Tasks/Dashboard/dashboard";

export const Route = createFileRoute("/tasks/dashboard")({
  component: () => <TasksDashboard />,
});
