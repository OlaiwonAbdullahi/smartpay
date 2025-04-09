import { CiSettings } from "react-icons/ci";
import { LiaWalletSolid } from "react-icons/lia";
import { TbInvoice, TbSmartHome } from "react-icons/tb";
import { GrAnalytics } from "react-icons/gr";

const Menu = () => {
  return (
    <div className="">
      <ul className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-4 items-center justify-around w-4/5 sm:w-1/2 md:w-1/4 lg:w-1/5 h-16 bg-[#1515153f] rounded-full shadow-md shadow-primary/15 p-2 z-50 bg-clip-padding backdrop-filter backdrop-blur-xs ">
        <li className=" flex flex-col items-center ">
          <TbSmartHome className=" size-5 text-primary" />
          <span className=" text-gray-500 text-xs">Home</span>
        </li>
        <li className=" flex flex-col items-center ">
          <TbInvoice className=" size-5 text-primary" />
          <span className=" text-gray-500 text-xs">Pay</span>
        </li>
        <li className=" flex flex-col items-center ">
          <LiaWalletSolid className=" size-5 text-primary" />
          <span className=" text-gray-500 text-xs">Wallet</span>
        </li>
        <li className=" flex flex-col items-center ">
          <GrAnalytics className=" size-5 text-primary" />
          <span className=" text-gray-500 text-xs">Rewards</span>
        </li>
        <li className=" flex flex-col items-center ">
          <CiSettings className=" size-5 text-primary" />
          <span className=" text-gray-500 text-xs">Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
