import type { IconType } from "react-icons";

import {
    FiMousePointer,
    FiSlash,
    FiTrendingUp,
    FiNavigation,
    FiRepeat,
} from "react-icons/fi";

import feedback from "/imgs/DP/feedback.png";
import constraint from "/imgs/DP/constraint.png";
import affordance from "/imgs/DP/affordance.png";
import signifier from "/imgs/DP/signifier.png";
import mapping from "/imgs/DP/mapping.png";

export type CoreConceptItem = {
    id: string;
    title: string;
    text: string;
    src: string;
    Icon: IconType;
};

export const coreConceptItems: CoreConceptItem[] = [
    {
        id: "affordance",
        title: "Affordance",
        text: "The perceived and actual properties of the thing that determine how it could be used.",
        src: affordance,
        Icon: FiMousePointer,
    },

    {
        id: "signifiers",
        title: "Signifiers",
        text: "Signals that tell users where an action is possible.",
        src: signifier,
        Icon: FiNavigation,
    },



    {
        id: "mapping",
        title: "Mapping",
        text: "The relationship between controls and their effects.",
        src: mapping,
        Icon: FiTrendingUp,
    },

    {
        id: "feedback",
        title: "Feedback",
        text: "The response a design gives after a user action.",
        src: feedback,
        Icon: FiRepeat,
    },

    {
        id: "constraints",
        title: "Constraints",
        text: "Limits that guide what users can or cannot do.",
        src: constraint,
        Icon: FiSlash,
    },


];