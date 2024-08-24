import { useContext, useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { app, auth } from "../../firebaseConfig";
import { InventoryContext } from "../../context/GlobalContext";

const useFetch = () => {
  const [userValues, setUserValues] = useState(null);
  const [fetchPurchases, setFetchPurchases] = useState([]);
  const [fetchSales, setFetchSales] = useState([]);
  const [fetchOP, setFetchOP] = useState([]);
  const { userId, setUserId } = useContext(InventoryContext);

  const db = getDatabase(app);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUserId(user.uid);
        const dbRef = ref(db, `inventory/${userId}/Auth`);
        onValue(dbRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            setUserValues(data);
          }
        });
      }
    });
  };

  const fetchData = async () => {
    if (userId) {
      const dbRef = ref(db, `inventory/${userId}/purchases`);
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setFetchPurchases(Object.values(data));
        }
      });
    }
  };
  //
  const fetchSoldData = async () => {
    if (userId) {
      const dbRef = ref(db, `inventory/${userId}/sales`);
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setFetchSales(Object.values(data));
        }
      });
    }
  };
  //
  const fetchOpData = () => {
    if (userId) {
      const dbRef = ref(db, `inventory/${userId}/op`);
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setFetchOP([data]);
        }
      });
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchData();
    fetchSoldData();
    fetchOpData();
  }, [userId]);

  return {
    userId,
    userValues,
    fetchPurchases,
    fetchData: () => fetchData(),
    fetchSales,
    fetchSoldData: () => fetchSoldData(),
    fetchOpData: () => fetchOpData(),
    fetchOP,
  };
};

export default useFetch;
