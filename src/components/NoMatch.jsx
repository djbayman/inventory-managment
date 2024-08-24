import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div
      className="w-96 bg-zinc-200 border-2 border-zinc-400 h-32 flex items-center justify-center rounded-md absolute top-1/2 left-1/2"
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="flex items-center gap-2">
        <h1>Error: </h1>
        <p>Page Not Found 404</p>
        <p>
          go to{" "}
          <Link to="/" className="text-blue-500 font-semibold">
            Home
          </Link>{" "}
          Page
        </p>
      </div>
    </div>
  );
};

export default NoMatch;
