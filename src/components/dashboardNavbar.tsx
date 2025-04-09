import { BsBell } from "react-icons/bs";
import { CiUser } from "react-icons/ci";

const DashboardNavbar = () => {
  return (
    <div className=" flex justify-between w-11/12 mx-auto items-center p-3 mb-3.5">
      <div className=" flex items-center text-primary gap-2.5">
        <div className="border-primary/45 border  p-2 rounded-full">
          <CiUser className="w-7 h-7 text-primary" />
        </div>
        <div className=" flex flex-col">
          <span className="text-sm text-gray-500">Hey,</span>
          <span className=" ">Abdullahi</span>
        </div>
      </div>
      <div className=" flex">
        <div className=" border-primary/45 hover:bg-primary/20 border flex  p-1 rounded-full">
          <BsBell className="w-5 h-5 text-primary" />
        </div>
        <sup className="bg-red-500 h-3 w-3 flex items-center justify-center text-white rounded-full p-1.5">
          2
        </sup>
      </div>
    </div>
  );
};

export default DashboardNavbar;
