import { Link, useLocation } from "react-router-dom";

export function SideBarButton({ text, route, icon }) {
  const location = useLocation();

  return (
    <Link
      className={`flex items-center gap-5 text-left rounded-md p-2 font-bold w-60 hover:bg-lightgray dark:text-white text-black ${
        route == location.pathname && "bg-lightgray"
      }`}
      to={route}
    >
      {icon}
      {text}
    </Link>
  );
}
