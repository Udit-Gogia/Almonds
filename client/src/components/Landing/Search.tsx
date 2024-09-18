import { useMemo } from "react";
import { PlaceholdersAndVanishInput } from "../ui/placeholder-and-vanish-input";

export default function Search() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  const placeholders = useMemo(() => {
    return [
      "Search tasks by title...",
      "Search tasks by category...",
      "Search users...",
    ];
  }, []);
  return (
    <PlaceholdersAndVanishInput
      placeholders={placeholders}
      onChange={handleChange}
      onSubmit={onSubmit}
    />
  );
}
