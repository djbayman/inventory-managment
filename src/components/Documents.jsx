import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Documents = () => {
  const [upDown, setUpDown] = useState(false);

  return (
    <div className="">
      <div className="comp-head  m-6">
        <h1 className="text-2xl font-bold mb-4">Files</h1>
        <p className="text-slate-500">Read and Upload your files here...</p>
      </div>
      <div className="my-10 border-2">
        <p className="text-2xl px-6  py-8 bg-slate-100 font-bold border-b-2 border-slate-200">
          Catigories:
        </p>
        <div>
          <ul className="flex items-center justify-between p-6 ">
            <li className="flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 focus:rounded "
              />
            </li>
            <li>
              <div>
                <i></i>
                <span>File Name</span>
              </div>
            </li>
            <li>Details</li>
            <li>Uploaded On</li>
          </ul>
        </div>
        <div>
          <div
            className="flex items-center justify-between  text-2xl  bg-slate-50 p-6 cursor-pointer hover:bg-slate-100 transition-colors"
            onClick={() => setUpDown(!upDown)}
          >
            <h2 className="font-bold">Sales</h2>
            {upDown ? (
              <IoIosArrowUp onClick={() => setUpDown(!upDown)} />
            ) : (
              <IoIosArrowDown onClick={() => setUpDown(!upDown)} />
            )}
          </div>

          {upDown && (
            <div>
              <ul className="flex items-center justify-between p-6 transition-all">
                <li className="flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 focus:rounded "
                  />
                </li>
                <li>
                  <div>
                    <i></i>
                    <span>File Name</span>
                  </div>
                </li>
                <li>Details</li>
                <li>Uploaded On</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Documents;
