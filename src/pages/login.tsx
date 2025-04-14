import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { MdOutlinePassword } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validateEmail = (email: string): boolean => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log("User data from Firestore:", userData);
        toast.success("Login successful!", { position: "top-center" });
        navigate("/dashboard");
      } else {
        toast.error("No user data found in Firestore.", {
          position: "top-center",
        });
      }
    } catch (error: any) {
      console.error("Login Error:", error.message);
      toast.error(error.message || "An error occurred during login.", {
        position: "top-center",
      });
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          createdAt: new Date(),
        });
      }

      toast.success("Logged in with Google!", { position: "top-center" });
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Google login error:", error.message);
      toast.error(error.message || "Google login failed", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="bg-bg w-full flex items-center justify-center mx-auto h-screen">
      <div className="bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-sm rounded-lg border border-primary p-6 flex flex-col text-center items-center md:w-1/3 w-full gap-6 m-4 md:m-0">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl font-ubuntu font-medium text-primary">
            Welcome Back :)
          </h2>
          <p className="text-sm font-pop text-gray-500">
            Don&apos;t have an account?{" "}
            <Link to="/signup">
              <span className="text-primary cursor-pointer">Sign Up</span>
            </Link>
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col w-full gap-4">
          <div className="flex p-2 border border-text gap-2 rounded-md w-full items-center">
            <CiMail className="w-4 h-4 text-gray-500" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent placeholder:text-gray-500 placeholder:font-pop font-pop text-sm w-full text-gray-500 outline-none"
              required
            />
          </div>

          <div className="flex p-2 border border-text gap-2 rounded-md w-full items-center">
            <MdOutlinePassword className="w-4 h-4 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent placeholder:text-gray-500 placeholder:font-pop font-pop text-sm w-full text-gray-500 outline-none"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm font-pop">{error}</p>}

          <button
            type="submit"
            className="bg-primary p-2 text-white w-full rounded-md cursor-pointer hover:bg-primary-dark hover:text-white active:scale-95 transition-all duration-300 ease-in-out"
          >
            Log In
          </button>
        </form>

        <div className="w-full flex items-center gap-4">
          <hr className="flex-grow border-t border-text/20" />
          <span className="text-text/20 font-pop text-sm">or</span>
          <hr className="flex-grow border-t border-text/20" />
        </div>

        <div className="flex gap-6">
          <div
            onClick={handleGoogleLogin}
            className="bg-transparent w-full flex gap-2.5 text-text items-center border border-primary p-2 rounded-md cursor-pointer hover:bg-primary/20"
          >
            <FcGoogle className="h-6 w-6" />
            Sign in with Google
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
