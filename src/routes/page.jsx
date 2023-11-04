import { useEffect, useState } from "react";
import DefaultHeader from "../components/header/DefaultHeader";
import useScan from "../hooks/useScan";
import monthly from "../store/monthly.json";
function HomePage() {
  const [Element] = useScan();
  const [month, setMonth] = useState([]);
  useEffect(() => {
    document.title = "Dashboard - ScanEase";
    console.log(month);
  }, [month]);
  return (
    <>
      <DefaultHeader>Home</DefaultHeader>
      <button
        onClick={() => {
          setMonth((e) => {
            const nextData = [...e, new Date()];
            return nextData;
          });
        }}
      >
        push
      </button>
      <div>{Element}</div>
    </>
  );
}

export default HomePage;
