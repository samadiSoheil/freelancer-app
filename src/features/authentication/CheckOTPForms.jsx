import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authServise";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import Loading from "../../ui/Loading";
const RESEND_TIME = 10;

export default function CheckOTPForms({ phoneNumber, onBack, reSendOtp }) {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });
  const handlerCheckOtp = async (e) => {
    e.preventDefault();
    console.log(phoneNumber);
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      console.log(message);
      toast.success(message);
      if (user.isActive) {
      } else {
        navigate("/complet-profile");
      }
    } catch (err) {
      console.log(err.response.data.message);
      toast.error(err?.response?.data?.message);
      setOtp("");
    }
  };

  useEffect(() => {
    const timer = time > 0 && setTimeout(() => setTime((prev) => prev - 1), 1000);
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [time]);
  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <button
          onClick={() => onBack((pre) => pre - 1)}
          className="size-7 bg-secondary-100 flex justify-center items-center rounded-full shadow "
        >
          <HiArrowRight className="text-secondary-800" />
        </button>
        <div className="text-primary-600">
          {time ? time : <p className="text-red-500">زمان تمام شد</p>}
        </div>
      </div>
      <form className="space-y-4" onSubmit={handlerCheckOtp}>
        <p className="font-VazirBold text-secondary-800">کد تایید را وارد کنید</p>
        <p className="text-secondary-300">
          کد به شماره <span>{phoneNumber}</span> ارسال شد.
        </p>
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
        {isPending ? (
          <Loading width={60} />
        ) : (
          <button className="btn btn--primery w-full">تایید</button>
        )}
      </form>
      <p
        className={`mt-10 text-center text-secondary-300 transition-all duration-300 ${
          !time
            ? "opacity-100 visible h-auto "
            : "opacity-0 invisible h-0 overflow-hidden"
        }`}
      >
        پیامک نیامد؟
        <button
          onClick={() => {
            reSendOtp;
            setTime(RESEND_TIME);
          }}
          className="text-primary-700 font-VazirBold"
        >
          &nbsp;ارسال مجدد
        </button>
      </p>
    </div>
  );
}
