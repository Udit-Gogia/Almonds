"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./canvas-reveal-effect";

export function CanvasRevealPage() {
  return (
    <div className=" h-screen flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="md:text-2xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20"
      >
        Almonds.
      </motion.h1>
      <AnimatePresence>
        {true && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600"
              colors={[[125, 211, 252]]}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
    </div>
  );
}
