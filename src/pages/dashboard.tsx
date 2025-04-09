import DashboardNavbar from "../components/dashboardNavbar";
import Menu from "../components/menu";
import DashboardHome from "./dashboardHome";

const Dashboard = () => {
  return (
    <div>
      <DashboardNavbar />
      <DashboardHome />
      <Menu />
    </div>
  );
};

export default Dashboard;
