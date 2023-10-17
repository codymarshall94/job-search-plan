"use client";

import React, { useState } from "react";
import { TECH_STACKS } from "@/constants/techStack";
import SelectionDropdown from "./components/SelectionDropdown/SelectionDropdown";
import PageHeader from "@/components/PageHeader/PageHeader";

export default function TechStackBuilder() {
  const [selectedFrontend, setSelectedFrontend] = useState<undefined | string>(
    undefined
  );
  const [selectedBackend, setSelectedBackend] = useState<undefined | string>(
    undefined
  );
  const [selectedUILibrary, setSelectedUILibrary] = useState<
    undefined | string
  >(undefined);
  const [selectedCSSOption, setSelectedCSSOption] = useState<
    undefined | string
  >(undefined);

  const techStackData = TECH_STACKS;

  return (
    <div className="tech-stack-builder">
      <PageHeader title="Tech Stack" description="Build and compare tech stacks" />
      <div className="flex">
        <SelectionDropdown
          title="Frontend"
          options={techStackData.filter((tech) =>
            tech.tags.includes("Frontend")
          )}
          selectedValue={selectedFrontend}
          onChange={setSelectedFrontend}
        />
        <SelectionDropdown
          title="Backend"
          options={techStackData.filter((tech) =>
            tech.tags.includes("Backend")
          )}
          selectedValue={selectedBackend}
          onChange={setSelectedBackend}
        />
        <SelectionDropdown
          title="UI Library"
          options={techStackData.filter((tech) =>
            tech.tags.includes("UI Library")
          )}
          selectedValue={selectedUILibrary}
          onChange={setSelectedUILibrary}
        />
        <SelectionDropdown
          title="CSS Option"
          options={techStackData.filter((tech) =>
            tech.tags.includes("CSS Option")
          )}
          selectedValue={selectedCSSOption}
          onChange={setSelectedCSSOption}
        />
      </div>
    </div>
  );
}
