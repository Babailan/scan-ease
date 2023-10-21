import { useEffect } from "react";
import DefaultHeader from "../../components/header/DefaultHeader";

function DashBoardPage() {
  useEffect(() => {
    document.title = "Dashboard - ScanEase";
  }, []);
  return (
    <>
      <DefaultHeader>Exclusive Dashboard</DefaultHeader>
    </>
  );
}

export default DashBoardPage;
