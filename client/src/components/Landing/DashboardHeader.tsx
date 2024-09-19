import { useUser } from "@clerk/clerk-react";
import BellIcon from "../../assets/Icons/bell-icon";
import { CommandDialog, CommandInput, CommandList } from "../ui/command";

import { useEffect, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import Search from "./Search";

export default function DashboardHeader() {
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <section className="rounded-xl  flex items-center justify-between ">
      <section className="basis-2/12">
        <p className="text-content text-lg">Hey {user?.username}</p>
      </section>
      <section className="basis-[52.5%]">
        <Search />
      </section>
      <section className="basis-2/12 items-center flex justify-end gap-4">
        <button>
          <BellIcon strokeColor="rgb(179, 179, 179)" />
        </button>
      </section>
      <CommandDialog open={open} onOpenChange={() => setOpen(false)}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <section>
            <ToggleGroup
              type="multiple"
              size={"sm"}
              className="justify-start items-center px-4 py-2 gap-2"
            >
              <p className="text-content text-neutral-500 text-sm">
                Filter search:
              </p>

              <ToggleGroupItem
                className=" text-left justify-start px-2 py-0 text-sm text-neutral-400"
                value="TASK"
                aria-label="Toggle TASK"
              >
                Task
              </ToggleGroupItem>

              <ToggleGroupItem
                className=" text-left justify-start px-2 py-0 text-sm text-neutral-400"
                value="USER"
                aria-label="Toggle USER"
              >
                User
              </ToggleGroupItem>
              <ToggleGroupItem
                className=" text-left justify-start px-2 py-0 text-sm text-neutral-400"
                value="DATE"
                aria-label="Toggle DATE"
              >
                Timeline
              </ToggleGroupItem>
            </ToggleGroup>
          </section>
        </CommandList>
      </CommandDialog>
    </section>
  );
}
