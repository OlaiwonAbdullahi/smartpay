import { useState } from "react";
import { BsArrowLeft, BsSendArrowUp } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { PiDotsThreeVerticalBold, PiEye, PiEyeSlash } from "react-icons/pi";
import { Link } from "react-router-dom";

const Wallet = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [copiedText, setCopiedText] = useState("");

  const walletBalance = 50000; // Replace with actual balance

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000); // Clear copied text after 2s
  };

  return (
    <div className="h-screen flex flex-col gap-3 bg-bgMain p-3">
      {/* Header */}
      <div className="flex justify-between items-center w-full max-w-md mx-auto p-2 bg-bgNav rounded-lg shadow">
        <Link to="/dashboard">
          <BsArrowLeft className="text-text text-2xl cursor-pointer bg-primary/20 rounded-full p-1 border border-primary" />
        </Link>
        <span className="text-text font-medium">Wallet</span>
        <div className="w-6 h-6" />
      </div>

      {/* Wallet Balance */}
      <div className="flex flex-col w-full max-w-md mx-auto p-3 bg-bgNav rounded-lg shadow">
        <h2 className="text-sm text-text font-light mb-0.5">Wallet Balance</h2>

        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-1.5">
            <span className="text-text text-2xl font-medium">
              {showBalance ? `₦${walletBalance.toLocaleString()}.00` : "****"}
            </span>
            <button onClick={() => setShowBalance(!showBalance)}>
              {showBalance ? (
                <PiEyeSlash className="w-5 h-5 text-gray-500" />
              ) : (
                <PiEye className="w-5 h-5 text-gray-500" />
              )}
            </button>
          </div>

          <div className="text-right text-sm text-text space-y-0.5">
            {["9131245646", "Beststar MFB", "Abdullahi Olaiwon"].map((text) => (
              <p
                key={text}
                className="cursor-pointer hover:text-primary transition"
                onClick={() => copyToClipboard(text)}
              >
                {text}
                {copiedText === text && (
                  <span className="ml-1 text-xs text-green-500">Copied!</span>
                )}
              </p>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <button className="flex gap-1 items-center border border-primary text-gray-400 py-1.5 px-3 rounded hover:bg-primary/20 transition">
            <IoIosAddCircleOutline className="text-xl" />
            Add Funds
          </button>
          <button className="flex gap-1 items-center border border-primary text-gray-400 py-1.5 px-3 rounded hover:bg-primary/20 transition">
            <BsSendArrowUp className="text-lg" />
            Withdraw
          </button>
          <button className="p-1.5 border border-primary rounded-full hover:bg-primary/20 transition">
            <PiDotsThreeVerticalBold className="text-xl text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
