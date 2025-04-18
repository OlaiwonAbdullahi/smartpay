import { useState } from "react";
import { BsSendArrowUp } from "react-icons/bs";
//import {  BsCopy } from "react-icons/bs";
import { CiWarning } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { PiDotsThreeVerticalBold, PiEye, PiEyeSlash } from "react-icons/pi";
import { Link } from "react-router-dom";

const WalletCard = () => {
  const [showBalance, setShowBalance] = useState(true);
  // const [copiedText, setCopiedText] = useState("");

  const walletBalance = 50000; // Replace with real balance

  /*  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000); // Clear after 2 seconds
  };
*/
  return (
    <div>
      <div className="flex flex-col gap-4 w-full max-w-md mx-auto p-3 rounded-lg shadow-md border border-primary z-20 bg-[#1a1a1a]">
        <h2 className="text-sm text-text font-light">Wallet Balance</h2>
        <div className="flex justify-between items-start mb-4">
          <div className="">
            <div className="flex gap-2.5 items-center">
              {showBalance ? (
                <span className="text-text text-3xl font-medium">
                  ₦{walletBalance.toLocaleString()}.00
                </span>
              ) : (
                <span className="text-text text-3xl font-medium">****</span>
              )}
              <button
                className="text-lg font-bold text-gray-800 cursor-pointer"
                onClick={() => setShowBalance(!showBalance)}
              >
                {!showBalance ? (
                  <PiEye className="w-6 h-6 text-gray-500" />
                ) : (
                  <PiEyeSlash className="w-6 h-6 text-gray-500" />
                )}
              </button>
            </div>
            <span className=" text-gray-500">
              SmartPoint: <span className="text-primary">₦234.45</span>
            </span>
          </div>

          {/* KYC Warning Section */}
          <div className="text-sm text-text w-1/2">
            {" "}
            <div className="text-gray-500 border border-primary/50 bg-primary/10 p-2 h-14 rounded-md flex justify-between items-center gap-2">
              <CiWarning className=" size-14 text-primary" />
              <span>Complete KYC to have a Reserved Account Number</span>
            </div>
            {/*
            <p
              className=" flex gap-1.5 items-center cursor-pointer hover:text-primary transition"
              onClick={() => copyToClipboard("9131245646")}
            >
              9131245646 <BsCopy className=" size-3.5" />
              {copiedText === "9131245646" && (
                <span className="ml-1 text-xs text-green-500">Copied!</span>
              )}
            </p>
            <p
              className=" flex gap-1.5 items-center cursor-pointer hover:text-primary transition"
              onClick={() => copyToClipboard("Beststar MFB")}
            >
              Beststar MFB <BsCopy className=" size-3.5" />
              {copiedText === "Beststar MFB" && (
                <span className="ml-1 text-xs text-green-500">Copied!</span>
              )}
            </p>
            <p
              className=" flex gap-1.5 items-center cursor-pointer hover:text-primary transition"
              onClick={() => copyToClipboard("Abdullahi Olaiwon")}
            >
              Abdullahi Olaiwon <BsCopy className=" size-3.5" />
              {copiedText === "Abdullahi Olaiwon" && (
                <span className="ml-1 text-xs text-green-500">Copied!</span>
              )}
            </p>
              */}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-2.5">
          <Link to="/fund">
            <button className="flex gap-1 whitespace-nowrap items-center border border-primary text-gray-400 py-2 px-4 rounded hover:bg-primary/20 transition duration-300">
              <IoIosAddCircleOutline className="text-2xl text-gray-400" />
              Add Funds
            </button>
          </Link>
          <button className="flex gap-1 items-center border border-primary text-gray-400 py-2 px-4 rounded hover:bg-primary/20 transition duration-300">
            <BsSendArrowUp className="size-5 text-gray-400" />
            Withdraw
          </button>
          <button className="flex gap-1 bg-primary/10 border border-primary text-gray-400 py-2 px-2 rounded-full hover:bg-primary/20 transition duration-300">
            <PiDotsThreeVerticalBold className="text-2xl font-bold text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
