import Button from "@/components/Button/Button";
import React from "react";

interface Props {
  topics: string[];
  onSelectTopic: any;
}

export default function InterviewTopicSelection({
  topics,
  onSelectTopic,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center mt-4 gap-4">
      <p className="text-lg font-bold text-center text-[#2F2F2F] mt-4">
        Select a type of interview prep to get started!
      </p>
      <ul className="flex flex-col gap-4">
        {topics.map((topic) => (
          <Button key={topic} onClick={() => onSelectTopic(topic)}>
            {topic}
          </Button>
        ))}
      </ul>
    </div>
  );
}
