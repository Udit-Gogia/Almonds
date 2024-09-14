import { useRouter } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import {
  MultiStepLoader as Loader,
  LoadingState,
} from "../../components/ui/multi-step-loader";
import { TextGenerateEffect } from "../../components/ui/textGenerateEffect";

export default function Welcome() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  const { navigate } = useRouter();

  const handleToggleLoadingState = useCallback(() => {
    setTimeout(() => {
      navigate({ to: "/tasks/dashboard" });
    }, 3000);
  }, [navigate]);

  const loadingStates: LoadingState[] = [
    {
      text: "Starting up the process...",
    },
    {
      text: "Gathering the almonds...",
    },
    {
      text: "Fueling up your productivity engine..",
    },
    {
      text: "Almost there, let's get cracking!",
    },
  ];

  return (
    <AnimatePresence mode="wait">
      <div className="bg-primaryBlack  flex flex-col ">
        <div className="w-full h-screen flex flex-col items-center justify-center gap-8">
          <div>
            <TextGenerateEffect
              words={`"Hey, Welcome to Almonds!"`}
              customDelay={0}
              className="text-4xl font-semibold leading-[4rem] text-primaryWhite poppins"
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1.5,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 1.5,
              },
            }}
          >
            <Loader
              loadingStates={loadingStates}
              loading={loading}
              duration={1500}
              loop={false}
              handleToggleLoadingState={handleToggleLoadingState}
            />
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
