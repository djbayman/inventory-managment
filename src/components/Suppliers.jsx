import useFetch from "./CRUD/useFetch";

const Suppliers = () => {
  const { fetchPurchases, fetchSales } = useFetch();

  let clinetResult = [];
  let keysArr;

  for (let i = 0; i < fetchSales.length; i++) {
    keysArr = Object.keys(fetchSales[i]);
    for (let j = 0; j < keysArr.length; j++) {
      clinetResult.push(fetchSales[i][keysArr[j]]);
    }
  }

  return (
    <div className="flex justify-between flex-wrap gap-10 m-6">
      <div
        className=" bg-zinc-100 p-3 rounded-md  border-2 border-gray-300 min-h-40"
        style={{ width: "47%" }}
      >
        <ul
          className=" p-2 text-gray-900 grid gap-4  border-b-2 border-gray-300 text-left my-auto min-h-10 "
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            fontSize: "10px",
          }}
        >
          <li className=" text-left my-auto">Supplier ID</li>
          <li className=" ">Supplier Name</li>
          <li className=" ">Supplier Email</li>
          <li className=" ">Supplier Phone Number</li>
        </ul>
        {fetchPurchases?.map((data, index) => (
          <ul
            className=" p-2 text-gray-900 text-sm grid gap-4  border-b-2 border-gray-300 text-left my-auto min-h-10 rounded-md hover:bg-zinc-200 transition-colors cursor-pointer"
            style={{
              gridTemplateColumns: "repeat(4, 1fr)",
              fontSize: "10px",
            }}
            key={index}
          >
            <li className=" text-left my-auto ">{data.supplierID}</li>
            <li className=" ">{data.supplierName}</li>
            <li className=" ">{data.supplierEmail}</li>
            <li className=" ">{data.supplierPhone}</li>
          </ul>
        ))}
      </div>
      <div
        className=" bg-zinc-100 p-3 rounded-md  border-2 border-gray-300 min-h-40"
        style={{ width: "47%" }}
      >
        <ul
          className=" p-2 text-gray-900 text-sm grid gap-4  border-b-2 border-gray-300 text-left my-auto min-h-10"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            fontSize: "10px",
          }}
        >
          <li className="text-left my-auto">Client ID</li>
          <li className="">Client Name</li>
          <li className="">Client Email</li>
          <li className="">Client Phone Number</li>
        </ul>
        {clinetResult?.map((cli, index) => (
          <ul
            className=" p-2 text-gray-900 text-sm grid gap-4  border-b-2 border-gray-300 text-left my-auto min-h-10 rounded-md hover:bg-zinc-200 transition-colors cursor-pointer"
            style={{
              gridTemplateColumns: "repeat(4, 1fr)",
              fontSize: "10px",
            }}
            key={index}
          >
            <li className=" text-left my-auto ">{cli.soldProductClientID}</li>
            <li className=" ">{cli.soldProductClientName}</li>
            <li className=" ">{cli.soldProductEmail}</li>
            <li className=" ">{cli.soldProductClientPhone}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Suppliers;
