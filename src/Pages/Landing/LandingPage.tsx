import { motion } from "framer-motion";
import { SparklesCore } from "../../components/Shared/Sparkles";

export function LandingPage() {
  return (
    <main className="h-[calc(100vh-4rem)]  w-screen bg-primaryBlack overflow-hidden select-none pointer-events-none text-white">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:text-7xl text-3xl lg:text-9xl font-bold text-center  relative z-20 "
        >
          Almonds
          <span className="text-amber-800">.</span>
        </motion.h1>
        <div className="w-[40rem] h-40 relative">
          <LinearGradient />

          <SparklesCore
            background="transparent"
            minSize={0.5}
            speed={1}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          <div className="absolute inset-0 w-full h-full bg-primaryBlack [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>

          <motion.h3
            className="text-center pt-20"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: {
                  delay: 0.5,
                  staggerChildren: 0.08,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {"Coming soon...".split("").map((char, index) => (
              <motion.span
                className="text-2xl font-semibold"
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h3>
        </div>
      </div>
    </main>
  );
}

const LinearGradient = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-[2px] w-3/4 blur-sm"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent h-px w-3/4"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent h-[5px] w-1/4 blur-sm"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent h-px w-1/4"
      />
    </>
  );
};
