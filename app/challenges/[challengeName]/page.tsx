import Challenge from "@/scenes/Challenges/nestedPages/Challenge/Challenge";

interface pageProps {
  params: {
    challengeName: string;
  };
}

export default function ChallengePage({ params }: pageProps) {
  return <Challenge challengeName={params.challengeName} />;
}
