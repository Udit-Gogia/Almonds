import { AnimatePresence } from "framer-motion";
import { ControlPanel } from "../../../components/Shared/ControlPanel";
import { Sidebar } from "../../../components/Shared/Sidebar";
import { DashboardCentralPanel } from "./CentralPanel";

export const TasksDashboard = () => {
  return (
    <AnimatePresence mode="wait">
      <div className="bg-primaryBlack min-h-screen text-primaryWhite p-4 flex gap-4">
        <Sidebar />
        <DashboardCentralPanel />
        <ControlPanel />
      </div>
    </AnimatePresence>
  );
};
