import { CiMenuFries } from "react-icons/ci";

const Menubtn = () => {
  return (
    <div className=" flex items-center border border-white/75 text-white p-1.5 rounded-full px-3 gap-1.5  h-7 cursor-pointer">
      <span className=" text-sm">MENU</span>
      <CiMenuFries className=" size-5" />
    </div>
  );
};

export default Menubtn;
