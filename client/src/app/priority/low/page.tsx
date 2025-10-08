import React from "react";
import ReusablePriorityPage from "../ReusablePriorityPage/ReusablePriorityPage";
import { Priority } from "@/store/types";

const Low = () => {
  return <ReusablePriorityPage priority={Priority.Low} />;
};

export default Low;
