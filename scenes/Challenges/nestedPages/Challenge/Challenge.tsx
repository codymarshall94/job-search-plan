"use client";

import Badge from "@/components/Badge/Badge";
import { TECHNICAL_CHALLENGES } from "@/constants/frontendChallenges";

function ChallengeItem({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-md p-4">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mr-4">{name}</h1>
        <ul className="list-disc list-inside flex flex-col gap-4">
          {children}
        </ul>
      </div>
    </div>
  );
}

export default function Challenge({
  challengeName,
}: {
  challengeName: string;
}) {
  const challenge = TECHNICAL_CHALLENGES.find(
    (challenge) => (challenge.slug as string) === challengeName
  );

  if (!challenge) {
    return <div>Challenge not found</div>;
  }
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-md p-4">
        <div className="flex justify-between">
          <div className="flex">
            <h1 className="text-2xl font-bold mr-4">{challenge.name}</h1>
          </div>
          <Badge badgeText={challenge.level} />
        </div>
      </div>
      <ChallengeItem name="Description">
        <p>{challenge.description}</p>
      </ChallengeItem>
      <ChallengeItem name="Tasks">
        {challenge.tasks.map((task) => {
          return <li key={task}>{task}</li>;
        })}
      </ChallengeItem>
      <ChallengeItem name="Stretch Goals">
        {challenge.stretch_goals.map((goal) => {
          return <li key={goal}>{goal}</li>;
        })}
      </ChallengeItem>
    </div>
  );
}
