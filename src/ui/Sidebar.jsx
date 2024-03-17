import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className=" bg-secondary-100 row-start-1 row-span-2  border-l border-solid border-secondary-300 px-2 py-5">
      <ul className="space-y-2 text-secondary-700">
        <CustomNavLink to="/owner/dashboard">
          <HiHome />
          <span>خانه</span>
        </CustomNavLink>
        <CustomNavLink to="/owner/projects">
          <HiCollection />
          <span>پروژه ها</span>
        </CustomNavLink>
      </ul>
    </div>
  );
}

function CustomNavLink({ to, children }) {
  const BASE_STYLE =
    "flex items-center gap-2 px-4 py-2 rounded-radius-sm cursor-pointer transition-all duration-300";
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${BASE_STYLE} bg-primary-100/50 text-primary-900`
            : `${BASE_STYLE}  hover:bg-secondary-200/60`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
