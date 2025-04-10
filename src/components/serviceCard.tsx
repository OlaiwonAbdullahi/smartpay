import {
  BsArrowLeftRight,
  BsArrowRight,
  BsLightningCharge,
  BsPhone,
  BsWifi,
} from "react-icons/bs";

import { PiGraduationCap, PiTelevisionSimpleThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

// Define props type
type ServiceItemProps = {
  name: string;
  icon: ReactNode;
  link: string;
};

const services: ServiceItemProps[] = [
  {
    name: "Airtime",
    icon: (
      <BsPhone className="text-green-700 size-7 mx-auto bg-green-700/20 rounded-md p-1" />
    ),
    link: "/airtime",
  },
  {
    name: "Data",
    icon: (
      <BsWifi className="text-red-700 size-7 mx-auto  bg-red-700/20 rounded-md p-1" />
    ),
    link: "/data",
  },
  {
    name: "Electricity",
    icon: (
      <BsLightningCharge className="size-7 mx-auto text-primary  bg-primary/20 rounded-md p-1" />
    ),
    link: "/electricity",
  },
  {
    name: "Airtime to Cash",
    icon: (
      <BsArrowLeftRight className="text-blue-700 size-6 mx-auto  bg-blue-700/20 rounded-md p-1" />
    ),
    link: "/airtime",
  },
  {
    name: "Cable",
    icon: (
      <PiTelevisionSimpleThin className="text-purple-700 size-7 mx-auto  bg-purple-700/20 rounded-md p-1" />
    ),
    link: "/cable",
  },
  {
    name: "Education",
    icon: (
      <PiGraduationCap className="text-cyan-700 size-7 mx-auto  bg-cyan-700/20 rounded-md p-1" />
    ),
    link: "/education",
  },
];

const ServiceItem = ({ name, icon, link }: ServiceItemProps) => (
  <Link to={link}>
    <div className="border border-primary/5 w-28 p-3 text-center gap-2 flex flex-col rounded-md shadow-md hover:bg-primary/10 transition duration-300">
      {icon}
      <span className="text-white text-sm md:whitespace-nowrap whitespace-normal text-center">
        {name}
      </span>
    </div>
  </Link>
);

const ServiceCard = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md  mx-auto p-6 rounded-lg shadow-md border border-primary z-20 bg-[#1a1a1a]">
      <div className="flex justify-between items-center">
        <span className="text-gray-400 text-sm">Quick Service</span>
        <Link to="/pay">
          <span className="flex items-center gap-1 text-gray-300 text-sm cursor-pointer hover:text-white transition">
            View All <BsArrowRight />
          </span>
        </Link>
      </div>

      <div className="w-full flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5 place-items-center">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              name={service.name}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
