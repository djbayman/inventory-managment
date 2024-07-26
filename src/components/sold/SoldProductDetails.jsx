import { useContext, useEffect } from "react";
import { InventoryContext } from "../../context/GlobalContext";
import { useLocation } from "react-router-dom";

const SoldProductDetails = () => {
  let previousLocationPathname = useLocation()?.state?.previousLocationPathname;

  const {
    soldProductID,
    soldProductName,
    soldProductQuantity,
    soldProductPrice,
    soldCompanyName,
    soldProductImg,
    setSoldProductStates,
    saleIt,
  } = useContext(InventoryContext);

  useEffect(() => {
    if (previousLocationPathname === "/purchases") {
      setSoldProductStates({
        soldProductID: saleIt[0]?.productID,
        soldProductName: saleIt[0]?.productName,
        soldProductQuantity: saleIt[0]?.productQuantity,
        soldProductPrice: saleIt[0]?.productPrice,
        soldCompanyName: saleIt[0]?.companyName,
        soldProductImg: saleIt[0]?.productImg,
      });
    }
  }, [previousLocationPathname, saleIt, setSoldProductStates]);

  return (
    <div>
      <h2 className="text-xl text-slate-500 my-5 font-bold">Product Details</h2>
      <form className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 mx-8">
        <label className="hidden">Enter the product ID</label>
        <input
          type="text"
          placeholder="Enter The Product ID"
          className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-950"
          value={soldProductID}
          onChange={(e) =>
            setSoldProductStates((prevState) => ({
              ...prevState,
              soldProductID: e.target.value,
            }))
          }
          maxlength="7"
        />
        <label className="hidden">Enter The Product Name</label>
        <input
          type="text"
          placeholder="Enter The Product Name"
          className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-950"
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
          className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-950"
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
          className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-950"
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
          className="block border-2 border-slate-500 rounded-md  h-10 py-1 px-2  outline-none text-lg font-semibold focus:border-2 focus:border-cyan-950"
          value={soldCompanyName}
          onChange={(e) =>
            setSoldProductStates((prevState) => ({
              ...prevState,
              soldCompanyName: e.target.value,
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
            // onChange={(e) => setImgPath(e.target.files[0].name)}
          />
        </label>
      </form>
    </div>
  );
};

export default SoldProductDetails;
