import { BsArrowLeft, BsArrowRight, BsShield } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GoVerified } from "react-icons/go";
import { CiCreditCard1, CiLock, CiLogout, CiUser } from "react-icons/ci";
import { AiOutlineUserDelete } from "react-icons/ai";

const Settings = () => {
  return (
    <div className=" h-screen flex flex-col gap-4">
      <div className=" flex justify-between items-center w-full max-w-md mx-auto p-2 bg-bgNav rounded-xl shadow-lg">
        <Link to="/dashboard">
          <BsArrowLeft className="text-text text-2xl cursor-pointer bg-primary/20 rounded-full p-1 border border-primary" />
        </Link>
        <span className=" text-text">Settings</span>
        <div className=""></div>
      </div>
      <div className="max-w-md mx-auto w-full flex flex-col gap-4">
        <div className="bg-bgNav  text-white rounded-lg flex flex-col gap-3.5  p-4">
          <div className=" text-white flex items-center gap-2.5 p-4">
            <div className="">
              <img
                src="https://fakeimg.pl/600x400"
                alt=""
                className=" size-14 rounded-full"
              />
            </div>
            <div className=" flex flex-col gap-2]1">
              <span className=" flex items-center gap-1.5">
                Abdullahi Olaiwon
                <GoVerified className=" text-primary" />
              </span>
              <span className="text-gray-500 text-sm">@abdullahi</span>
              <span className="text-sm text-gray-500">
                BeststarMFB -09131245646
              </span>
            </div>
          </div>
        </div>
        <div className=" text-gray-500">Account</div>
        <div className="bg-bgNav  text-white rounded-lg flex flex-col gap-3.5  p-4">
          <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-1.5">
              <span>
                <CiUser />
              </span>
              <span>Profile Details</span>
            </div>
            <div className=" bg-primary/10 p-1 rounded-full border border-primary/40">
              <BsArrowRight />
            </div>
          </div>
          <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-1.5">
              <span>
                <CiCreditCard1 />
              </span>
              <span>Request Account Number</span>
            </div>
            <div className=" bg-primary/10 p-1 rounded-full border border-primary/40">
              <BsArrowRight />
            </div>
          </div>
          <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-1.5">
              <span>
                <BsShield />
              </span>
              <span>KYC</span>
            </div>
            <div className=" bg-primary/10 p-1 rounded-full border border-primary/40">
              <BsArrowRight />
            </div>
          </div>
        </div>

        <div className=" text-gray-500">Security</div>
        <div className="bg-bgNav  text-white rounded-lg flex flex-col gap-3.5  p-4">
          <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-1.5">
              <span>
                <CiLock />
              </span>
              <span>Change Password</span>
            </div>
            <div className=" bg-primary/10 p-1 rounded-full border border-primary/40">
              <BsArrowRight />
            </div>
          </div>
          <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-1.5">
              <span>
                <AiOutlineUserDelete />
              </span>
              <span>Delete Account</span>
            </div>
            <div className=" bg-primary/10 p-1 rounded-full border border-primary/40">
              <BsArrowRight />
            </div>
          </div>
          <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-1.5">
              <span>
                <CiLogout />
              </span>
              <span>Logout</span>
            </div>
            <div className=" bg-primary/10 p-1 rounded-full border border-primary/40">
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center text-gray-500">v1.0</div>
    </div>
  );
};

export default Settings;
