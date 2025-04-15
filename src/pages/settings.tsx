import { BsArrowLeft, BsArrowRight, BsShield } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GoVerified } from "react-icons/go";
import { CiCreditCard1, CiLock, CiLogout, CiUser } from "react-icons/ci";
import { AiOutlineUserDelete } from "react-icons/ai";
import { useAuth } from "../utils/AuthContext";

const Settings = () => {
  const { user } = useAuth();

  return (
    <div className="h-screen flex flex-col gap-4">
      {/* Header */}
      <div className="flex justify-between items-center w-full max-w-md mx-auto p-2 bg-bgNav rounded-xl shadow-lg">
        <Link to="/dashboard">
          <BsArrowLeft className="text-text text-2xl cursor-pointer bg-primary/20 rounded-full p-1 border border-primary" />
        </Link>
        <span className="text-text">Settings</span>
        <div className=""></div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto w-full flex flex-col gap-4">
        {/* Profile Info */}
        <div className="bg-bgNav text-white rounded-lg flex flex-col gap-3.5 p-4">
          <div className="text-white flex items-center gap-2.5 p-4">
            <div>
              <img
                src={user?.photoURL || "https://fakeimg.pl/600x400"}
                alt="User Avatar"
                className="size-14 rounded-full"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="flex items-center gap-1.5">
                {user?.displayName || "User"}
                <GoVerified className="text-primary" />
              </span>
              <span className="text-gray-500 text-sm">
                @{user?.email?.split("@")[0]}
              </span>
              <span className="text-sm text-gray-500">
                BeststarMFB - {user?.phoneNumber || "N/A"}
              </span>
            </div>
          </div>
        </div>

        {/* Account Section */}
        <div className="text-gray-500">Account</div>
        <div className="bg-bgNav text-white rounded-lg flex flex-col gap-3.5 p-4">
          {/* Settings Items */}
          {[
            { icon: <CiUser />, label: "Profile Details" },
            { icon: <CiCreditCard1 />, label: "Request Account Number" },
            { icon: <BsShield />, label: "KYC" },
          ].map(({ icon, label }) => (
            <div className="flex items-center justify-between" key={label}>
              <div className="flex items-center gap-1.5">
                <span>{icon}</span>
                <span>{label}</span>
              </div>
              <div className="bg-primary/10 p-1 rounded-full border border-primary/40">
                <BsArrowRight />
              </div>
            </div>
          ))}
        </div>

        {/* Security Section */}
        <div className="text-gray-500">Security</div>
        <div className="bg-bgNav text-white rounded-lg flex flex-col gap-3.5 p-4">
          {[
            { icon: <CiLock />, label: "Change Password" },
            { icon: <AiOutlineUserDelete />, label: "Delete Account" },
            { icon: <CiLogout />, label: "Logout" },
          ].map(({ icon, label }) => (
            <div className="flex items-center justify-between" key={label}>
              <div className="flex items-center gap-1.5">
                <span>{icon}</span>
                <span>{label}</span>
              </div>
              <div className="bg-primary/10 p-1 rounded-full border border-primary/40">
                <BsArrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* App Version */}
      <div className="text-center text-gray-500">v1.0</div>
    </div>
  );
};

export default Settings;
