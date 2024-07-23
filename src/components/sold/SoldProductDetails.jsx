import { useContext } from "react";
import { InventoryContext } from "../../context/GlobalContext";

const SoldProductDetails = () => {
  const {
    soldProductID,
    soldProductName,
    soldProductQuantity,
    soldProductPrice,
    soldCompanyName,
    soldProductImg,
    setSoldProductStates,
  } = useContext(InventoryContext);

  return (
    <div>
      <h2 className="text-2xl text-slate-500 my-5 font-bold">
        Product details are on sale
      </h2>
      <form className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 mx-8">
        <label className="hidden">Enter The Product ID</label>
        <input
          type="text"
          placeholder="Enter The Product ID"
          className="block border-2 border-slate-500 rounded-md  h-14 py-1 px-2  outline-none text-xl font-semibold focus:border-2 focus:border-cyan-950"
          value={soldProductID}
          onChange={(e) =>
            setSoldProductStates((prevState) => ({
              ...prevState,
              soldProductID: e.target.value,
            }))
          }
        />
        <label className="hidden">Enter The Product Name</label>
        <input
          type="text"
          placeholder="Enter The Product Name"
          className="block border-2 border-slate-500 rounded-md  h-14 py-1 px-2  outline-none text-xl font-semibold focus:border-2 focus:border-cyan-950"
          value={soldProductName}
          onChange={(e) =>
            setSoldProductStates((prevState) => ({
              ...prevState,
              soldProductName: e.target.value,
            }))
          }
        />
        <label className="hidden">Enter The Product Quantity</label>
        <input
          type="text"
          placeholder="Enter The Product Quantity"
          className="block border-2 border-slate-500 rounded-md  h-14 py-1 px-2  outline-none text-xl font-semibold focus:border-2 focus:border-cyan-950"
          value={soldProductQuantity}
          onChange={(e) =>
            setSoldProductStates((prevState) => ({
              ...prevState,
              soldProductQuantity: e.target.value,
            }))
          }
        />
        <label className="hidden">Enter The Product Price</label>
        <input
          type="text"
          placeholder="Enter The Product Price"
          className="block border-2 border-slate-500 rounded-md  h-14 py-1 px-2  outline-none text-xl font-semibold focus:border-2 focus:border-cyan-950"
          value={soldProductPrice}
          onChange={(e) =>
            setSoldProductStates((prevState) => ({
              ...prevState,
              soldProductPrice: e.target.value,
            }))
          }
        />
        <label className="hidden">Enter The Company Name</label>
        <input
          type="text"
          placeholder="Enter The Company Name"
          className="block border-2 border-slate-500 rounded-md  h-14 py-1 px-2  outline-none text-xl font-semibold focus:border-2 focus:border-cyan-950"
          value={soldCompanyName}
          onChange={(e) =>
            setSoldProductStates((prevState) => ({
              ...prevState,
              soldCompanyName: e.target.value,
            }))
          }
        />
        <label className="block border-2 border-slate-500 rounded-md h-14 px-2 pt-3 ">
          <span className="sr-only">Choose Product Photo</span>
          <input
            type="file"
            className="transition-colors block w-full text-sm text-slate-800 
          file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0
          file:text-sm file:font-bold
          file:bg-indigo-500 file:text-white
          hover:file:bg-violet-50
          hover:file:text-cyan-800 cursor-pointer"
          />
        </label>
      </form>
    </div>
  );
};

export default SoldProductDetails;
