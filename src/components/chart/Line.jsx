import { useEffect, useRef } from "react";
import { Line as LineChartJS } from "react-chartjs-2";

// data = { labels:string[],data:number[]}
export default function Line({ data }) {
  const ref = useRef();
  useEffect(() => {
    function WindowChange() {
      ref.current.canvas.style.height = 0;
      ref.current.canvas.style.width = 0;
    }
    window.addEventListener("resize", WindowChange);
    return () => {
      window.removeEventListener("resize", WindowChange);
    };
  }, []);

  return (
    <div>
      <LineChartJS
        options={{
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Sales",
            },
          },
        }}
        data={{
          labels: data.labels,
          datasets: [
            {
              label: "Special offer $",
              data: data.datasets,
              backgroundColor: "#ffbdd0",
              borderColor: "#C70039",
              tension: 0.3,
              fill: true,
            },
          ],
        }}
        ref={ref}
      />
    </div>
  );
}
