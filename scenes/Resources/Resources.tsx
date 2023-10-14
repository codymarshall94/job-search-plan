"use client";

import Badge from "@/components/Badge/Badge";
import Filter from "@/components/Filter/Filter";
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
          return (
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              key={resource.link}
              className="group flex justify-between items-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-md p-4 hover:bg-[#bc95d4] transition-bg duration-300"
            >
              <div className="flex flex-col">
                <div className="flex">
                  <h1 className="text-2xl font-bold mr-4">{resource.name}</h1>
                  <Badge badgeText={resource.tags[0]} />
                </div>
                <p>{resource.description}</p>
              </div>
              <div className="rounded-full cursor-pointer">
                <div className="flex items-center justify-center bg-white rounded-full border-2 ml-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] invisible group-hover:visible transition-all duration-100">
                  <SvgIcon
                    src="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"
                    alt="Right Chevron"
                    className="transform -rotate-90 h-8 w-8"
                  />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
