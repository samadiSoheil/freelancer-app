import { useState } from "react";
import TextFiled from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import Loading from "../../ui/Loading";
import { completeProfileFunc } from "../../services/authServise";
import toast from "react-hot-toast";

export default function CompleteProfileForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [role, setRole] = useState("FREELANCER");

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfileFunc,
  });

  const handlerSubmitUser = async (e) => {
    e.preventDefault();
    try {
      let { message, user } = await mutateAsync({
        name: userName,
        email: userEmail,
        role: role,
      });
      toast.success(message);
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message);
    }
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
            {isPending ? (
              <Loading />
            ) : (
              <button type="submit" className="btn btn--primery w-full mt-3">
                تایید
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
