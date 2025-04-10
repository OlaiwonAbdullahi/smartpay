import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import mtn from "../../assets/networkLogo/mtn.svg";
import glo from "../../assets/networkLogo/glo.svg";
import airtel from "../../assets/networkLogo/airtel.svg";
import mobile from "../../assets/networkLogo/9mobile.svg";

const dataPlans = {
  MTN: ["500MB - ₦100", "1GB - ₦200", "2GB - ₦500"],
  Airtel: ["500MB - ₦100", "1.5GB - ₦300", "3GB - ₦700"],
  Glo: ["1GB - ₦200", "2.5GB - ₦500", "4.1GB - ₦1000"],
  "9mobile": ["500MB - ₦100", "1.5GB - ₦300", "3GB - ₦700"],
};

const networkLogos = {
  MTN: mtn,
  Airtel: airtel,
  Glo: glo,
  "9mobile": mobile,
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
    <div className="p-3.5 flex flex-col gap-3.5 h-screen items-center bg-bg">
      <div className="flex justify-between items-center w-full max-w-md mx-auto p-2 bg-bgNav rounded-xl shadow-lg">
        <Link to="/dashboard">
          <BsArrowLeft className="text-text text-2xl cursor-pointer bg-primary/20 rounded-full p-1 border border-primary" />
        </Link>
        <span className="text-text">Data</span>
        <div className=""></div>
      </div>

      <div className="max-w-md w-full mx-auto p-6 bg-bgNav rounded-xl shadow-lg border border-primary/30">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Network Logos */}
          <div className="flex flex-col text-gray-500">
            <label className="text-sm text-gray-200 mb-1">Select Network</label>
            <div className="flex gap-2 mt-1 items-center flex-wrap">
              {Object.keys(networkLogos).map((net) => (
                <button
                  key={net}
                  type="button"
                  onClick={() => {
                    setNetwork(net);
                    setPlan("");
                  }}
                  className={`border rounded-md p-1 flex items-center justify-center size-12 transition duration-200 ${
                    network === net
                      ? "border-primary bg-primary/10"
                      : "border-primary/40"
                  }`}
                >
                  <img src={networkLogos[net]} alt={net} className="size-7" />
                </button>
              ))}
            </div>
          </div>

          {/* Data Plan as boxes */}
          {network && (
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">
                Select Data Plan
              </label>
              <div className="grid grid-cols-2 gap-2">
                {dataPlans[network].map((p, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setPlan(p)}
                    className={`text-sm p-2 rounded-md border transition duration-200 ${
                      plan === p
                        ? "bg-primary/10 border-primary text-primary"
                        : "border-text text-gray-400"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
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
