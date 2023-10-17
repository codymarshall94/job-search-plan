import Button from "@/components/Button/Button";
import React from "react";

interface Props {
  items: string[];
  onSelectItem: (item: string) => void;
}

export default function InterviewTopicSelection({
  items,
  onSelectItem,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center mt-4 gap-4">
      <ul className="flex flex-col gap-4">
        {items.map((item) => (
          <Button key={item} onClick={() => onSelectItem(item)}>
            {item}
          </Button>
        ))}
      </ul>
    </div>
  );
}
