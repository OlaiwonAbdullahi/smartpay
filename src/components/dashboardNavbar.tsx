import { BsBell } from "react-icons/bs";
import { CiUser } from "react-icons/ci";

const DashboardNavbar = () => {
  return (
    <div className=" flex justify-between w-11/12 mx-auto items-center p-3 ">
      <div className=" flex items-center text-primary gap-2.5">
        <div className="border-primary/45 border  p-2 rounded-full">
          <CiUser className="w-7 h-7 text-primary" />
        </div>
        <div className=" flex flex-col">
          <span className="text-sm text-gray-500">Hey,</span>
          <span className=" ">Abdullahi</span>
        </div>
      </div>
      <div className=" flex gap-1.5">
        <div className=" border-primary/45 border  p-1 rounded-full">
          <BsBell className="w-5 h-5 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
