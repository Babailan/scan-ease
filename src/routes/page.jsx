import { useEffect } from "react";
import DefaultHeader from "../components/header/DefaultHeader";
import useScan from "../hooks/useScan";

function HomePage() {
  const [Element] = useScan();
  useEffect(() => {
    document.title = "Dashboard - ScanEase";
  }, []);
  return (
    <>
      <DefaultHeader>Home</DefaultHeader>
      <div>{Element}</div>
    </>
  );
}

export default HomePage;
