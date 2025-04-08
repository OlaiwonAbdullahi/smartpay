import DashboardNavbar from "../components/dashboardNavbar";
import Menu from "../components/menu";
import WalletCard from "../components/walletCard";

const Dashboard = () => {
  return (
    <div>
      <DashboardNavbar />
      <WalletCard />
      <Menu />
    </div>
  );
};

export default Dashboard;
