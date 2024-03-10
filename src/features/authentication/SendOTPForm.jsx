import TextFiled from "../../ui/TextField";
import Loading from "../../ui/Loading";

export default function SendOTPForm({ setPhoneNumber, phoneNumber, sendOtp, isPending }) {
  return (
    <form className="space-y-4" onSubmit={sendOtp}>
      <TextFiled
        name="phoneNumber"
        label="شماره موبایل"
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div>
        {isPending ? (
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
