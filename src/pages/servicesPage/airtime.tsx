import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import mtn from "../../assets/networkLogo/mtn.svg";
import glo from "../../assets/networkLogo/glo.svg";
import airtel from "../../assets/networkLogo/airtel.svg";
import mobile from "../../assets/networkLogo/9mobile.svg";

const networkLogos = [
  { name: "MTN", logo: mtn },
  { name: "Glo", logo: glo },
  { name: "Airtel", logo: airtel },
  { name: "9mobile", logo: mobile },
];

const Airtime = () => {
  const [network, setNetwork] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ network, phone, amount });
  };

  return (
    <div className="p-3.5 flex flex-col gap-3.5 h-screen items-center bg-bg">
      {/* Header */}
      <div className="flex justify-between items-center w-full max-w-md mx-auto p-2 bg-bgNav rounded-xl shadow-lg">
        <Link to="/dashboard">
          <BsArrowLeft className="text-text text-2xl cursor-pointer bg-primary/20 rounded-full p-1 border border-primary" />
        </Link>
        <span className="text-text">Airtime</span>
        <div className=""></div>
      </div>

      {/* Form Card */}
      <div className="max-w-md w-full mx-auto p-6 bg-bgNav rounded-xl shadow-lg border border-primary/20">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Network Selection */}
          <div className="flex flex-col text-gray-500">
            <label className="text-sm text-gray-500">Select Network</label>
            <div className="flex gap-3 mt-2 items-center flex-wrap">
              {networkLogos.map((net) => (
                <div
                  key={net.name}
                  onClick={() => setNetwork(net.name)}
                  className={`cursor-pointer border ${
                    network === net.name
                      ? "border-primary bg-primary/10"
                      : "border-primary/40"
                  } rounded-md p-1 flex items-center justify-center size-10 transition duration-200`}
                >
                  <img src={net.logo} alt={net.name} className="size-7" />
                </div>
              ))}
            </div>
          </div>

          {/* Phone Input */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500">Phone Number</label>
            <input
              type="tel"
              placeholder="08012345678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-2 rounded-md border text-gray-500 placeholder:text-gray-500 text-sm border-text focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Amount Input */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500">Amount (₦)</label>
            <input
              type="number"
              placeholder="100"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="p-2 rounded-md text-gray-500 border placeholder:text-gray-500 text-sm border-text focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Submit Button */}
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

export default Airtime;
