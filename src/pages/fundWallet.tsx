import { BsArrowLeft } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import { IoRocketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BsCopy } from "react-icons/bs";
import { useState } from "react";

const FundWallet = () => {
  const [copiedText, setCopiedText] = useState("");
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000); // Clear after 2 seconds
  };
  return (
    <div className=" h-screen flex flex-col gap-4 ">
      <div className=" flex justify-between items-center w-full max-w-md mx-auto p-2 bg-bgNav rounded-xl shadow-lg">
        <Link to="/dashboard">
          <BsArrowLeft className="text-text text-2xl cursor-pointer bg-primary/20 rounded-full p-1 border border-primary" />
        </Link>
        <span className=" text-text">Fund Wallet</span>
        <div className=""></div>
      </div>
      <div className="max-w-md mx-auto w-full flex flex-col gap-4">
        <div className="bg-bgNav  hover:border hover:border-primary hover:bg-primary/5 rounded-lg flex items-center gap-2.5 p-4 ">
          <div className="">
            <IoRocketOutline className="text-text md:size-14 sm:size-10 size-8 cursor-pointer   p-1" />
          </div>
          <div className=" ">
            <h2 className="text-text text-xl font-medium">
              Quick Bank Transfer
            </h2>
            <span className="text-text text-sm font-light">
              Fund your wallet instantly with bank transfer.
            </span>
          </div>
        </div>
        <div className="bg-bgNav hover:border hover:border-primary hover:bg-primary/5 rounded-lg flex items-center gap-2.5 p-4 ">
          <div className="">
            <CiCreditCard1 className="text-text md:size-14 sm:size-10 size-8 cursor-pointer   p-1" />
          </div>
          <div className="">
            <h2 className="text-text text-xl font-medium">Card</h2>
            <span className="text-text text-sm font-light">
              Fund your wallet instantly with bank transfer.
            </span>
          </div>
        </div>
        <div className="w-full flex items-center gap-4">
          <hr className="flex-grow border-t border-text/20" />
          <span className="text-text/20 font-pop text-sm">or</span>
          <hr className="flex-grow border-t border-text/20" />
        </div>
        <div className="bg-bgNav  text-white rounded-lg flex flex-col gap-3.5  p-4">
          {" "}
          <div className="">
            <h2>Wallet Account</h2>
            <span className="text-text text-sm font-light">
              Make transfer to the account number below to fund your wallet
            </span>
          </div>
          <div className=" flex flex-col gap-2.5">
            <p
              className=" flex justify-between gap-1.5 items-center cursor-pointer hover:text-primary transition"
              onClick={() => copyToClipboard("9131245646")}
            >
              9131245646 <BsCopy className=" size-3.5" />
              {copiedText === "9131245646" && (
                <span className="ml-1 text-xs text-green-500">Copied!</span>
              )}
            </p>
            <p
              className=" flex justify-between gap-1.5 items-center cursor-pointer hover:text-primary transition"
              onClick={() => copyToClipboard("Beststar MFB")}
            >
              Beststar MFB <BsCopy className=" size-3.5" />
              {copiedText === "Beststar MFB" && (
                <span className="ml-1 text-xs text-green-500">Copied!</span>
              )}
            </p>
            <p
              className=" flex justify-between gap-1.5 items-center cursor-pointer hover:text-primary transition"
              onClick={() => copyToClipboard("Abdullahi Olaiwon")}
            >
              Abdullahi Olaiwon <BsCopy className=" size-3.5" />
              {copiedText === "Abdullahi Olaiwon" && (
                <span className="ml-1 text-xs text-green-500">Copied!</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundWallet;
