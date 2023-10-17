"use client";

import Filter from "@/components/Filter/Filter";
import List from "@/components/List/List";
import PageHeader from "@/components/PageHeader/PageHeader";
import { WEB_BOOKS } from "@/constants/books";
import { WebDevTag } from "@/constants/resources";
import { useState } from "react";

const bookTags = [
  "JavaScript",
  "TypeScript",
  "Programming",
  "Web Development",
  "CSS",
  "Web Design",
  "Node.js",
  "Frontend Development",
  "HTML",
  "React",
  "Next.js",
  "Best Practices",
  "HTML5",
  "Data-Intensive",
  "Databases",
  "System Design",
];

export default function Books() {
  const [selectedTag, setSelectedTag] = useState<string | "All">("All");

  const filteredBooks =
    selectedTag === "All"
      ? WEB_BOOKS
      : WEB_BOOKS.filter((book) => book.tags.includes(selectedTag));

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
        filterTags={bookTags}
      />
      <List items={filteredBooks} />
    </>
  );
}
