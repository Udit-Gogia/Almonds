import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Almonds from "../../assets/Images/almond.png";
import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <div className="flex justify-between h-16 bg-primaryBlack p-4 ">
      <section className="pointer-events-none">
        <img src={Almonds} alt="icon-almonds" className="h-12 w-12" />
      </section>
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              card: {
                backgroundColor: "#0B1215",
                color: "green",
              },
              footer: {
                backgroundColor: "blue",
              },
            },
          }}
        />
      </SignedIn>

      <SignedOut>
        <Button
          className="bg-white text-primaryBlack hover:bg-neutral-200 font-semibold text-lg"
          asChild
        >
          <SignInButton mode="modal" />
        </Button>
      </SignedOut>
    </div>
  );
};
