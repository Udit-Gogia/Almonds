import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "../../../components/Shared/Navbar";
import { Sidebar } from "../../../components/Shared/Sidebar";

export const TasksDashboard = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div className="bg-secondaryBlack min-h-screen text-primaryWhite">
        <Navbar showUserProfile={false} />
        <Sidebar />
      </motion.div>
    </AnimatePresence>
  );
};
