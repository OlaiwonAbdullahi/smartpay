import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

// Define the types for cable providers and plans
type CableProviders = {
  [key: string]: string[]; // Allows dynamic access to providers and their respective plans
};

const cableProviders: CableProviders = {
  GoTV: ["Jolli - ₦2,460", "Max - ₦3,600", "Supa - ₦5,500"],
  DStv: ["Padi - ₦2,500", "Yanga - ₦3,500", "Confam - ₦6,200"],
  Startimes: ["Basic - ₦1,300", "Smart - ₦1,800", "Super - ₦3,000"],
};

const CablePurchase = () => {
  const [provider, setProvider] = useState<string>("");
  const [plan, setPlan] = useState<string>("");
  const [smartCard, setSmartCard] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ provider, plan, smartCard });
    // Submit to backend/API
  };

  return (
    <div className=" p-3.5  flex flex-col gap-3.5 h-screen items-center bg-bg">
      <div className=" flex justify-between items-center w-full max-w-md mx-auto p-2 bg-bgNav rounded-xl shadow-lg">
        <Link to="/dashboard">
          <BsArrowLeft className="text-text text-2xl cursor-pointer bg-primary/20 rounded-full p-1 border border-primary" />
        </Link>
        <span className=" text-text"> Cable Subscription</span>
        <div className=""></div>
      </div>

      <div className="max-w-md mx-auto w-full p-6 bg-bgNav border border-primary/20 shadow-lg rounded-xl">
        <h2 className="text-xl font-semibold text-text mb-4"></h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Provider */}
          <div className="flex flex-col text-gray-500">
            <label className="text-sm text-gray-600">Cable Provider</label>
            <select
              value={provider}
              onChange={(e) => {
                setProvider(e.target.value);
                setPlan(""); // Reset plan when provider changes
              }}
              required
              className="p-2 rounded-md border bg-bgNav border-gray-300 focus:ring-2 focus:ring-primary"
            >
              <option value="" disabled>
                Select provider
              </option>
              {Object.keys(cableProviders).map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* Plan */}
          {provider && (
            <div className="flex flex-col text-gray-500">
              <label className="text-sm text-gray-600">Choose Plan</label>
              <select
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                required
                className="p-2 rounded-md border bg-bgNav border-gray-300 focus:ring-2 focus:ring-primary"
              >
                <option value="" disabled>
                  Select plan
                </option>
                {/* Ensure to type `provider` safely */}
                {cableProviders[provider as keyof CableProviders].map(
                  (p: string, i: number) => (
                    <option key={i} value={p}>
                      {p}
                    </option>
                  )
                )}
              </select>
            </div>
          )}

          {/* SmartCard / IUC */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600">
              SmartCard / IUC Number
            </label>
            <input
              type="text"
              placeholder="1234567890"
              value={smartCard}
              onChange={(e) => setSmartCard(e.target.value)}
              required
              className="p-2 text-gray-500 rounded-md border placeholder:text-gray-500 text-sm border-text focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className=" cursor-pointer bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition duration-300"
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default CablePurchase;
