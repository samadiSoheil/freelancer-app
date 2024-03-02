import { useState } from "react";
import TextFiled from "../../ui/TextField";

export default function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <form className="space-y-4">
      <TextFiled
        name="phoneNumber"
        label="شماره موبایل"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button className="btn btn--primery w-full">ارسال کد تایید</button>
    </form>
  );
}
