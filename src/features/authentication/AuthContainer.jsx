import { useState } from "react";
import CheckOTPForms from "./CheckOTPForms";
import SendOTPForm from "./SendOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authServise";
import toast from "react-hot-toast";

export default function AuthCountainer() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState(1);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const senfOtpHandler = async (e) => {
    e.preventDefault();
    console.log(phoneNumber);
    try {
      const { data } = await mutateAsync({ phoneNumber });
      console.log(data);
      toast.success(data.message);
      setStep(2);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
    setPhoneNumber("");
  };

  console.log(step);
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isPending={isPending}
            sendOtp={senfOtpHandler}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
        );
      case 2:
        return (
          <CheckOTPForms
            phoneNumber={phoneNumber}
            onBack={setStep}
            reSendOtp={senfOtpHandler}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm space-y-6">{renderStep()}</div>;
}
