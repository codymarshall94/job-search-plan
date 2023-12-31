"use client";

import Filter from "@/components/Filter/Filter";
import List from "@/components/List/List";
import PageHeader from "@/components/PageHeader/PageHeader";
import { WEB_DEV_RESOURCES, WebDevTag } from "@/constants/resources";
import { useState } from "react";

const resourceTags = [
  "Documentation",
  "HTML",
  "CSS",
  "JavaScript",
  "Tutorials",
  "Q&A",
  "Programming",
  "Version Control",
  "Web Development",
  "Code Hosting",
  "Front-End",
  "Web Design",
  "UI/UX",
  "Community",
  "Blogging",
];

export default function Resources() {
  const [selectedTag, setSelectedTag] = useState<WebDevTag | "All">("All");

  const filteredResources =
    selectedTag === "All"
      ? WEB_DEV_RESOURCES
      : WEB_DEV_RESOURCES.filter((resource) =>
          resource.tags.includes(selectedTag)
        );

  const handleTagChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTag(event.target.value as WebDevTag | "All");
  };

  return (
    <>
      <PageHeader
        title="Web Development Resources"
        description="Here are some resources to help you learn web development!"
      />
      <Filter
        selectedTag={selectedTag}
        handleTagChange={handleTagChange}
        filterTags={resourceTags}
      />
      <List items={filteredResources} />
    </>
  );
}
