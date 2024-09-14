import { ReactNode } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface IModalProps {
  Button: ReactNode;
  ModalContent: ReactNode;
}

export const Modal = ({ Button, ModalContent }: IModalProps) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpenModal((prev) => !prev)}
      >
        {Button}
      </motion.button>
      <AnimatePresence
        initial={false} // no initial animation
        mode="wait" // all animations to be completed before modal unmounts
      >
        {openModal && (
          <Backdrop onClick={() => setOpenModal(false)}>
            <motion.div
              onClick={(e) => e.stopPropagation()}
              //   using clamp as the default width will be 750px, if screen size is small then it acquires 90% of it or if the screen is too big then it acquires 50% of the width
              className="w-[clamp(50%,750px,90%)] h-[min(50%,300px)] mx-auto px-8 py-0 rounded-lg flex flex-col items-center"
              initial={{
                y: "-100vh", // enter from top
                opacity: 0,
              }}
              animate={{
                y: "0",
                opacity: 1,
                transition: {
                  duration: 0.1,
                  type: "spring",
                  damping: 25,
                  stiffness: 500,
                },
              }}
              exit={{
                y: "100vh", // exit from bottom
                opacity: 0,
              }}
            >
              {ModalContent}
            </motion.div>
          </Backdrop>
        )}
      </AnimatePresence>
    </div>
  );
};

const Backdrop = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <motion.div
      className="absolute top-0 left-0 h-full w-screen bg-secondaryBlack/55 flex items-center justify-center"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
