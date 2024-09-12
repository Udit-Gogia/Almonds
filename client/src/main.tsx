import { ClerkProvider } from "@clerk/clerk-react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

// Import the generated route tree
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: {
            fontSize: 14,
            textTransform: "none",
            backgroundColor: "#0B1215",
            "&:hover, &:focus, &:active": {
              backgroundColor: "#0B1215",
            },
          },
        },
      }}
      publishableKey={PUBLISHABLE_KEY}
    >
      <RouterProvider router={router} />

      {/* <App /> */}
    </ClerkProvider>
  </React.StrictMode>
);
