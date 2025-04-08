import { IoIosAddCircleOutline } from "react-icons/io";
import { PiEye } from "react-icons/pi";

const WalletCard = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 w-full max-w-md mx-auto p-6 rounded-lg shadow-md border border-primary z-20">
        <h2 className="text-sm text-text font-light">Wallet Balance</h2>
        <div className="flex justify-between items-center">
          <span className="text-text text-xl font-medium">$1000.00</span>
          <span className="text-lg font-bold text-gray-800">
            <PiEye className="w-6 h-6 text-gray-500" />
          </span>
        </div>
        <button className=" flex  gap-1  mx-auto border border-primary text-gray-400 py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
          <IoIosAddCircleOutline className=" text-2xl text-gray-400" />
          Add Funds
        </button>
      </div>
    </div>
  );
};

export default WalletCard;
