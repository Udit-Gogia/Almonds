import { SignOutButton } from "@clerk/clerk-react";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { LogoutIcon } from "../../assets/Icons/logout-icon";
import { SettingsIcon } from "../../assets/Icons/settings-icon";
import { ROUTE_ADDRESS } from "../../constants/routeAddress";
import { SidebarOptions } from "../../constants/sidebarOptions";
import { Tooltip, TooltipProvider } from "../ui/tooltip";
import { AlmondsLogo } from "./Navbar";

export const Sidebar = () => {
  return (
    <div className="w-fit bg-secondaryBlack pt-2 p-4 flex flex-col justify-between rounded-2xl h-[calc(100vh-2rem)]">
      <section className="flex flex-col gap-10">
        <section className="">
          <AlmondsLogo hideLabel={true} />
        </section>
        <section className="flex flex-col gap-2">
          {SidebarOptions.map(({ IconComponent, label, to }, index) => (
            <div key={index}>
              <Link to={to} key={index}>
                <SideBarOption
                  IconComponent={IconComponent}
                  label={label}
                  selected={false}
                />
              </Link>
            </div>
          ))}
        </section>
      </section>

      <section className="flex flex-col gap-2">
        <SideBarOption
          IconComponent={SettingsIcon}
          label="Settings"
          selected={false}
        />
        <SignOutButton
          redirectUrl={ROUTE_ADDRESS.landing}
          signOutOptions={{ redirectUrl: ROUTE_ADDRESS.landing }}
        >
          <SideBarOption
            IconComponent={LogoutIcon}
            label="Logout"
            selected={false}
          />
        </SignOutButton>
      </section>
    </div>
  );
};

const SideBarOption = ({
  selected,
  label,
  IconComponent,
  onClick,
}: {
  onClick?: () => void;
  selected: boolean;
  label: string;
  IconComponent: ({ strokeColor }: { strokeColor: string }) => JSX.Element;
}) => {
  return (
    <motion.div
      className={`group/bento  rounded-2xl  p-2 text-sm ${selected ? "bg-primaryBlack" : "bg-secondaryBlack"} text-primaryWhite  flex items-center gap-3  cursor-pointer`}
      onClick={onClick}
    >
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <section className=" w-6 flex justify-center">
              <IconComponent
                strokeColor={selected ? "#F5F3F1" : "rgb(179, 179, 179)"}
              />
            </section>
          </TooltipTrigger>
          <TooltipContent side="right" className="z-50 flex items-center ml-2 ">
            <p className="text-content bg-primaryBlack text-primaryWhite -ml-[2px] text-xs p-2 rounded-lg border-secondaryBlack">
              {label}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  );
};
