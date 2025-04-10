import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const dataPlans = {
  MTN: ["500MB - ₦100", "1GB - ₦200", "2GB - ₦500"],
  Airtel: ["500MB - ₦100", "1.5GB - ₦300", "3GB - ₦700"],
  Glo: ["1GB - ₦200", "2.5GB - ₦500", "4.1GB - ₦1000"],
  "9mobile": ["500MB - ₦100", "1.5GB - ₦300", "3GB - ₦700"],
};

const DataPurchase = () => {
  const [network, setNetwork] = useState("");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ network, phone, plan });
    // Hook to API goes here
  };

  return (
    <div className=" p-3.5  flex flex-col gap-3.5 h-screen items-center bg-bg">
      <div className=" flex justify-between items-center w-full max-w-md mx-auto p-2 bg-bgNav rounded-xl shadow-lg">
        <Link to="/dashboard">
          <BsArrowLeft className="text-text text-2xl cursor-pointer bg-primary/20 rounded-full p-1 border border-primary" />
        </Link>
        <span className=" text-text">Data</span>
        <div className=""></div>
      </div>

      <div className="max-w-md w-full mx-auto p-6 bg-bgNav rounded-xl shadow-lg border border-primary/30">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Network Selection */}
          <div className="flex flex-col text-gray-500">
            <label className="text-sm text-gray-200">Select Network</label>
            <select
              value={network}
              onChange={(e) => {
                setNetwork(e.target.value);
                setPlan(""); // Reset plan when network changes
              }}
              className="p-2 rounded-md border placeholder:text-gray-400 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="" disabled>
                Select a network
              </option>
              {Object.keys(dataPlans).map((net) => (
                <option key={net} value={net} className="bg-bgNav">
                  {net}
                </option>
              ))}
            </select>
          </div>

          {/* Data Plan */}
          {network && (
            <div className="flex flex-col text-gray-400">
              <label className="text-sm text-gray-600">Select Data Plan</label>
              <select
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className="p-2 rounded-md border placeholder:text-gray-500 text-sm border-text focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option value="" disabled>
                  Select a plan
                </option>
                {dataPlans[network].map((p, index) => (
                  <option key={index} value={p} className="bg-bgNav">
                    {p}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-400">Phone Number</label>
            <input
              type="tel"
              placeholder="08012345678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-2 rounded-md border text-gray-500 placeholder:text-gray-500 text-sm border-text focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-primary cursor-pointer text-white py-2 rounded-md hover:bg-primary-dark transition duration-300"
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default DataPurchase;
