import { useState } from "react";
import TextFiled from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import Loading from "../../ui/Loading";
import { completeProfileFunc } from "../../services/authServise";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function CompleteProfileForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [role, setRole] = useState("FREELANCER");
  const navigate = useNavigate();
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
      if (!user.isActive) return navigate("/complete-profile");
      if (user.status !== 2) {
        navigate("/");
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    اکانت شما در انتظار تایید توسط پشتیبان سایت میباشد
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                متوجه شدم
              </button>
            </div>
          </div>
        ));
      }
      // if (user.role == "FREELANCER") return navigate("/freelancer");
      // if (user.role == "OWNER") return navigate("/owner");
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
