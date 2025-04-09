import {
  BsArrowLeftRight,
  BsArrowRight,
  BsPhone,
  BsWifi,
} from "react-icons/bs";
import { FcElectricity } from "react-icons/fc";

const ServiceCard = () => {
  return (
    <div className="flex flex-col justify-center  gap-4 w-full max-w-md mx-auto p-6 rounded-lg shadow-md border border-primary z-20">
      <div className=" flex justify-between">
        <span className=" text-gray-400">Quick Service</span>
        <span className=" flex items-center gap-1 text-gray-600 text-sm">
          View All <BsArrowRight className="" />
        </span>
      </div>
      <div className=" mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:p-3.5 p-1 gap-5 items-center justify-center">
        <div className=" border border-primary/10 w-28 p-2 text-center gap-2 flex flex-col rounded-md shadow-2xl hover:bg-primary/20 transition duration-300">
          <BsPhone className=" text-blue-700 size-6 flex mx-auto" />
          <span className="text-white">Airtime</span>
        </div>
        <div className=" border border-primary/10 w-28 p-2 text-center gap-2 flex flex-col rounded-md shadow-2xl hover:bg-primary/20 transition duration-300">
          <BsWifi className=" text-red-700 size-6 flex mx-auto" />
          <span className="text-white">Data</span>
        </div>
        <div className=" border border-primary/10 w-28 p-2 text-center gap-2 flex flex-col rounded-md shadow-2xl hover:bg-primary/20 transition duration-300">
          <FcElectricity className=" text-blue-700 size-6 flex mx-auto" />
          <span className="text-white">Electricity</span>
        </div>
        <div className=" border border-primary/10 w-28 p-2 text-center gap-2 flex flex-col rounded-md shadow-2xl hover:bg-primary/20 transition duration-300">
          <BsArrowLeftRight className=" text-blue-700 size-6 flex mx-auto" />
          <span className="text-white whitespace-nowrap">Airtime To Cash</span>
        </div>
        <div className=" border border-primary/10 w-28 p-2 text-center gap-2 flex flex-col rounded-md shadow-2xl hover:bg-primary/20 transition duration-300">
          <FcElectricity className=" text-blue-700 size-6 flex mx-auto" />
          <span className="text-white">Electricity</span>
        </div>
        <div className=" border border-primary/10 w-28 p-2 text-center gap-2 flex flex-col rounded-md shadow-2xl hover:bg-primary/20 transition duration-300">
          <FcElectricity className=" text-blue-700 size-6 flex mx-auto" />
          <span className="text-white">Electricity</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
