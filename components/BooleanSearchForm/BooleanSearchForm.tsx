"use client";

import { useState } from "react";
import {
  jobLocations,
  jobSearchSites,
  positionLevels,
  softwareEngineerSkills,
  softwareEngineerTitles,
} from "@/constants/booleanTerms";
import { InputWithSelection } from "./components/InputWithSelection/InputWithSelection";
import SvgIcon from "../SvgIcon/SvgIcon";
import ActionButton from "../ActionButton/ActionButton";

type Selections = string[];

interface BoleanSearchFormProps {
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
  openModal: () => void;
  isSaved: boolean;
  setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
  copyToClipboard: (search: string) => void;
  isCopied: boolean;
  setIsCopied: React.Dispatch<React.SetStateAction<boolean>>;
}

const BooleanSearchForm = ({
  searchString,
  setSearchString,
  openModal,
  isSaved,
  setIsSaved,
  isCopied,
  setIsCopied,
  copyToClipboard,
}: BoleanSearchFormProps) => {
  const [jobSite, setJobSite] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");
  const [positionLevel, setPositionLevel] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [skills, setSkills] = useState<string>("");
  const [notWords, setNotWords] = useState<string>("");
  const [selectedJobSite, setSelectedJobSite] = useState<string>("");
  const [selectedJobTitles, setSelectedJobTitles] = useState<Selections>([]);
  const [selectedPositionLevels, setSelectedPositionLevels] =
    useState<Selections>([]);
  const [selectedLocations, setSelectedLocations] = useState<Selections>([]);
  const [selectedSkills, setSelectedSkills] = useState<Selections>([]);
  const [selectedNotWords, setSelectedNotWords] = useState<Selections>([]);

  const addJobSiteSelection = (value: string) => {
    const selectedSite = jobSearchSites.find((site) => site.name === value);
    if (selectedSite) {
      setSelectedJobSite(selectedSite.name);
      setJobSite("");
    }
  };

  const addSelection = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<Selections>>,
    inputSetter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter((prev) => [...prev, value]);
    inputSetter("");
  };

  const removeSelection = (
    index: number,
    setter: React.Dispatch<React.SetStateAction<Selections>>
  ) => {
    setter((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  const resetForm = () => {
    setJobSite("");
    setJobTitle("");
    setPositionLevel("");
    setLocation("");
    setSkills("");
    setNotWords("");
    setSelectedJobSite("");
    setSelectedJobTitles([]);
    setSelectedPositionLevels([]);
    setSelectedLocations([]);
    setSelectedSkills([]);
    setSelectedNotWords([]);
    setSearchString("");
  };

  const generateSearchString = () => {
    setIsSaved(false);
    setIsCopied(false);
    let searchString = "";

    if (selectedJobSite) {
      const selectedSite = jobSearchSites.find(
        (site) => site.name === selectedJobSite
      );
      if (selectedSite) {
        searchString += `site:${selectedSite.value}`;
      }
    }

    if (selectedJobTitles.length > 0) {
      searchString += selectedJobTitles
        .map((title) => ` "${title}"`)
        .join(" OR ");
    }

    if (selectedPositionLevels.length > 0) {
      searchString += selectedPositionLevels
        .map((level) => ` "${level}"`)
        .join(" OR ");
    }

    if (selectedLocations.length > 0) {
      searchString += ` AND (${selectedLocations.join(" OR ")})`;
    }

    if (selectedSkills.length > 0) {
      searchString += ` AND (${selectedSkills.join(" OR ")})`;
    }

    if (selectedNotWords.length > 0) {
      searchString += ` AND NOT (${selectedNotWords.join(" OR ")})`;
    }

    setSearchString(searchString);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="bg-[#BAFCA2] p-6 rounded-md border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full h-fit md:w-3/4 lg:w-1/2  ">
        <form onSubmit={handleFormSubmit}>
          <InputWithSelection
            placeholder="Job Search Site"
            value={jobSite}
            onChange={setJobSite}
            suggestions={jobSearchSites.map((site) => site.name)}
            selections={selectedJobSite ? [selectedJobSite] : []}
            onAdd={(value) => addJobSiteSelection(value)}
            onRemove={() => setSelectedJobSite("")}
          />
          <InputWithSelection
            placeholder="Job Title"
            value={jobTitle}
            onChange={setJobTitle}
            suggestions={softwareEngineerTitles.map((title) => title.name)}
            selections={selectedJobTitles}
            onAdd={(value) =>
              addSelection(value, setSelectedJobTitles, setJobTitle)
            }
            onRemove={(index) => removeSelection(index, setSelectedJobTitles)}
          />
          <InputWithSelection
            placeholder="Position Level"
            value={positionLevel}
            onChange={setPositionLevel}
            suggestions={positionLevels.map((level) => level.name)}
            selections={selectedPositionLevels}
            onAdd={(value) =>
              addSelection(value, setSelectedPositionLevels, setPositionLevel)
            }
            onRemove={(index) =>
              removeSelection(index, setSelectedPositionLevels)
            }
          />
          <InputWithSelection
            placeholder="Location"
            value={location}
            onChange={setLocation}
            suggestions={jobLocations.map((location) => location.name)}
            selections={selectedLocations}
            onAdd={(value) =>
              addSelection(value, setSelectedLocations, setLocation)
            }
            onRemove={(index) => removeSelection(index, setSelectedLocations)}
          />
          <InputWithSelection
            placeholder="Skills"
            value={skills}
            onChange={setSkills}
            suggestions={softwareEngineerSkills.map((skill) => skill.name)}
            selections={selectedSkills}
            onAdd={(value) => addSelection(value, setSelectedSkills, setSkills)}
            onRemove={(index) => removeSelection(index, setSelectedSkills)}
          />
          <InputWithSelection
            placeholder="Exclude Words"
            value={notWords}
            onChange={setNotWords}
            suggestions={[]}
            selections={selectedNotWords}
            onAdd={(value) =>
              addSelection(value, setSelectedNotWords, setNotWords)
            }
            onRemove={(index) => removeSelection(index, setSelectedNotWords)}
          />
          <div className="flex items-center">
            <button
              type="button"
              onClick={generateSearchString}
              className="flex cursor-pointer items-center rounded-md border-2 border-black bg-[#C4A1FF] px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
            >
              Generate Search String
            </button>
            <ActionButton
              onClick={resetForm}
              text="Form Reset"
              icon={
                <SvgIcon
                  src="M440-122q-121-15-200.5-105.5T160-440q0-66 26-126.5T260-672l57 57q-38 34-57.5 79T240-440q0 88 56 155.5T440-202v80Zm80 0v-80q87-16 143.5-83T720-440q0-100-70-170t-170-70h-3l44 44-56 56-140-140 140-140 56 56-44 44h3q134 0 227 93t93 227q0 121-79.5 211.5T520-122Z"
                  alt="Reset"
                />
              }
            />
          </div>
        </form>
        {searchString && (
          <div className="mt-4">
            <div className="flex items-center">
              <code className="text-black bg-white border-2 border-black p-2 rounded-md border-2 border-black px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-grow">
                {searchString}
              </code>
              <ActionButton
                onClick={() => copyToClipboard(searchString)}
                isDisabled={isCopied}
                text="Copied!"
                icon={
                  <SvgIcon
                    src="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33-0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0-56.5 23.5T800-800v480q0-33-23.5-56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"
                    alt="Copy"
                  />
                }
              />
              <ActionButton
                onClick={openModal}
                isDisabled={isSaved}
                text="Saved!"
                icon={
                  <SvgIcon
                    src="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0-56.5-23.5T800-800v640q0-33-23.5-56.5T720-80H240Zm0-80h480v-640h-80v280l-100-60-100 60v-280H240v640Zm0 0v-640 640Zm200-360 100-60 100 60-100-60-100 60Z"
                    alt="Save"
                  />
                }
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BooleanSearchForm;
