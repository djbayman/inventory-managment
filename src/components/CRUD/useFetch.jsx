import { useContext, useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { app, storage } from "../../firebaseConfig";

const useFetch = () => {
  const [fetchPurchases, setFetchPurchases] = useState([]);
  const [fetchSales, setFetchSales] = useState([]);
  const [fetchOP, setFetchOP] = useState([]);
  const [isPending, setIsPending] = useState(false);

  const fetchData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "inventory/purchases");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setFetchPurchases(Object.values(data));
      }
    });
  };
  //
  const fetchSoldData = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, `inventory/sales`);
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setFetchSales(Object.values(data));
      }
    });
  };
  //
  const fetchOpData = () => {
    const db = getDatabase(app);
    const dbRef = ref(db, `inventory/op`);
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setFetchOP([data]);
      }
    });
  };

  useEffect(() => {
    fetchData();
    fetchSoldData();
    fetchOpData();
  }, []);

  return {
    fetchPurchases,
    fetchData: () => fetchData(),
    fetchSales,
    fetchSoldData: () => fetchSoldData(),

    fetchOpData: () => fetchOpData(),
    fetchOP,
    isPending,
    setIsPending,
  };
};

export default useFetch;
