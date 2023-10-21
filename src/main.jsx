import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./root";
import HomePage from "./routes/page";
import HistoryPage from "./routes/history/page";
import DashBoardPage from "./routes/dashboard/page";
import "./index.css";

// UseHashRouter for electron because it's not a browser
const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/history",
        element: <HistoryPage />,
      },
      {
        path: "/dashboard",
        element: <DashBoardPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="dark:bg-black dark:text-white min-h-screen bg-white text-black">
      {/* <RouterProvider router={router}></RouterProvider> */}
    </main>
  </React.StrictMode>
);
