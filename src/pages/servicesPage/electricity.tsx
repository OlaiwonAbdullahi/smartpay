import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const discos = ["IKEDC", "EEDC", "AEDC", "PHED", "KEDCO"];

const Electricity = () => {
  const [disco, setDisco] = useState("");
  const [meterNo, setMeterNo] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState(""); // Prepaid/Postpaid

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ disco, meterNo, amount, type });
    // Connect with iSquareData or any API
  };

  return (
    <div className=" p-3.5  flex flex-col gap-3.5 h-screen items-center bg-bg">
      <div className=" flex justify-between items-center w-full max-w-md mx-auto p-2 bg-bgNav rounded-xl shadow-lg">
        <Link to="/dashboard">
          <BsArrowLeft className="text-text text-2xl cursor-pointer bg-primary/20 rounded-full p-1 border border-primary" />
        </Link>
        <span className=" text-text"> Electricity Bill</span>
        <div className=""></div>
      </div>

      <div className="max-w-md mx-auto w-full p-6 bg-bgNav border border-primary/30 shadow-lg rounded-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Disco */}
          <div className="flex flex-col text-gray-500">
            <label className="text-sm text-gray-600">Disco</label>
            <select
              value={disco}
              onChange={(e) => setDisco(e.target.value)}
              required
              className="p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary"
            >
              <option value="" disabled>
                Select Disco
              </option>
              {discos.map((d, i) => (
                <option key={i} value={d} className="bg-bgNav">
                  {d}
                </option>
              ))}
            </select>
          </div>

          {/* Meter Type */}
          <div className="flex flex-col text-gray-500">
            <label className="text-sm text-gray-600">Meter Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
              className="p-2 rounded-md border bg-bgNav border-gray-300 "
            >
              <option value="" disabled>
                Select Type
              </option>
              <option value="prepaid">Prepaid</option>
              <option value="postpaid">Postpaid</option>
            </select>
          </div>

          {/* Meter Number */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Meter Number</label>
            <input
              type="text"
              placeholder="0123456789"
              value={meterNo}
              onChange={(e) => setMeterNo(e.target.value)}
              required
              className="p-2 rounded-md border text-gray-500 placeholder:text-gray-500 text-sm border-text focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Amount */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Amount (₦)</label>
            <input
              type="number"
              placeholder="2000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="p-2 rounded-md border text-gray-500 placeholder:text-gray-500 text-sm border-text focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

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

export default Electricity;
