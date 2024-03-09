import { useState } from "react";
import TextFiled from "../../ui/TextField";

export default function CompletePrifuleForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

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
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                id="OWNER"
                value="OWNER"
                className="size-4  form-radio text-primary-900 focus:ring-primary-900 transition-all duration-100 cursor-pointer"
              />
              <label htmlFor="OWNER">کارفرما</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                id="FREELANCER"
                value="FREELANCER"
                className="size-4 form-radio text-primary-900 focus:ring-primary-900 transition-all duration-100 cursor-pointer"
              />
              <label htmlFor="FREELANCER">فریلنسر</label>
            </div>
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
