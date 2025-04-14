import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import Navbar from "./components/navbar";
import Airtime from "./pages/servicesPage/airtime";
import DataPurchase from "./pages/servicesPage/dataPurchase";
import CablePurchase from "./pages/servicesPage/cablePurchase";
import Electricity from "./pages/servicesPage/electricity";
import Pay from "./pages/pay";
import FundWallet from "./pages/fundWallet";
import Menu from "./components/menu";
import Education from "./pages/servicesPage/education";
import Wallet from "./pages/wallet";
import Settings from "./pages/settings";
import { Toaster } from "react-hot-toast";
import PrivateRoutes from "./utils/privateRoutes";
import { AuthProvider } from "./utils/AuthContext";

// Wrapper to use hooks outside <Router>
const AppContent = () => {
  const location = useLocation();

  // Define paths where Navbar should be hidden
  const hideNavbarRoutes = [
    "/dashboard",
    "/airtime",
    "/data",
    "/cable",
    "/electricity",
    "/pay",
    "/wallet",
    "/settings",
    "/fund",
  ];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="bg-bg pt-2.5">
      <AuthProvider>
        {!shouldHideNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected routes */}
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/airtime" element={<Airtime />} />
            <Route path="/data" element={<DataPurchase />} />
            <Route path="/cable" element={<CablePurchase />} />
            <Route path="/electricity" element={<Electricity />} />
            <Route path="/education" element={<Education />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/fund" element={<FundWallet />} />
          </Route>

          <Route path="*" element={<Navigate to="/notfound" />} />
        </Routes>

        {shouldHideNavbar && <Menu />}
        <Toaster />
      </AuthProvider>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
