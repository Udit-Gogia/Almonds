import { createRootRoute, Outlet } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "../components/ui/theme-provider";

export const Route = createRootRoute({
  component: () => (
    <AnimatePresence mode="wait">
      <ThemeProvider defaultTheme="dark" storageKey="almonds-ui-theme">
        <Outlet />
      </ThemeProvider>
    </AnimatePresence>
  ),
});
