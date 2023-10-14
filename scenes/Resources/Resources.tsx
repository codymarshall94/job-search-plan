"use client";

import Badge from "@/components/Badge/Badge";
import Filter from "@/components/Filter/Filter";
import ListItemLink from "@/components/ListItemLink/ListItemLink";
import PageHeader from "@/components/PageHeader/PageHeader";
import SvgIcon from "@/components/SvgIcon/SvgIcon";
import { WEB_DEV_RESOURCES, WebDevTag } from "@/constants/resources";
import { useState } from "react";

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
    <div className="flex flex-col min-h-screen bg-[#BAFCA2]">
      <PageHeader
        title="Web Development Resources"
        description="Here are some resources to help you learn web development!"
      />
      <Filter selectedTag={selectedTag} handleTagChange={handleTagChange} />
      <div
        className="flex flex-col mt-4 gap-4 p-4"
        style={{ maxHeight: "calc(100vh - 20%)", overflowY: "auto" }}
      >
        {filteredResources.map((resource) => {
          return <ListItemLink item={resource} key={resource.name} />;
        })}
      </div>
    </div>
  );
}
