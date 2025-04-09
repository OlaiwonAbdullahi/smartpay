import ServiceCard from "../components/serviceCard";
import Transactions from "../components/transactions";
import WalletCard from "../components/walletCard";

const DashboardHome = () => {
  return (
    <div className="flex flex-col gap-4 w-full p-3.5 ">
      {" "}
      <WalletCard />
      <ServiceCard />
      <Transactions />
    </div>
  );
};

export default DashboardHome;
