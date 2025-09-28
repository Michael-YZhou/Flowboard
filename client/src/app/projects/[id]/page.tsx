"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import ProjectHeader from "@/app/projects/ProjectHeader/ProjectHeader";
import BoardView from "../BoardView/BoardView";
import ListView from "../ListView/ListView";
import TimelineView from "../TimelineView/TimelineView";
import TableView from "../TableView/TableView";

const Project = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<string>("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <BoardView
          id={id as string}
          setIsModalNewTaskOpen={setIsModalNewTaskOpen}
        />
      )}
      {activeTab === "List" && (
        <ListView
          id={id as string}
          setIsModalNewTaskOpen={setIsModalNewTaskOpen}
        />
      )}
      {activeTab === "Timeline" && (
        <TimelineView
          id={id as string}
          setIsModalNewTaskOpen={setIsModalNewTaskOpen}
        />
      )}
      {activeTab === "Table" && (
        <TableView
          id={id as string}
          setIsModalNewTaskOpen={setIsModalNewTaskOpen}
        />
      )}
    </div>
  );
};

export default Project;
