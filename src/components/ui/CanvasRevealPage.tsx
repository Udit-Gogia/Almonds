import { AnimatePresence, motion } from "framer-motion";
import "../../index.css";
import { CanvasRevealEffect } from "./canvas-reveal-effect";
import { TextGenerateEffect } from "./textGenerateEffect";

export function CanvasRevealPage() {
  return (
    <div className=" h-screen flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className="w-1/2 relative z-20 text-center flex flex-col gap-4"
      >
        <motion.h1 className="md:text-2xl text-3xl lg:text-6xl font-bold text-white rubik">
          Crack open productivity!
        </motion.h1>
        <TextGenerateEffect
          className="text-neutral-200 text-2xl poppins font-light"
          words="The ultimate tool for streamlined task management and team collaboration. Assign tasks, track progress, and boost your team's efficiency — all in one place."
        />
      </motion.div>
      <AnimatePresence>
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
      </AnimatePresence>
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
    </div>
  );
}
