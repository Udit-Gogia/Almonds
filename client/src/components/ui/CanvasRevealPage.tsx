import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ROUTE_ADDRESS } from "../../constants/routeAddress";
import "../../index.css";
import { CircularButton } from "../Buttons/CircularButton/CircularButton";
import { CanvasRevealEffect } from "./canvas-reveal-effect";
import { TextGenerateEffect } from "./textGenerateEffect";

export function CanvasRevealPage() {
  return (
    <div className=" h-screen flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className="lg:w-min relative z-20 text-center flex flex-col gap-4 lg:min-w-[50rem] mx-auto "
      >
        <motion.h1
          className="text-3xl lg:text-6xl font-bold text-[#f5f5f7] rubik  
        "
        >
          Crack open productivity!
        </motion.h1>
        <TextGenerateEffect
          className="text-neutral-200 text-2xl poppins font-light"
          words="The ultimate tool for streamlined task management and team collaboration. Assign tasks, track progress, and boost your team's efficiency — all in one place."
        />
        <SignedIn>
          <Link to="/tasks/dashboard">
            <section className="mt-8">
              <CircularButton label="Dashboard" />
            </section>
          </Link>
        </SignedIn>
        <SignedOut>
          <SignInButton
            mode="modal"
            children={
              <section className="mt-8">
                <CircularButton label="Get sta  rted..." />
              </section>
            }
            fallbackRedirectUrl={ROUTE_ADDRESS.tasks.dashboard}
            signUpFallbackRedirectUrl={ROUTE_ADDRESS.tasks.dashboard}
          />
        </SignedOut>
      </motion.div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-full w-full absolute inset-0"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            dotSize={4}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 [mask-image:linear-gradient(220.55deg, #5D85A6 0%, #0E2C5E 100%)] bg-black/50 dark:bg-black/90" />
    </div>
  );
}
