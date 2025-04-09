import {
  BsArrowLeftRight,
  BsArrowRight,
  BsLightningCharge,
  BsPhone,
  BsWifi,
} from "react-icons/bs";

import { PiTelevisionSimpleThin } from "react-icons/pi";

const services = [
  {
    name: "Airtime",
    icon: <BsPhone className="text-green-700 size-6 mx-auto" />,
  },
  { name: "Data", icon: <BsWifi className="text-red-700 size-6 mx-auto" /> },
  {
    name: "Electricity",
    icon: <BsLightningCharge className="size-6 mx-auto text-primary" />,
  },
  {
    name: "Airtime To Cash",
    icon: <BsArrowLeftRight className="text-blue-700 size-6 mx-auto" />,
  },
  {
    name: "Cable",
    icon: <PiTelevisionSimpleThin className="text-blue-700 size-6 mx-auto" />,
  },
];

const ServiceItem = ({ name, icon }) => (
  <div className="border border-primary/10 w-28 p-3 text-center gap-2 flex flex-col rounded-md shadow-md hover:bg-primary/20 transition duration-300">
    {icon}
    <span className="text-white text-sm whitespace-nowrap">{name}</span>
  </div>
);

const ServiceCard = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto p-6 rounded-lg shadow-md border border-primary z-20 bg-[#1a1a1a]">
      <div className="flex justify-between items-center">
        <span className="text-gray-400 text-sm">Quick Service</span>
        <span className="flex items-center gap-1 text-gray-300 text-sm cursor-pointer hover:text-white transition">
          View All <BsArrowRight />
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center">
        {services.map((service, index) => (
          <ServiceItem key={index} name={service.name} icon={service.icon} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
