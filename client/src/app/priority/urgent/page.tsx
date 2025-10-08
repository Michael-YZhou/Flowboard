import React from "react";
import ReusablePriorityPage from "../ReusablePriorityPage/ReusablePriorityPage";
import { Priority } from "@/store/types";

const Urgent = () => {
  return <ReusablePriorityPage priority={Priority.Urgent} />;
};

export default Urgent;
