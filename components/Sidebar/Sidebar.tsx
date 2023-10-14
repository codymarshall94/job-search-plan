"use client";

import Link from "next/link";
import Dropdown from "./components/Dropdown/DropDown";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/resources", label: "Resources" },
  { href: "/challenges", label: "Challenges" },
  { href: "/job-boards", label: "Job Boards" },
];

const dropdownLinks = [
  { href: "/boolean-search", label: "Bool Search" },
  { href: "/interview", label: "Interview" },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col w-64 h-screen px-4 py-8 border-2 border-black bg-[#bc95d4] font-bold ">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white border-b-2 border-black">
        NEOLEARN
      </h2>
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              href={href}
              key={`${href}${label}`}
              className={`${
                pathname === href ? "text-white" : "text-black"
              } hover:text-white transition-text duration-100`}
            >
              {label}
            </Link>
          ))}
          <Dropdown items={dropdownLinks} />
        </nav>
      </div>
    </div>
  );
}
