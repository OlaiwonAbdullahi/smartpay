import { BsBell } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { useState, useEffect } from "react";
import { auth, db } from "../pages/firebase";
import { doc, getDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          const userDocRef = doc(db, "users", currentUser.uid);
          const userSnap = await getDoc(userDocRef);

          if (userSnap.exists()) {
            const data = userSnap.data();
            setUserName(data.fullName || "User"); // or however the name field is stored
          } else {
            toast.error("User data not found in Firestore");
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error("Failed to fetch user data");
      }
    };

    fetchUserData();
  }, []);

  if (!userName) return null;

  return (
    <div className="flex justify-between md:w-11/12 w-full mx-auto items-center p-3 mb-3.5">
      <Link to="/settings">
        <div className="flex items-center text-primary gap-2.5">
          <div className="border-primary/45 border p-2 rounded-full">
            <CiUser className="w-7 h-7 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Hey,</span>
            <span className="font-medium">{userName}</span>
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
