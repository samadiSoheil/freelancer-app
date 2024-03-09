import { useState } from "react";
import TextFiled from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";

export default function CompletePrifuleForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [role, setRole] = useState("FREELANCER");

  const handlerSubmitUser = (e) => {
    e.preventDefaulr();
    console.log(userName, userEmail);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full md:max-w-sm">
        <form className="w-full space-y-4" onSubmit={handlerSubmitUser}>
          <TextFiled
            label="نام و نام خانوادگی"
            name={userName}
            value={userName}
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextFiled
            label="ایمیل"
            type="email"
            name={userEmail}
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <div className="w-full flex items-center gap-x-5">
            <RadioInput
              id="FREELANCER"
              label="فریلنسر"
              name="role"
              value="FREELANCER"
              isChecke={role === "FREELANCER"}
              onChange={(e) => setRole(e.target.value)}
            />
            <RadioInput
              id="OWNER"
              label="کارفرما"
              name="role"
              value="OWNER"
              isChecke={role === "OWNER"}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="btn btn--primery w-full mt-3">
              تایید
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
