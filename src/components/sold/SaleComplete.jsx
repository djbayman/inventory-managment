import usePost from "../CRUD/usePost";

const SaleComplete = () => {
  const { postSales } = usePost();

  return (
    <div className="flex items-center justify-center min-h-40">
      <button
        className="px-2 py-1 rounded-md text-lg font-semibold bg-cyan-600 text-white hover:bg-cyan-700 transition-colors"
        onClick={postSales}
      >
        Sold Complete
      </button>
    </div>
  );
};

export default SaleComplete;
