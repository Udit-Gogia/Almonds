import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import "../../index.css";
import { CanvasRevealEffect } from "./canvas-reveal-effect";

export function CanvasRevealPage({ children }: { children: ReactNode }) {
  return (
    <div className=" h-screen flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto  relative">
      {children}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-full w-full absolute inset-0"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            dotSize={4}
            containerClassName="bg-sky-500"
            colors={[[125, 211, 252]]}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 [mask-image:linear-gradient(220.55deg, #5D85A6 0%, #0E2C5E 100%)] bg-black/50 " />
    </div>
  );
}
