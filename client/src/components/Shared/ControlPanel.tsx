import { Calendar } from "../ui/calendar";

export const ControlPanel = () => {
  return (
    <div className="w-fit bg-secondaryBlack pt-2 p-4 flex flex-col justify-between rounded-2xl h-[calc(100vh-2rem)]">
      <Calendar className="border-b border-borderGrey" />
    </div>
  );
};
