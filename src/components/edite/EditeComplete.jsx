import { useLocation } from "react-router-dom";
import useUpdate from "../CRUD/useUpdate";

const EditeComplete = () => {
  const location = useLocation();
  const { updatePurchases, updateSales } = useUpdate();

  return (
    <div className="flex items-center justify-center  min-h-40">
      <button
        className="px-2 py-1 rounded-md text-lg font-semibold bg-cyan-600 text-white hover:bg-cyan-700 transition-colors"
        onClick={() => {
          if (location.pathname.includes("purchases")) {
            updatePurchases();
          } else if (location.pathname.includes("sales")) {
            updateSales();
          }
        }}
      >
        Edite Complete
      </button>
    </div>
  );
};

export default EditeComplete;
