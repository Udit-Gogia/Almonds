import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { LoginIcon } from "../../assets/Icons/login-icon";
import Almonds from "../../assets/Images/almonds.png";
import { ROUTE_ADDRESS } from "../../constants/routeAddress";
import { cn } from "../../lib/util";
import { Button } from "../ui/button";

export const Navbar = ({
  showUserProfile = true,
}: {
  showUserProfile?: boolean;
}) => {
  const { isSignedIn } = useUser();
  return (
    <div className="flex justify-between items-center w-screen fixed top-4 z-[5000] pl-4 pr-6">
      <AlmondsLogo />

      {showUserProfile && (
        <motion.div
          className="mr-4"
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
      )}
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
                fallbackRedirectUrl={ROUTE_ADDRESS.welcome}
                signUpFallbackRedirectUrl={ROUTE_ADDRESS.welcome}
              />
            </Button>
          </SignedOut>
        </div>
      )}
    </div>
  );
};

export const AlmondsLogo = ({ hideLabel = false }: { hideLabel?: boolean }) => {
  return (
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
      className={cn("flex  rounded-full  p-2 gap-2")}
    >
      <motion.section
        initial={{
          width: "30px",
        }}
        animate={{
          width: "fit-content",
        }}
        transition={{
          duration: 0.5,
          delay: 2,
        }}
        className="overflow-hidden flex gap-2 items-center"
      >
        <img src={Almonds} alt="icon-almonds" className="h-6 w-6 " />
        {!hideLabel && (
          <p className="text-white sub-heading  text-2xl ">
            <Link to="/">Almonds.</Link>
          </p>
        )}
      </motion.section>
    </motion.div>
  );
};