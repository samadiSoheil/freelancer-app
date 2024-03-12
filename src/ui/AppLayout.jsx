import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <Header />
      <Sidebar />
      <div className=" flex justify-center p-20 items-center  bg-secondary-50 overflow-auto">
        <div className="w-full h-full xl:max-w-xl bg-secondary-0 shadow-lg">
          {<Outlet />}
        </div>
      </div>
    </div>
  );
}
