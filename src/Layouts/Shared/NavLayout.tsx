import React from "react";
import { Navbar } from "../../components/Shared/Navbar";

const NavLayout = (props: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen rounded-[0.5rem] ]">
      <Navbar />
      <div className="flex-1 space-y-4">{props.children}</div>
    </div>
  );
};

export default NavLayout;
