// ListItemLink.js
import React from "react";
import SvgIcon from "@/components/SvgIcon/SvgIcon";
import Badge from "@/components/Badge/Badge";

interface ListItemLinkProps {
  item: {
    name: string;
    url: string;
    tags?: string[];
    description?: string;
  };
}

function ListItemLink({ item }: ListItemLinkProps) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex justify-between items-center border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-md p-4 hover:bg-[#bc95d4] transition-bg duration-300"
    >
      <div className="flex flex-col">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold mr-4">{item.name}</h1>
          {item.tags && <Badge badgeText={item.tags[0]} />}
        </div>
        <p>{item.description}</p>
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
}

export default ListItemLink;
