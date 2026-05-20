// utils/mentalModelsData.ts

import type { IconType } from "react-icons";
import {
  FiSearch,
  FiMinimize2,
  FiGitBranch,
  FiXSquare,
  FiShuffle,
  FiUsers,
  FiRepeat,
  FiDroplet,
} from "react-icons/fi";
import { PiBowlFoodLight } from "react-icons/pi";

export type MentalModelItem = {
  id: string;
  title: string;
  subtitle: string;
  Icon: IconType;
  color: string;
  background: string;
};

export const mentalModelsData: MentalModelItem[] = [
  {
    id: "root-cause-analysis",
    title: "Root Cause Analysis",
    subtitle:
      "Dig deep beyond the initial symptoms. Uncover the fundamental reason a problem occurs to prevent it from ever happening again.",
    Icon: FiSearch,
    color: "#C27AFF", // purple
    background: "#3D2E4E"
  },
  {
    id: "miss",
    title: "M.I.S.S",
    subtitle:
      "Make It Simple Stupid. Strip away the non-essential so the core functionality shines without unnecessary complexity.",
    Icon: FiMinimize2,
    color: "#00D0EF", // cyan
    background: "#09414A"
  },
  {
    id: "soup-bowl-analogy",
    title: "Soup Bowl Analogy",
    subtitle:
      "When you have an empty bowl, start adding what you can. Your momentum inspires others to contribute their own ingredients, creating something greater together.",
    Icon: PiBowlFoodLight,
    color: "#FFD527", // yellow
    background: "#62551F"
  },
  {
    id: "conways-law",
    title: "Conway's Law",
    subtitle:
      "Organizations design systems that mirror their own communication structures. If your teams are isolated, your product will feel isolated.",
    Icon: FiGitBranch,
    color: "#50A2FF", // blue
    background: "#203352"
  },
  {
    id: "five-whys",
    title: "The 5 Whys",
    subtitle:
      "Bypass surface-level symptoms and find the root cause by asking 'Why?' five times in succession.",
    Icon: FiSearch,
    color: "#5570F1", // indigo
    background: "#333A5C"
  },
  {
    id: "broken-window-theory",
    title: "Broken Window Theory",
    subtitle:
      "One unfixed broken window leads to a trashed building. Fix bad designs and poor code immediately before rot and apathy set in.",
    Icon: FiXSquare,
    color: "#B22A2A", // red
    background: "#46180F"
  },
  {
    id: "double-diamond",
    title: "Double Diamond",
    subtitle:
      "Discover, Define, Develop, Deliver. Diverge to explore many possible problems, then converge to focus on the right one.",
    Icon: FiShuffle,
    color: "#FF6900", // orange
    background: "#703106"
  },
  {
    id: "human-centered-design",
    title: "Human Centered Design",
    subtitle:
      "Empathize, Define, Ideate, Prototype, Test. Keep the real humans in the loop constantly to avoid solving phantom problems.",
    Icon: FiUsers,
    color: "#C5439A", // pink
    background: "#7D2D62"
  },
  {
    id: "dry",
    title: "D.R.Y",
    subtitle:
      "Don't Repeat Yourself. Every piece of knowledge or logic must have a single, unambiguous representation within a system.",
    Icon: FiRepeat,
    color: "#5EC81D", // lime
    background: "#2D5912"
  },
  {
    id: "boiling-frog",
    title: "The Boiling Frog",
    subtitle:
      "Creeping normality. Small, gradual degradations in UX, performance, or code quality often go completely unnoticed until it's too late.",
    Icon: FiDroplet,
    color: "#FDC700", // amber
    background: "#413820"
  },
];