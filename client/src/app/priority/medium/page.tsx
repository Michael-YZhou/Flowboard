import React from "react";
import ReusablePriorityPage from "../ReusablePriorityPage/ReusablePriorityPage";
import { Priority } from "@/store/types";

const Medium = () => {
  return <ReusablePriorityPage priority={Priority.Medium} />;
};

export default Medium;
