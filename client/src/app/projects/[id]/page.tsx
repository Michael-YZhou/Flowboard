"use client";

import { useParams } from "next/navigation";
import React, { useState } from "react";
import ProjectHeader from "@/components/ProjectHeader/ProjectHeader";

const Project = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<string>("Board");

  return (
    <div>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* {activeTab === "Board" && <Board />} */}
    </div>
  );
};

export default Project;
