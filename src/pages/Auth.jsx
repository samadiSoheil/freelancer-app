import AuthCountainer from "../features/authentication/AuthContainer";

export default function Auth() {
  return (
    <div className="container">
      <div className="w-ful h-screen flex justify-center items-center">
        <AuthCountainer />
      </div>
    </div>
  );
}
