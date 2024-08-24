import Chart from "../components/inv-statistics/Chart";
import Statictics from "../components/inv-statistics/Statictics";
import useFetch from "./CRUD/useFetch";
import { useEffect, useState } from "react";
import Analyse from "../components/inv-statistics/Analyse";

const Dashboard = () => {
  const [graph, setGraph] = useState([]);
  const { fetchSales } = useFetch();

  useEffect(() => {
    let Data = [
      { name: "Sat", Total: 1000 },
      { name: "Sun", Total: 1200 },
      { name: "Mon", Total: 1250 },
      { name: "Tue", Total: 900 },
      { name: "Wed", Total: 900 },
      { name: "Thu", Total: 820 },
      { name: "Fri", Total: 0 },
    ];

    let keysArr;
    for (let i = 0; i < fetchSales.length; i++) {
      keysArr = Object.keys(fetchSales[i]);
      for (let j = 0; j < keysArr.length; j++) {
        for (let h = 0; h < Data.length; h++) {
          if (fetchSales[i][keysArr[j]].soldDate.includes(Data[h].name)) {
            Data[h].Total += fetchSales[i][keysArr[j]].soldProductPrice;
          }
        }
      }
      setGraph(Data);
    }
  }, [fetchSales]);

  return (
    <div>
      <Analyse />
      <Chart
        title="Graph represents the revenue of each day"
        aspect={3 / 1}
        graph={graph}
      />
      <Statictics />
    </div>
  );
};

export default Dashboard;
