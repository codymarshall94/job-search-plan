import Button from "@/components/Button/Button";

interface StepButtonProps {
  currentStep: number;
  handlePreviousStep: () => void;
  handleNextStep: () => void;
  isLastStep: boolean;
  isFirstStep: boolean;
}

export default function StepButton({
  handlePreviousStep,
  handleNextStep,
  isLastStep,
  isFirstStep,
}: StepButtonProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      {!isFirstStep && <Button onClick={handlePreviousStep}>Previous</Button>}
      {!isLastStep && <Button onClick={handleNextStep}>Next</Button>}
    </div>
  );
}
