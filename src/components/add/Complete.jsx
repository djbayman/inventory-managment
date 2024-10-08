import { Link } from "react-router-dom";
import usePost from "../CRUD/usePost";

const Complete = () => {
  const { postPurchases } = usePost();

  return (
    <div className="flex items-center justify-center min-h-40">
      <button
        className="px-2 py-1 rounded-md text-lg font-semibold bg-cyan-600 text-white hover:bg-cyan-700 transition-colors"
        onClick={postPurchases}
      >
        Complete
      </button>
    </div>
  );
};

export default Complete;
