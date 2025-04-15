import { BsBell } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import { GoVerified } from "react-icons/go";

const DashboardNavbar = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="flex justify-between md:w-11/12 w-full mx-auto items-center p-3 mb-3.5">
      <Link to="/settings">
        <div className="flex items-center text-primary gap-1">
          <div className=" p-1 rounded-full">
            <img
              src={user?.photoURL || "https://fakeimg.pl/600x400"}
              alt="User Avatar"
              className="size-10 rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Hey,</span>
            <div className=" flex items-center gap-1.5">
              <span className="">{user.displayName}</span>
              <GoVerified className="text-primary" />
            </div>
          </div>
        </div>
      </Link>

      <div className="relative">
        <div className="border-primary/45 hover:bg-primary/20 border p-1 rounded-full">
          <BsBell className="w-5 h-5 text-primary" />
        </div>
        <sup className="absolute -top-1 -right-1 bg-red-500 h-2 w-2 rounded-full"></sup>
      </div>
    </div>
  );
};

export default DashboardNavbar;
