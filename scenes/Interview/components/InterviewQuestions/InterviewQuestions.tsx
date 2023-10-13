import Button from "@/components/Button/Button";

interface InterviewQuestionsProps {
  selectedTopic: string;
  questions: string[];
  currentQuestionIndex: number;
  onClickStart: () => void;
  interviewStarted: boolean;
}

export default function InterviewQuestions({
  selectedTopic,
  questions,
  currentQuestionIndex,
  onClickStart,
  interviewStarted,
}: InterviewQuestionsProps) {
  return (
    <div>
      {!interviewStarted ? (
        <div className="flex flex-col text-center my-4 gap-4">
          <h2 className="text-xl font-bold">
            Interview Questions: {selectedTopic}
          </h2>
          <p className="text-lg font-bold text-center text-[#2F2F2F] mt-4">
            You will have 30 seconds to answer each question. Be concise!
          </p>
          <Button onClick={onClickStart}>Start</Button>
          <p className="text-gray-500">Press Start When Ready</p>
        </div>
      ) : (
        <>
          {currentQuestionIndex < questions.length && (
            <div className="bg-white rounded-md border-2 border-black py-4 px-8 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none">
              <p>{questions[currentQuestionIndex]}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
