import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className=" h-screen">
      <div className=" flex justify-between items-center w-full max-w-md mx-auto p-2 bg-bgNav rounded-xl shadow-lg">
        <Link to="/dashboard">
          <BsArrowLeft className="text-text text-2xl cursor-pointer bg-primary/20 rounded-full p-1 border border-primary" />
        </Link>
        <span className=" text-text">Settings</span>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Settings;
