import { SignedIn, SignedOut, SignUpButton } from "@clerk/clerk-react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { CircularButton } from "../../components/Buttons/CircularButton/CircularButton";
import { CanvasRevealPage } from "../../components/ui/CanvasRevealPage";
import { TextGenerateEffect } from "../../components/ui/textGenerateEffect";
import { ROUTE_ADDRESS } from "../../constants/routeAddress";

export function LandingPage() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        exit={{
          opacity: 0,
        }}
      >
        <CanvasRevealPage>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2 }}
            className="w-full relative z-20 text-center flex flex-col justify-center gap-4 mx-auto h-screen"
          >
            <div className=" mx-auto flex flex-col justify-center gap-4">
              <motion.h1
                className="sm:w-[80vw] lg:w-[50vw] text-4xl lg:text-6xl font-bold text-[#f5f5f7] rubik  
        "
              >
                Crack open productivity!
              </motion.h1>
              <TextGenerateEffect
                className="text-neutral-200 text-2xl poppins font-light sm:w-[80vw] lg:w-[50vw]"
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
                <SignUpButton
                  mode="modal"
                  children={
                    <section className="mt-8">
                      <CircularButton label="Get started..." />
                    </section>
                  }
                  fallbackRedirectUrl={ROUTE_ADDRESS.welcome}
                  forceRedirectUrl={ROUTE_ADDRESS.welcome}
                  signInForceRedirectUrl={ROUTE_ADDRESS.welcome}
                />
              </SignedOut>
            </div>
          </motion.div>
        </CanvasRevealPage>
      </motion.div>
    </AnimatePresence>
  );
}
