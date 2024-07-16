import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { LoginIcon } from "../../assets/Icons/login-icon";
import Almonds from "../../assets/Images/almonds.png";
import { cn } from "../../lib/util";
import { Button } from "../ui/button";
export const Navbar = () => {
  const { isSignedIn } = useUser();
  return (
    <div className="flex justify-between items-center w-screen fixed top-4 z-[5000] px-4">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className={cn(
          "flex bg-primaryBlack rounded-full dark:bg-primaryBlack p-2 gap-2"
        )}
      >
        <motion.section
          initial={{
            width: "28px",
          }}
          animate={{
            width: "fit-content",
          }}
          transition={{
            duration: 0.5,
            delay: 2,
          }}
          className="overflow-hidden flex gap-2"
        >
          <img src={Almonds} alt="icon-almonds" className="h-6 w-6" />
          <p className="text-white rubik font-semibold text-xl pr-1">
            Almonds.
          </p>
        </motion.section>
      </motion.div>

      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                card: {
                  backgroundColor: "#000",
                },
                footer: {
                  backgroundColor: "#000",
                },
              },
            }}
          />{" "}
        </SignedIn>
      </motion.div>
      {!isSignedIn && (
        <div className="bg-primaryBlack border-[#27272A] rounded-full">
          <SignedOut>
            <Button
              variant="ghost"
              size="icon"
              className="bg-primaryBlack hover:bg-[#27272A] rounded-full"
            >
              <SignInButton
                mode="modal"
                children={
                  <span>
                    <LoginIcon />
                  </span>
                }
              />
            </Button>
          </SignedOut>
        </div>
      )}
    </div>
  );
};
