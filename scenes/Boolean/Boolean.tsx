"use client";

import BooleanSearchForm from "@/components/BooleanSearchForm/BooleanSearchForm";
import Drawer from "@/components/Drawer/Drawer";
import DrawerItem from "@/components/Drawer/components/DrawerItem/DrawerItem";
import Modal from "@/components/Modal/Modal";
import PageHeader from "@/components/PageHeader/PageHeader";
import { useEffect, useState } from "react";

export default function BooleanSearch() {
  const [isDrawerActive, setIsDrawerActive] = useState<boolean>(false);
  const [searchString, setSearchString] = useState<string>("");
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [saveName, setSaveName] = useState<string>("");
  const [savedSearches, setSavedSearches] = useState<
    { name: string; searchString: string }[]
  >([]);
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  const openModal = () => {
    setIsModalActive(true);
  };

  const closeModal = () => {
    setIsModalActive(false);
  };

  useEffect(() => {
    const savedSearchesFromLocalStorage = localStorage.getItem("savedSearches");
    if (savedSearchesFromLocalStorage) {
      setSavedSearches(JSON.parse(savedSearchesFromLocalStorage));
    }
  }, []);

  const copySavedSearch = (searchString: string) => {
    navigator.clipboard
      .writeText(searchString)
      .then(() => {
        setIsCopied(true);
      })
      .catch((error) => {
        console.error("Copy to clipboard failed: ", error);
      });
  };

  const saveSearch = () => {
    if (saveName && searchString) {
      const newSavedSearch = { name: saveName, searchString };
      const updatedSavedSearches = [...savedSearches, newSavedSearch];
      setSavedSearches(updatedSavedSearches);
      localStorage.setItem(
        "savedSearches",
        JSON.stringify(updatedSavedSearches)
      );
      setSaveName("");
      setIsSaved(true);
      closeModal();
    }
  };

  const deleteSavedSearch = (index: number) => {
    const updatedSavedSearches = [...savedSearches];
    updatedSavedSearches.splice(index, 1);
    setSavedSearches(updatedSavedSearches);
    localStorage.setItem("savedSearches", JSON.stringify(updatedSavedSearches));
  };

  return (
    <main className="flex flex-col">
      <PageHeader
        title="Boolean Search"
        description="Boolean Search can refine your job search!"
      />
      <div className="text-center mt-12 mb-4">
        <button
          type="button"
          onClick={() => setIsDrawerActive(!isDrawerActive)}
          className="cursor-pointer rounded-md border-2 border-black bg-[#C4A1FF] px-4 py-1.5 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        >
          Saved Searches
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <BooleanSearchForm
          searchString={searchString}
          setSearchString={setSearchString}
          openModal={openModal}
          isSaved={isSaved}
          setIsSaved={setIsSaved}
          isCopied={isCopied}
          setIsCopied={setIsCopied}
          copyToClipboard={copySavedSearch}
        />
      </div>
      <Drawer active={isDrawerActive} setActive={setIsDrawerActive}>
        <>
          <DrawerItem
            savedSearches={savedSearches}
            copySavedSearch={copySavedSearch}
            deleteSavedSearch={deleteSavedSearch}
          />
        </>
      </Drawer>
      <Modal active={isModalActive} setActive={setIsModalActive}>
        <h2 className="text-2xl font-semibold mb-4">
          Choose a name to save as
        </h2>
        <input
          type="text"
          value={saveName}
          onChange={(e) => setSaveName(e.target.value)}
          className="border-2 border-black rounded-md p-2 w-full"
          maxLength={20}
        />
        <button
          type="button"
          onClick={saveSearch}
          className="mt-4 cursor-pointer rounded-md border-2 border-black bg-white px-4 py-1.5 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        >
          Save
        </button>
      </Modal>
    </main>
  );
}
