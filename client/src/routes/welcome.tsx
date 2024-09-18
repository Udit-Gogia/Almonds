import { createFileRoute } from "@tanstack/react-router";
import Welcome from "../Pages/WelcomePage/welcome";

export const Route = createFileRoute("/welcome")({
  component: () => <Welcome />,
});
