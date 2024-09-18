import { LoadingState } from "../components/ui/multi-step-loader";
import {
  IAboutAlmondsFeature,
  ITaskCounterCard,
} from "../interfaces/user.interface";

export const ABOUT_ALMONDS_FEATURE_LIST: IAboutAlmondsFeature[] = [
  {
    title: "Efficiency",
    body: "Keep that organizational beat steady and keep an eagle eye on progress to make sure you hit those task goals on time ensuring timely completion of tasks.",
    fontColor:
      "text-primaryPeach selection:text-secondaryBlack selection:bg-primaryPeach",
    fontSelectionColor: "selection:text-primaryPeach",
    iconStrokeColor: "#ffa595",
  },
  {
    title: "Collaboration",
    body: "Creating your dream team, passing out tasks, and chatting up a storm are key moves in hitting that sweet success spot as a team!",
    fontColor:
      "text-primaryYellow selection:text-secondaryBlack selection:bg-primaryYellow",
    fontSelectionColor: "selection:text-primaryYellow",
    iconStrokeColor: "#f3c259",
  },
];

export const LOADING_STATES: LoadingState[] = [
  {
    text: "Starting up the process...",
  },
  {
    text: "Gathering the almonds...",
  },
  {
    text: "Fueling up your productivity engine..",
  },
  {
    text: "Almost there, let's get cracking!",
  },
];

export const CARDS: ITaskCounterCard[] = [
  {
    id: 0,
    title: "Ongoing tasks",
    count: 5,
    cardBackground: "bg-primaryRed",
    content: "",
  },
  {
    id: 1,
    title: "Scheduled tasks",
    count: 7,
    cardBackground: "bg-primaryYellow",
    content: "",
  },
  {
    id: 2,
    title: "Completed tasks",
    count: 4,
    cardBackground: "bg-primaryBlue",
    content: "",
  },
];
