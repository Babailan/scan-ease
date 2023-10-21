import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";

export default function Root() {
  return (
    <div className="flex">
      <div className="max-w-xs">
        <Sidebar />
      </div>
      <div className="w-full p-10">
        <Outlet />
      </div>
    </div>
  );
}
