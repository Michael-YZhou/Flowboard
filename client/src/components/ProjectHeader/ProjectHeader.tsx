import React, { useState } from "react";
import Header from "@/components/Header/Header";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const ProjectHeader = ({ activeTab, setActiveTab }: Props) => {
  const [isModalNewProjectOpen, setIsModalNewProjectOpen] = useState(false);

  return (
    <div className="px-4 xl:px-6">
      {/* NODAL NEW PROJECT */}
      <div className="py-6 lg:pt-8 lg:pb-4">
        <Header name="Product Design Development" />
      </div>
    </div>
  );
};

export default ProjectHeader;
