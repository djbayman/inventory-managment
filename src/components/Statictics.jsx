import useFetch from "./CRUD/useFetch";

const Statictics = () => {
  let total = 0;
  let quantity = [];
  let prdName = [];

  const { fetchOP, fetchSales } = useFetch();

  for (let key in fetchOP[0]) {
    quantity.push(fetchOP[0][key].opProductQuantity);
    prdName.push(fetchOP[0][key].opProductName);
  }
  let keysArr;
  for (let i = 0; i < fetchSales.length; i++) {
    keysArr = Object.keys(fetchSales[i]);
    for (let j = 0; j < keysArr.length; j++) {
      total += fetchSales[i][keysArr[j]].soldProductPrice;
    }
  }

  return (
    <div className="flex items-start justify-between gap-10 m-6">
      <div
        className="flex items-center justify-between bg-zinc-100 p-2 borer-4 border-gray-500 rounded-md"
        style={{ width: "47%" }}
      >
        <h3 className="font-bold">Your Turnover is :</h3>
        <p>{total}</p>
      </div>
      <div style={{ width: "47%" }}>
        <div className=" bg-zinc-100 p-3 rounded-md  border-2 border-gray-300 min-h-40">
          <ul
            className="p-2 text-gray-900 grid gap-4  border-b-2 border-gray-300 text-left my-auto min-h-10 "
            style={{
              gridTemplateColumns: "repeat(2, 1fr)",
              fontSize: "10px",
            }}
          >
            <li>product Name</li>
            <li>Product Quantity</li>
          </ul>
          {quantity.map((prd, ind) => (
            <ul
              className=" p-2 text-gray-900 grid gap-4  border-b-2 border-gray-300 text-left my-auto min-h-10 "
              style={{
                gridTemplateColumns: "repeat(2, 1fr)",
                fontSize: "10px",
              }}
              key={ind}
            >
              <li>{prdName[ind]}</li>
              <li>{prd}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statictics;
