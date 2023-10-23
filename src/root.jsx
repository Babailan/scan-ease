import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";

// Import ChartJS Globally
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

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
