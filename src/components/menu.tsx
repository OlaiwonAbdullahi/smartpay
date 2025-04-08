import { CiGrid41, CiSettings, CiVideoOn } from "react-icons/ci";
import { LiaWalletSolid } from "react-icons/lia";
import { TbSmartHome } from "react-icons/tb";
import { PiGiftThin } from "react-icons/pi";
import { GrAnalytics } from "react-icons/gr";

const Menu = () => {
  return (
    <div className="">
      <ul className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-4 items-center justify-around w-full sm:w-1/2 md:w-1/4 lg:w-1/5 h-16 bg-white rounded-full shadow-md shadow-primary/15 p-2 z-50">
        <li>
          <TbSmartHome className=" size-5 text-primary" />
        </li>
        <li>
          <PiGiftThin className=" size-5 text-primary" />
        </li>
        <li>
          <LiaWalletSolid className=" size-5 text-primary" />
        </li>
        <li>
          <GrAnalytics className=" size-5 text-primary" />
        </li>
        <li>
          <CiSettings className=" size-5 text-primary" />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
