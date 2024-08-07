import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ graph }) => {
  const [colData, setColData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: [
          "#DAF7A6",
          "#900C3F",
          "#581845",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    if (graph.length) {
      setColData((prev) => ({
        ...prev,
        labels: graph?.map((data) => data?.quantity),
        datasets: [
          {
            label: "",
            data: graph?.map((data) => data?.price),
            backgroundColor: [
              "#DAF7A6",
              "#900C3F",
              "#581845",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      }));
    }
  }, [graph]);

  return (
    <div className="chart-container" style={{ width: "100%", height: "500px" }}>
      <h2 style={{ textAlign: "center" }}>Bar Chart Representing:</h2>
      <Bar
        data={colData || ""}
        options={{
          plugins: {
            title: {
              display: true,
              text: "The Sales of The Products",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
