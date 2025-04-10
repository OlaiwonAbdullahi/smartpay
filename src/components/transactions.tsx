import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const Transactions = () => {
  return (
    <div>
      <div className="w-full max-w-md mx-auto p-4">
        <div className=" text-gray-400">Transactions History</div>
        <div className="">
          <div className=" hover:bg-gray-700/20 hover:rounded-2xl flex justify-between border-b border-gray-500/15 items-center p-1">
            <div className=" flex items-center">
              <BsArrowUp className=" text-green-500" />
              <span className=" text-lg text-gray-400">Glo Data</span>
            </div>
            <div className=" flex flex-col gap-0.5">
              <span className=" text-green-500 text-xs border border-green-500 px-2 h-4 flex justify-center items-center rounded-full">
                Sucesss
              </span>
              <span className=" text-gray-500 text-sm">1:23pm</span>
            </div>
          </div>
          <div className=" hover:bg-gray-700/20 hover:rounded-2xl flex justify-between border-b border-gray-500/15 items-center p-1">
            <div className=" flex items-center">
              <BsArrowDown className=" text-red-500" />
              <span className=" text-lg text-gray-400">Glo Data</span>
            </div>
            <div className=" flex flex-col gap-0.5">
              <span className=" text-red-500 text-xs border border-red-500 px-2 h-4 flex justify-center items-center rounded-full">
                Failed
              </span>
              <span className=" text-gray-500 text-sm">1:23pm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
