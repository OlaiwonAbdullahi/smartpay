import { BsSendArrowUp } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { PiDotsThreeVerticalBold, PiEye } from "react-icons/pi";

const WalletCard = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 w-full max-w-md mx-auto p-6 rounded-lg shadow-md border border-primary z-20 ">
        <h2 className="text-sm text-text font-light">Wallet Balance</h2>
        <div className="flex justify-between items-center">
          <span className="text-text text-xl font-medium">$1000.00</span>
          <span className="text-lg font-bold text-gray-800">
            <PiEye className="w-6 h-6 text-gray-500" />
          </span>
        </div>
        <div className=" flex items-center justify-center gap-2.5">
          <button className=" flex  gap-1  items-center  border border-primary text-gray-400 py-2 px-4 rounded hover:bg-primary/20 transition duration-300">
            <IoIosAddCircleOutline className=" text-2xl text-gray-400" />
            Add Funds
          </button>
          <button className=" flex  gap-1  items-center  border border-primary text-gray-400 py-2 px-4 rounded hover:bg-primary/20 transition duration-300">
            <BsSendArrowUp className=" size-5 text-gray-400" />
            Withdraw
          </button>
          <button className=" flex  gap-1 bg-primary/15  border border-primary text-gray-400 py-2 px-2 rounded-full hover:bg-primary/20 transition duration-300">
            <PiDotsThreeVerticalBold className=" text-2xl font-bold text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
