"use client";

import { useState } from "react";

const BooleanSearchForm: React.FC = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState("");
  const [searchString, setSearchString] = useState("");

  const generateSearchString = () => {
    let searchString = "";

    if (jobTitle) {
      searchString += `"${jobTitle}"`;
    }

    if (location) {
      searchString += ` AND location:"${location}"`;
    }

    if (skills) {
      searchString += ` AND skills:"${skills}"`;
    }

    setSearchString(searchString);
  };

  return (
    <div className="bg-gray-900 p-6 rounded-md border border-gray-700">
      <h2 className="text-xl font-semibold text-white mb-4">Job Search</h2>
      <form>
        <div className="mb-4">
          <label className="text-white" htmlFor="jobTitle">
            Job Title:
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full p-2 bg-gray-800 text-white border-b-2 border-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="text-white" htmlFor="location">
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 bg-gray-800 text-white border-b-2 border-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="text-white" htmlFor="skills">
            Skills:
          </label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full p-2 bg-gray-800 text-white border-b-2 border-blue-500 focus:outline-none"
          />
        </div>
        <button
          type="button"
          onClick={generateSearchString}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 hover:border-blue-600 hover:opacity-90"
        >
          Generate Search String
        </button>
      </form>
      {searchString && (
        <div className="mt-4">
          <p className="text-white">Generated Search String:</p>
          <code className="text-white bg-gray-800 p-2 rounded-md">
            {searchString}
          </code>
        </div>
      )}
    </div>
  );
};

export default BooleanSearchForm;
