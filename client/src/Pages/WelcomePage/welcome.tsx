import { useRouter } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { MultiStepLoader as Loader } from "../../components/ui/multi-step-loader";
import { TextGenerateEffect } from "../../components/ui/textGenerateEffect";
import { LOADING_STATES } from "../../constants/almonds-content";
import { useUserAuthHook } from "../../hooks/userAuthHook";

export default function Welcome() {
  const [loading, setLoading] = useState(false);
  const [isUserAvailable, setIsUserAvailable] = useState(false);

  const { processUserAuthentication, user } = useUserAuthHook();
  const { navigate } = useRouter();

  useEffect(() => {
    setLoading(true);

    processUserAuthentication().then((res) => setIsUserAvailable(res));
  }, [processUserAuthentication]);

  const handleToggleLoadingState = useCallback(() => {
    if (isUserAvailable)
      setTimeout(() => {
        navigate({ to: "/tasks/dashboard" });
      }, 1000);
  }, [isUserAvailable, navigate]);

  if (!user) {
    return <div className="bg-primaryBlack h-screen flex flex-col"></div>;
  }

  return (
    <AnimatePresence mode="wait">
      <div className="bg-primaryBlack  flex flex-col">
        <motion.div
          className="w-full h-screen flex flex-col items-center justify-center gap-8"
          exit={{
            opacity: 0,
            transition: {
              duration: 1.5,
            },
          }}
        >
          <div>
            <TextGenerateEffect
              words={`Hey ${user.username}, Welcome to Almonds!`}
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
              loadingStates={LOADING_STATES}
              loading={loading}
              duration={1500}
              loop={false}
              handleToggleLoadingState={handleToggleLoadingState}
            />
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
