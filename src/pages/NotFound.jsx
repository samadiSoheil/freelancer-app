import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";

export default function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="container">
      <div className="w-full h-screen flex justify-center items-center text-slate-600">
        <div className="w-full h-screen flex flex-col justify-center items-center md:max-w-[660px] space-y-16">
          <div className="w-full flex justify-start ">
            <button
              onClick={moveBack}
              className="px-4 py-2 bg-secondary-100 flex justify-center items-center gap-3 rounded-full shadow "
            >
              <HiArrowRight />
              <span>برگشت به صفحه قبل</span>
            </button>
          </div>
          <h1 className="font-VazirBold text-6xl text-slate-500">
            این صفحه پیدا نشد!💔🤦‍♂️
          </h1>
        </div>
      </div>
    </div>
  );
}
