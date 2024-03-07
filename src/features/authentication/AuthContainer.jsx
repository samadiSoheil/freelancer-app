import { useState } from "react";
import CheckOTPForms from "./CheckOTPForms";
import SendOTPForm from "./SendOTPForm";

export default function AuthCountainer() {
  const [step, setStep] = useState(1);
  console.log(step);
  const renderStep = () => {
    switch (step) {
      case 1:
        return <SendOTPForm onChamgeStep={setStep} />;
      case 2:
        return <CheckOTPForms />;
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm space-y-6">{renderStep()}</div>;
}
