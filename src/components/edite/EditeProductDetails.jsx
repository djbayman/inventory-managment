import { useContext, useEffect } from "react";
import { InventoryContext } from "../../context/GlobalContext";

const EditeProductDetails = () => {
  const {
    editeProductID,
    editeProductName,
    editeProductQuantity,
    editeProductPrice,
    editeCompanyName,
    setEditeStates,
    setSoldProductImgs,
    setEditeNext,
  } = useContext(InventoryContext);

  useEffect(() => {
    if (
      editeProductID &&
      editeProductName &&
      editeProductQuantity &&
      editeProductPrice &&
      editeCompanyName
    ) {
      setEditeNext(true);
    } else {
      setEditeNext(false);
    }
  }, [
    editeProductID,
    editeProductName,
    editeProductQuantity,
    editeProductPrice,
    editeCompanyName,
    setEditeNext,
  ]);

  return (
    <div>
      <h2 className="text-xl text-slate-500 my-5 font-bold">Product Details</h2>
      <form className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 mx-8">
        <label className="hidden">Enter the product ID</label>
        <input
          type="text"
          placeholder="Enter The Product ID"
          className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-950"
          value={editeProductID}
          onChange={(e) =>
            setEditeStates((prevState) => ({
              ...prevState,
              editeProductID: e.target.value,
            }))
          }
          maxLength="7"
        />
        <label className="hidden">Enter The Product Name</label>
        <input
          type="text"
          placeholder="Enter The Product Name"
          className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-950"
          value={editeProductName}
          onChange={(e) =>
            setEditeStates((prevState) => ({
              ...prevState,
              editeProductName: e.target.value,
            }))
          }
        />
        <label className="hidden">Enter The Product Quantity</label>
        <input
          type="text"
          placeholder="Enter The Product Quantity"
          className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-950"
          value={editeProductQuantity}
          onChange={(e) =>
            setEditeStates((prevState) => ({
              ...prevState,
              editeProductQuantity: e.target.value,
            }))
          }
        />
        <label className="hidden">Enter The Product Price</label>
        <input
          type="text"
          placeholder="Enter The Product Price"
          className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-950"
          value={editeProductPrice}
          onChange={(e) =>
            setEditeStates((prevState) => ({
              ...prevState,
              editeProductPrice: e.target.value,
            }))
          }
        />
        <label className="hidden">Enter The Company Name</label>
        <input
          type="text"
          placeholder="Enter The Company Name"
          className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-950"
          value={editeCompanyName}
          onChange={(e) =>
            setEditeStates((prevState) => ({
              ...prevState,
              editeCompanyName: e.target.value,
            }))
          }
        />
        <label className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg  focus:border-2 focus:border-cyan-950">
          <span className="sr-only">Choose Product Photo</span>
          <input
            type="file"
            className="transition-colors block w-full text-sm text-slate-800 
      file:mr-4 file:py-1 file:px-2
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-indigo-500 file:text-white
      hover:file:bg-violet-50
      hover:file:text-cyan-800 cursor-pointer"
            onChange={(e) => setSoldProductImgs(e.target.files[0])}
          />
        </label>
      </form>
    </div>
  );
};

export default EditeProductDetails;
