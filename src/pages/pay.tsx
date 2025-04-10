import {
  BsArrowLeft,
  BsArrowLeftRight,
  BsLightningCharge,
  BsPhone,
  BsWifi,
} from "react-icons/bs";
import { GrGift } from "react-icons/gr";

import {
  PiCurrencyBtc,
  PiGraduationCap,
  PiTelevisionSimpleThin,
} from "react-icons/pi";
import { TbGiftCard } from "react-icons/tb";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

// Define the type for the props of the ServiceItem component
interface ServiceItemProps {
  name: string;
  icon: ReactNode;
  link: string;
}

// ServiceItem component now uses the ServiceItemProps type
const ServiceItem = ({ name, icon, link }: ServiceItemProps) => (
  <Link to={link}>
    <div className="border border-primary/5 md:w-28 w-26 md:p-3 p-1.5 text-center gap-2 flex flex-col rounded-md shadow-md hover:bg-primary/10 transition duration-300">
      {icon}
      <span className="text-white text-sm  whitespace-nowrap">{name}</span>
    </div>
  </Link>
);

const services = [
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
      <BsWifi className="text-red-700 size-7 mx-auto bg-red-700/20 rounded-md p-1" />
    ),
    link: "/data",
  },
  {
    name: "Electricity",
    icon: (
      <BsLightningCharge className="size-7 mx-auto text-primary bg-primary/20 rounded-md p-1" />
    ),
    link: "/electricity",
  },
  {
    name: "Airtime To Cash",
    icon: (
      <BsArrowLeftRight className="text-blue-700 size-6 mx-auto bg-blue-700/20 rounded-md p-1" />
    ),
    link: "/airtime",
  },
  {
    name: "Cable",
    icon: (
      <PiTelevisionSimpleThin className="text-purple-700 size-7 mx-auto bg-purple-700/20 rounded-md p-1" />
    ),
    link: "/cable",
  },
  {
    name: "Education",
    icon: (
      <PiGraduationCap className="text-cyan-700 size-7 mx-auto bg-cyan-700/20 rounded-md p-1" />
    ),
    link: "/education",
  },
  {
    name: "GiftCard",
    icon: (
      <TbGiftCard className="text-pink-700 size-7 mx-auto bg-pink-700/20 rounded-md p-1" />
    ),
    link: "/giftcard",
  },
  {
    name: "Rewards",
    icon: (
      <GrGift className="text-teal-700 size-7 mx-auto bg-teal-700/20 rounded-md p-1" />
    ),
    link: "/rewards",
  },
  {
    name: "Crypto",
    icon: (
      <PiCurrencyBtc className="text-amber-700 size-7 mx-auto bg-amber-700/20 rounded-md p-1" />
    ),
    link: "/crypto",
  },
];

const Pay = () => {
  return (
    <div className="h-screen flex flex-col gap-2.5 p-3.5">
      <div className="items-center w-full max-w-md mx-auto p-2 bg-bgNav rounded-xl shadow-lg">
        <Link to="/dashboard">
          <BsArrowLeft className="text-text text-2xl cursor-pointer bg-primary/20 rounded-full p-1 border border-primary" />
        </Link>
      </div>
      <div className="flex flex-col gap-4 w-full max-w-md mx-auto p-6 rounded-lg shadow-md border border-primary/30 z-20 bg-[#1a1a1a]">
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">All Service</span>
        </div>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-5 place-items-center">
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
    </div>
  );
};

export default Pay;
