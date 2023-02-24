import React, { useState } from "react";

const steps = [
  { label: "Step 1" },
  { label: "Step 2" },
  { label: "Step 3" },
  { label: "Step 4" },
  { label: "step 5" },
];

const CheckIcon = () => (
  <img src="errandIcons/checkicon.svg" className="" alt="check" />
);

export default function StepProgressBar() {
  const [activeStep, setActiveStep] = useState(0);

  function handleStepClick(stepIndex: number) {
    setActiveStep(stepIndex);
  }

  return (
    <div className="flex justify-center w-full">
      <div className="flex items-center w-full max-w-2xl">
        <div className="flex items-center w-full">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div
                className={`flex flex-row  items-center justify-center w-12 h-12 text-gray-800 rounded-full ${
                  activeStep >= index
                    ? "bg-blue-700 text-white shadow"
                    : "bg-gray-300"
                }`}
                onClick={() => handleStepClick(index)}
              >
                {activeStep >= index && <CheckIcon />}
              </div>
              {index !== steps.length - 1 && (
                <div className="h-1 w-28 bg-gray-300"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export { StepProgressBar };
