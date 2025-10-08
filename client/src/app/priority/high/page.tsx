import React from "react";
import ReusablePriorityPage from "../ReusablePriorityPage/ReusablePriorityPage";
import { Priority } from "@/store/types";

const High = () => {
  return <ReusablePriorityPage priority={Priority.High} />;
};

export default High;
