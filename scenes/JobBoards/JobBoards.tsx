import List from "@/components/List/List";
import PageHeader from "@/components/PageHeader/PageHeader";
import { JOB_BOARDS } from "@/constants/jobBoards";

export default function JobBoards() {
  return (
    <>
      <PageHeader title="Job Boards" description="Find your next job here!" />
      <List items={JOB_BOARDS} />
    </>
  );
}
