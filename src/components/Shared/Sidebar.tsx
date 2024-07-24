import { SignOutButton } from "@clerk/clerk-react";
import { Link } from "@tanstack/react-router";
import { LogoutIcon } from "../../assets/Icons/logout-icon";
import { SettingsIcon } from "../../assets/Icons/settings-icon";
import { SidebarOptions } from "../../constants/sidebarOptions";

export const Sidebar = () => {
  return (
    <div className="min-h-screen w-fit bg-primaryBlack p-4 pt-20 flex flex-col justify-between">
      <section className="flex flex-col gap-4">
        {SidebarOptions.map(({ IconComponent, label, to }, index) => (
          <Link to={to} key={index}>
            <SideBarOption
              IconComponent={IconComponent}
              label={label}
              selected={false}
            />
          </Link>
        ))}
      </section>

      <section>
        <SideBarOption
          IconComponent={SettingsIcon}
          label="Settings"
          selected={false}
        />
        <SignOutButton>
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
}: {
  selected: boolean;
  label: string;
  IconComponent: () => JSX.Element;
}) => {
  return (
    <div
      className={` rounded-2xl p-4 ${selected ? "bg-secondaryBlack" : "bg-primaryBlack"} hover:bg-secondaryBlack transition-all duration-200 flex items-center gap-4 pr-12 cursor-pointer`}
    >
      <section className="w-6 flex justify-center">
        <IconComponent />
      </section>
      <p className="poppins text-primaryWhite ">{label}</p>
    </div>
  );
};
