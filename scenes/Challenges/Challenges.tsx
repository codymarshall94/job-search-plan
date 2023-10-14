import Badge from "@/components/Badge/Badge";
import PageHeader from "@/components/PageHeader/PageHeader";
import { TECHNICAL_CHALLENGES } from "@/constants/frontendChallenges";
import Link from "next/link";

export default function Challenges() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <PageHeader title="Frontend Challenges" description="Test your skills!" />
      {TECHNICAL_CHALLENGES.map((challenge) => {
        return (
          <Link
            key={challenge.name}
            href={`/challenges/${challenge.slug}`}
            className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-md p-4 hover:bg-[#bc95d4] transition-bg duration-300"
          >
            <div className="flex flex-col">
              <div className="flex">
                <h1 className="text-2xl font-bold mr-4">{challenge.name}</h1>
                <Badge badgeText={challenge.level} />
              </div>
              <p>{challenge.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
