import { useContext } from "react";
import { InventoryContext } from "../../context/GlobalContext";

const ProductDetails = () => {
  const {
    productID,
    productName,
    productQuantity,
    productPrice,
    companyName,
    setStates,
  } = useContext(InventoryContext);

  return (
    <div>
      <h2 className="text-2xl text-slate-500 my-5 font-bold">
        Product Details
      </h2>
      <form className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 mx-8">
        <label className="hidden">Enter the product ID</label>
        <input
          type="text"
          placeholder="Enter The Product ID"
          className="block border-2 border-slate-500 rounded-md  h-14 py-1 px-2  outline-none text-xl font-semibold focus:border-2 focus:border-cyan-950"
          value={productID}
          onChange={(e) =>
            setStates((prevState) => ({
              ...prevState,
              productID: e.target.value,
            }))
          }
        />
        <label className="hidden">Enter The Product Name</label>
        <input
          type="text"
          placeholder="Enter The Product Name"
          className="block border-2 border-slate-500 rounded-md  h-14 py-1 px-2  outline-none text-xl font-semibold focus:border-2 focus:border-cyan-950"
          value={productName}
          onChange={(e) =>
            setStates((prevState) => ({
              ...prevState,
              productName: e.target.value,
            }))
          }
        />
        <label className="hidden">Enter The Product Quantity</label>
        <input
          type="text"
          placeholder="Enter The Product Quantity"
          className="block border-2 border-slate-500 rounded-md  h-14 py-1 px-2  outline-none text-xl font-semibold focus:border-2 focus:border-cyan-950"
          value={productQuantity}
          onChange={(e) =>
            setStates((prevState) => ({
              ...prevState,
              productQuantity: e.target.value,
            }))
          }
        />
        <label className="hidden">Enter The Product Price</label>
        <input
          type="text"
          placeholder="Enter The Product Price"
          className="block border-2 border-slate-500 rounded-md  h-14 py-1 px-2  outline-none text-xl font-semibold focus:border-2 focus:border-cyan-950"
          value={productPrice}
          onChange={(e) =>
            setStates((prevState) => ({
              ...prevState,
              productPrice: e.target.value,
            }))
          }
        />
        <label className="hidden">Enter The Company Name</label>
        <input
          type="text"
          placeholder="Enter The Company Name"
          className="block border-2 border-slate-500 rounded-md  h-14 py-1 px-2  outline-none text-xl font-semibold focus:border-2 focus:border-cyan-950"
          value={companyName}
          onChange={(e) =>
            setStates((prevState) => ({
              ...prevState,
              companyName: e.target.value,
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

export default ProductDetails;
