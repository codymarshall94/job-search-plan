import ActionButton from "@/components/ActionButton/ActionButton";
import SvgIcon from "@/components/SvgIcon/SvgIcon";
import React from "react";

interface DrawerItemProps {
  savedSearches: { name: string; searchString: string }[];
  copySavedSearch: (searchString: string) => void;
  deleteSavedSearch: (index: number) => void;
}

export default function DrawerItem({
  savedSearches,
  copySavedSearch,
  deleteSavedSearch,
}: DrawerItemProps) {
  return (
    <>
      {savedSearches.length > 0 ? (
        savedSearches.map((search, index) => (
          <div
            key={search.name}
            className="flex justify-between items-center border-b-2 border-black py-2 px-4"
          >
            <div>{search.name}</div>

            <div className="flex items-center">
              <ActionButton
                onClick={() => copySavedSearch(search.searchString)}
                text="Copied!"
                icon={
                  <SvgIcon
                    src="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33-0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0-56.5 23.5T800-800v480q0-33-23.5-56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"
                    alt="Copy"
                  />
                }
              />
              <ActionButton
                onClick={() => deleteSavedSearch(index)}
                text="Delete"
                icon={
                  <SvgIcon
                    src="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
                    alt="Delete"
                  />
                }
              />
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">No saved searches</div>
      )}
    </>
  );
}
