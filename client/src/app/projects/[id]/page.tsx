"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import ProjectHeader from "@/app/projects/ProjectHeader/ProjectHeader";
import Board from "../Board/Board";
import List from "../List/List";
import Timeline from "../Timeline/Timeline";

const Project = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<string>("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <Board
          id={id as string}
          setIsModalNewTaskOpen={setIsModalNewTaskOpen}
        />
      )}
      {activeTab === "List" && (
        <List id={id as string} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "Timeline" && (
        <Timeline
          id={id as string}
          setIsModalNewTaskOpen={setIsModalNewTaskOpen}
        />
      )}
    </div>
  );
};

export default Project;
