import { ReactElement } from "react";
import { BsPhone, BsWifi } from "react-icons/bs";
import { LiaLightbulb } from "react-icons/lia";
import { PiGraduationCap, PiTelevisionSimpleThin } from "react-icons/pi";
import { TbGiftCard } from "react-icons/tb";
interface ServiceCardProps {
  feature: string;
  description: string;
  icon: ReactElement;
  bgColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  feature,
  description,
  icon,
  bgColor,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transition-all bg-bgNav hover:scale-105`}
    >
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-xl ${bgColor} shadow-md mb-4 self-start`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2 text-left flex self-start">
        {feature}
      </h3>
      <p className="text-left text-gray-200">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      feature: "Airtime Top-Up",
      description:
        "Easily top up your mobile phone with airtime from your wallet.",
      icon: <BsPhone className=" text-blue-700 size-7" />,
      bgColor: "bg-blue-700/20",
    },
    {
      feature: "Data Bundle Purchase",
      description:
        "Purchase data bundles for your mobile device directly from your wallet.",
      icon: <BsWifi className=" text-red-700 size-7" />,
      bgColor: "bg-red-700/20",
    },
    {
      feature: "Electricity Bill Payment",
      description:
        "Pay your electricity bills conveniently through our platform.",
      icon: <LiaLightbulb className=" text-primary size-7" />,
      bgColor: "bg-primary/20",
    },
    {
      feature: "Cable TV Subscription",
      description: "Subscribe to your favorite cable TV channels with ease.",
      icon: <PiTelevisionSimpleThin className=" text-purple-700 size-7" />,
      bgColor: "bg-purple-700/20",
    },
    {
      feature: "Education",
      description:
        "Pay your electricity bills conveniently through our platform.",
      icon: <PiGraduationCap className=" text-green-700 size-7" />,
      bgColor: "bg-green-700/20",
    },
    {
      feature: "GiftCard",
      description:
        "Buy Your Giftcard for your loved ones conveniently through our platform.",
      icon: <TbGiftCard className=" text-pink-700 size-7" />,
      bgColor: "bg-pink-700/20",
    },
  ];

  return (
    <section className="bg-bg border-t border-t-white py-16">
      <div className="max-w-screen-xl mx-auto px-6 ">
        <h2 className="text-3xl font-bold self-start text-white mb-8">
          Features
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ServiceCard
              key={index}
              feature={feature.feature}
              description={feature.description}
              icon={feature.icon}
              bgColor={feature.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
