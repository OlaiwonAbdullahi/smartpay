import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import mtn from "../../assets/networkLogo/mtn.svg";
import glo from "../../assets/networkLogo/glo.svg";
import airtel from "../../assets/networkLogo/airtel.svg";
import mobile from "../../assets/networkLogo/9mobile.svg";

const networks = ["MTN", "Airtel", "Glo", "9mobile"];

const Airtime = () => {
  const [network, setNetwork] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ network, phone, amount });
  };

  return (
    <div className=" p-3.5  flex flex-col gap-3.5 h-screen items-center bg-bg">
      <div className=" flex justify-between items-center w-full max-w-md mx-auto p-2 bg-bgNav rounded-xl shadow-lg">
        <Link to="/dashboard">
          <BsArrowLeft className="text-text text-2xl cursor-pointer bg-primary/20 rounded-full p-1 border border-primary" />
        </Link>
        <span className=" text-text">Airtime</span>
        <div className=""></div>
      </div>
      <div className="max-w-md w-full mx-auto p-6 bg-bgNav rounded-xl shadow-lg border border-primary/20">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col text-gray-500">
            <label className="text-sm text-gray-500">Select Network</label>

            <select
              value={network}
              onChange={(e) => setNetwork(e.target.value)}
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="" disabled>
                Select a network
              </option>
              {networks.map((net) => (
                <option key={net} value={net} className=" bg-bgNav">
                  {net}
                </option>
              ))}
            </select>

            <div className=" flex gap-2 mt-2 items-center">
              <div className=" border border-primary/40 rounded-md p-1 flex items-center justify-center">
                <img src={mtn} alt="" className=" size-10" />
              </div>
              <div className="  border border-primary/40 rounded-md p-1 flex items-center justify-center  size-10">
                <img src={glo} alt="" className=" size-6" />
              </div>
              <div className="  border border-primary/40 rounded-md p-1 flex items-center justify-center  size-10">
                <img src={airtel} alt="" className=" size-6" />
              </div>
              <div className="  border border-primary/40 rounded-md p-1 flex items-center justify-center size-10">
                <img src={mobile} alt="" className=" size-6" />
              </div>
            </div>
          </div>

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

          {/* Amount */}
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
