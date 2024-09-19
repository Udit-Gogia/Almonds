import DashboardHeader from "../../../components/Landing/DashboardHeader";
import { CardStack } from "../../../components/ui/card-stack";
import { CARDS } from "../../../constants/almonds-content";

export const DashboardCentralPanel = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <DashboardHeader />
      <section>
        <div className="rounded-2xl w-full grid md:auto-rows-[41vh] grid-cols-1 md:grid-cols-3 gap-4 bg-primaryBlack justify-between">
          <div className="mt-8">
            <TaskCounts />
          </div>
          <div className="bg-secondaryBlack rounded-2xl"></div>
          <div className="bg-secondaryBlack rounded-2xl"></div>
          <div className="bg-secondaryBlack col-span-3 rounded-2xl h-full"></div>
        </div>
      </section>
    </div>
  );
};

const TaskCounts = () => {
  return <CardStack items={CARDS} />;
};
