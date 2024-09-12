import { useAuth, useUser } from "@clerk/clerk-react";
import { Navbar } from "../../../components/Shared/Navbar";
import { Sidebar } from "../../../components/Shared/Sidebar";

export const TasksDashboard = () => {
  const { user } = useUser();
  const { userId, sessionId } = useAuth();
  console.log("this is user data ", user, userId, sessionId);
  return (
    <div className="bg-secondaryBlack min-h-screen text-primaryWhite">
      <Navbar showUserProfile={false} />
      <Sidebar />
    </div>
  );
};
