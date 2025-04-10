interface ServiceCardProps {
  feature: string;
  description: string;
  icon: string;
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
      className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transition-all ${bgColor} hover:scale-105`}
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md mb-4 self-start">
        <img src={icon} alt={feature} className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{feature}</h3>
      <p className="text-center text-gray-200">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      feature: "Airtime Top-Up",
      description:
        "Easily top up your mobile phone with airtime from your wallet.",
      icon: "/icons/bill-payment-icon.svg",
      bgColor: "bg-blue-500",
    },
    {
      feature: "Data Bundle Purchase",
      description:
        "Purchase data bundles for your mobile device directly from your wallet.",
      icon: "/icons/wallet-icon.svg",
      bgColor: "bg-green-500",
    },
    {
      feature: "Electricity Bill Payment",
      description:
        "Pay your electricity bills conveniently through our platform.",
      icon: "/icons/history-icon.svg",
      bgColor: "bg-orange-500",
    },
    {
      feature: "Cable TV Subscription",
      description: "Subscribe to your favorite cable TV channels with ease.",
      icon: "/icons/history-icon.svg",
      bgColor: "bg-orange-500",
    },
    {
      feature: "Education",
      description:
        "Pay your electricity bills conveniently through our platform.",
      icon: "/icons/history-icon.svg",
      bgColor: "bg-orange-500",
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
