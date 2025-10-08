import React from "react";
import ReusablePriorityPage from "../ReusablePriorityPage/ReusablePriorityPage";
import { Priority } from "@/store/types";

const Backlog = () => {
  return <ReusablePriorityPage priority={Priority.Backlog} />;
};

export default Backlog;
