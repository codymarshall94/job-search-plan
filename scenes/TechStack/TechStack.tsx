"use client";
import Filter from "@/components/Filter/Filter";
import List from "@/components/List/List";

import PageHeader from "@/components/PageHeader/PageHeader";
import { TECH_STACKS } from "@/constants/techStack";
import { useState } from "react";

const techStackTags = ["Frontend", "Backend", "UI Library", "CSS Option"];

export default function TechStack() {
  const [selectedTag, setSelectedTag] = useState<string | "All">("All");

  const filteredTech =
    selectedTag === "All"
      ? TECH_STACKS
      : TECH_STACKS.filter((tech) => tech.tags.includes(selectedTag));

  const handleTagChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTag(event.target.value as string | "All");
  };

  return (
    <>
      <PageHeader title="Tech Stack" description="Tech Stack" />
      <Filter
        selectedTag={selectedTag}
        handleTagChange={handleTagChange}
        filterTags={techStackTags}
      />
      <List items={filteredTech} />
    </>
  );
}
