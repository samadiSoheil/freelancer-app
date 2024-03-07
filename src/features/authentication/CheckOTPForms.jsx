import { useState } from "react";
import OTPInput from "react-otp-input";

export default function CheckOTPForms() {
  const [otp, setOtp] = useState("");
  return (
    <div>
      <form className="space-y-4">
        <p className="font-VazirBold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span></span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid #b7c5ff",
            borderRadius: "0.5rem",
            backgroundColor: "white",
          }}
          shouldAutoFocus={true}
        />
        <button className="btn btn--primery w-full">تایید</button>
      </form>
    </div>
  );
}
