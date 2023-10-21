import { useEffect } from "react";
import DefaultHeader from "../../components/header/DefaultHeader";

export default function HistoryPage() {
  useEffect(() => {
    document.title = "History - ScanEase";
  }, []);
  return (
    <>
      <DefaultHeader>History</DefaultHeader>
    </>
  );
}
