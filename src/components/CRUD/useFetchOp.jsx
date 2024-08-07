// import { getDatabase, onValue, ref } from "firebase/database";
// import { app } from "../../firebaseConfig";
// import { useEffect, useState } from "react";

// const useFetchOp = () => {
//   const [fetchOP, setFetchOP] = useState([]);

//   const fetchOpData = async () => {
//     const db = getDatabase(app);
//     const dbRef = ref(db, `inventory/op`);
//     onValue(dbRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         setFetchOP(Object.values(data));
//       }
//     });
//   };

//   useEffect(() => {
//     fetchOpData();
//   }, []);

//   return {
//     fetchOpData: () => fetchOpData(),
//     fetchOP,
//   };
// };

// export default useFetchOp;
