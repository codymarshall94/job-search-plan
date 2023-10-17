"use client";

import { useEffect, useState } from "react";
import InterviewQuestions from "./components/InterviewQuestions/InterviewQuestions";
import ActionButton from "@/components/ActionButton/ActionButton";
import SvgIcon from "@/components/SvgIcon/SvgIcon";
import InterviewTopicSelection from "./components/InterviewTopicSelection/InterviewTopicSelection";
import { INTERVIEW_TECHNICAL } from "@/constants/techInterview";
import { INTERVIEW_BEHAVIORAL } from "@/constants/behavioralInterview";
import StepButton from "./components/StepButtons/StepButtons";
import PageHeader from "@/components/PageHeader/PageHeader";

type InterviewType = "Technical" | "Behavioral" | null;
type InterviewLevel = "junior" | "mid" | "senior";

const topics = ["html", "css", "javascript", "react", "nextjs"];

export default function Interview() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [interviewType, setInterviewType] = useState<InterviewType>(null);
  const [interviewLevel, setInterviewLevel] =
    useState<InterviewLevel>("junior");
  const [interviewTopic, setInterviewTopic] = useState<string | null>(null);
  const [questions, setQuestions] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [interviewStarted, setInterviewStarted] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(30);

  const steps = [
    { step: 1, title: "Select interview type", action: setInterviewType },
    { step: 2, title: "Select interview level", action: setInterviewLevel },
    { step: 3, title: "Select interview topic", action: setInterviewTopic },
    { step: 4, title: "Start the interview" },
  ];

  useEffect(() => {
    console.log(interviewType, interviewLevel, interviewTopic);
  }, [interviewType, interviewLevel, interviewTopic]);

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAction = (action: any, value: any) => {
    if (action) {
      action(value);
      handleNextStep();
    }
  };

  const shuffleArray = (array: string[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const startInterview = () => {
    setInterviewStarted(true);
    setCurrentQuestionIndex(0);
    setSeconds(30);
  };

  const resetInterview = () => {
    shuffleArray(questions);
    setInterviewStarted(false);
    setCurrentQuestionIndex(0);
    setSeconds(30);
  };

  useEffect(() => {
    if (interviewTopic) {
      console.log(interviewType, interviewLevel, interviewTopic);
      const shuffledQuestions = shuffleArray(
        interviewType === "Technical"
          ? INTERVIEW_TECHNICAL[interviewLevel][interviewTopic]
          : INTERVIEW_BEHAVIORAL
      );
      setQuestions(shuffledQuestions);
    }
  }, [interviewTopic, interviewType, interviewLevel]);

  useEffect(() => {
    if (interviewStarted) {
      const timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          }
          setSeconds(30);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [interviewStarted, currentQuestionIndex, seconds, questions]);

  return (
    <div className="flex flex-col items-center justify-center mt-4 h-full">
      <PageHeader
        title="Interview"
        description="Practice your interview skills through a mock interview."
      />
      <div className="flex flex-col mt-4 gap-4 flex-grow">
        {interviewStarted && (
          <div className="flex items-center justify-center my-12 gap-4">
            <p
              className="text-4xl font-bold text-center text-[#2F2F2F] mt-4"
              style={{ minWidth: "80px" }}
            >
              {seconds}
            </p>
            <ActionButton
              onClick={resetInterview}
              text="Form Reset"
              icon={
                <SvgIcon
                  src="M440-122q-121-15-200.5-105.5T160-440q0-66 26-126.5T260-672l57 57q-38 34-57.5 79T240-440q0 88 56 155.5T440-202v80Zm80 0v-80q87-16 143.5-83T720-440q0-100-70-170t-170-70h-3l44 44-56 56-140-140 140-140 56 56-44 44h3q134 0 227 93t93 227q0 121-79.5 211.5T520-122Z"
                  alt="Reset"
                />
              }
            />
          </div>
        )}
        <div className="flex flex-col mt-4 gap-4 flex-grow">
          {currentStep === 4 ? (
            <InterviewQuestions
              selectedTopic={interviewTopic}
              questions={questions}
              currentQuestionIndex={currentQuestionIndex}
              onClickStart={startInterview}
              interviewStarted={interviewStarted}
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              {currentStep !== 1 && (
                <StepButton
                  currentStep={currentStep}
                  handlePreviousStep={handlePreviousStep}
                  handleNextStep={handleNextStep}
                  isFirstStep={currentStep === 1}
                  isLastStep={currentStep === 3}
                />
              )}
              <p className="text-lg font-bold text-center text-[#2F2F2F] mt-4">
                {steps[currentStep - 1].title}
              </p>

              {currentStep === 3 ? (
                <InterviewTopicSelection
                  items={topics}
                  onSelectItem={(value: string) =>
                    handleAction(steps[currentStep - 1].action, value)
                  }
                />
              ) : (
                <div>
                  {currentStep === 1 && (
                    <InterviewTopicSelection
                      items={["Technical", "Behavioral"]}
                      onSelectItem={(value: string) =>
                        handleAction(steps[currentStep - 1].action, value)
                      }
                    />
                  )}
                  {currentStep === 2 && (
                    <InterviewTopicSelection
                      items={["junior", "mid", "senior"]}
                      onSelectItem={(value: string) =>
                        handleAction(steps[currentStep - 1].action, value)
                      }
                    />
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
