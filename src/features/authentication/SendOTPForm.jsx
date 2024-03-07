import { useState } from "react";
import TextFiled from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authServise";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";

export default function SendOTPForm({ onChamgeStep }) {
  const [phoneNumber, setPhoneNumber] = useState("");

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const senfOtpHandler = async (e) => {
    e.preventDefault();
    console.log(phoneNumber);
    try {
      const { data } = await mutateAsync({ phoneNumber });
      console.log(data);
      toast.success(data.message);
      onChamgeStep(2);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
    setPhoneNumber("");
  };

  return (
    <form className="space-y-4" onSubmit={senfOtpHandler}>
      <TextFiled
        name="phoneNumber"
        label="شماره موبایل"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div>
        {!isPending ? (
          <Loading width={60} />
        ) : (
          <button type="submit" className="btn btn--primery w-full">
            ارسال کد تایید
          </button>
        )}
      </div>
    </form>
  );
}
