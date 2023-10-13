"use client";

import { useEffect, useState } from "react";
import { INTERVIEW_SPOKEN, InterviewPrep } from "@/constants/interview";
import InterviewTopicSelection from "./components/InterviewTopicSelection/InterviewTopicSelection";
import InterviewQuestions from "./components/InterviewQuestions/InterviewQuestions";
import ActionButton from "@/components/ActionButton/ActionButton";
import SvgIcon from "@/components/SvgIcon/SvgIcon";

type InterviewLevel = typeof INTERVIEW_SPOKEN.junior;
type InterviewTopic = keyof InterviewLevel;

export default function Interview() {
  const [interviewType, setInterviewType] =
    useState<InterviewPrep>(INTERVIEW_SPOKEN);
  const [interviewLevel, setInterviewLevel] = useState<InterviewLevel>(
    INTERVIEW_SPOKEN.junior
  );
  const [interviewTopic, setInterviewTopic] = useState<
    InterviewTopic | undefined
  >();
  const [questions, setQuestions] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [interviewStarted, setInterviewStarted] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(30);

  const interviewTopics = Object.keys(interviewLevel);

  useEffect(() => {
    if (interviewTopic) {
      setQuestions(interviewLevel[interviewTopic]);
    }
  }, [interviewTopic]);

  const startInterview = () => {
    setInterviewStarted(true);
    setCurrentQuestionIndex(0);
    setSeconds(30);
  };

  const resetInterview = () => {
    setInterviewStarted(false);
    setCurrentQuestionIndex(0);
    setSeconds(30);
  };

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
      <h1 className="bg-white rounded-md border-2 border-black py-4 px-8 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none">
        Interview Prep
      </h1>
      <div className="flex flex-col items-center justify-center mt-4 gap-4 flex-grow">
        {interviewStarted && (
          <div className="flex items-center justify-center my-12 gap-4">
          <p className="text-4xl font-bold text-center text-[#2F2F2F] mt-4" style={{ minWidth: "80px" }}>
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
        {!interviewTopic ? (
          <InterviewTopicSelection
            topics={interviewTopics}
            onSelectTopic={setInterviewTopic}
          />
        ) : (
          <InterviewQuestions
            selectedTopic={interviewTopic}
            questions={questions}
            currentQuestionIndex={currentQuestionIndex}
            onClickStart={startInterview}
            interviewStarted={interviewStarted}
          />
        )}
      </div>
    </div>
  );
}
