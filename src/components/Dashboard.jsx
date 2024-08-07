import Suppliers from "./Suppliers";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Statictics from "./Statictics";
import useFetch from "./CRUD/useFetch";
import BarChart from "./LineChart";
import { useEffect, useState } from "react";

Chart.register(CategoryScale);

const Dashboard = () => {
  const [graph, setGraph] = useState([]);
  const { fetchSales } = useFetch();

  useEffect(() => {
    let Data = [];
    let keysArr;
    for (let i = 0; i < fetchSales.length; i++) {
      keysArr = Object.keys(fetchSales[i]);
      for (let j = 0; j < keysArr.length; j++) {
        Data.push({
          id: fetchSales[i][keysArr[j]].soldFireID,
          date: fetchSales[i][keysArr[j]].soldDate,
          price: fetchSales[i][keysArr[j]].soldProductPrice,
          quantity: fetchSales[i][keysArr[j]].soldProductQuantity,
          productName: fetchSales[i][keysArr[j]].soldProductName,
        });
      }

      setGraph((prev) => [...prev, Data[i]]);
    }
  }, [fetchSales]);

  return (
    <>
      <div className="">
        <BarChart graph={graph} />
      </div>
      <Statictics />
      <Suppliers />
    </>
  );
};

export default Dashboard;
