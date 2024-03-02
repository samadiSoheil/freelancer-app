import CheckOTPForms from "../features/authentication/CheckOTPForms";
import SendOTPForm from "../features/authentication/SendOTPForm";

export default function Auth() {
  return (
    <div className="w-ful h-screen flex justify-center items-center">
      <div className="w-full sm:max-w-sm space-y-6">
        <SendOTPForm />
        <CheckOTPForms />
      </div>
    </div>
  );
}
