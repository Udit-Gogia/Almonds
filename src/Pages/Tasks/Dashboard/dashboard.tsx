import { Navbar } from "../../../components/Shared/Navbar";
import { Sidebar } from "../../../components/Shared/Sidebar";

export const TasksDashboard = () => {
  return (
    <div className="bg-secondaryBlack min-h-screen text-primaryWhite">
      <Navbar showUserProfile={false} />
      <Sidebar />
    </div>
  );
};
