import ListItemLink from "@/components/ListItemLink/ListItemLink";
import PageHeader from "@/components/PageHeader/PageHeader";
import { JOB_BOARDS } from "@/constants/jobBoards";

export default function JobBoards() {
  return (
    <div className="flex flex-col min-h-screen bg-[#BAFCA2]">
      <PageHeader title="Job Boards" description="Find your next job here!" />
      <div
        className="flex flex-col mt-4 gap-4 p-4"
        style={{ maxHeight: "calc(100vh - 20%)", overflowY: "auto" }}
      >
        {JOB_BOARDS.map((jobBoard) => (
          <ListItemLink item={jobBoard} key={jobBoard.name} />
        ))}
      </div>
    </div>
  );
}
