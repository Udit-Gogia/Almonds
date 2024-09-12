import { ChatIcon } from "../assets/Icons/chat-icon";
import { HomeIcon } from "../assets/Icons/home-icon";
import { TeamsIcon } from "../assets/Icons/teams-icon";

interface ISideBarOption {
  to: string;
  label: string;
  IconComponent: () => JSX.Element;
}

export const SidebarOptions: ISideBarOption[] = [
  {
    to: "/tasks/dashboard",
    label: "Dashboard",
    IconComponent: HomeIcon,
  },
  {
    to: "/tasks/dashboard",
    label: "Workplace",
    IconComponent: TeamsIcon,
  },
  {
    to: "/tasks/dashboard",
    label: "Chat",
    IconComponent: ChatIcon,
  },
];
