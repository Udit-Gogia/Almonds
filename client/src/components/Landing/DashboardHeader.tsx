import { useUser } from "@clerk/clerk-react";
import Search from "./Search";

export default function DashboardHeader() {
  const { user } = useUser();
  return (
    <section className="rounded-xl flex items-center justify-between">
      <section>
        <p className="text-content text-lg mt-2">Hey {user?.username}</p>
      </section>
      <section>
        <Search />
      </section>
    </section>
  );
}
