import { BsEnvelope } from "react-icons/bs";
import { CiFacebook, CiInstagram, CiPhone, CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-bgNav/20 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-left">SmartPay</h3>
          <p className="text-gray-400 mt-2 text-left">
            Your secure and fast payment solution.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="text-gray-400">
              <li className=" flex items-center justify-center gap-2.5">
                <BsEnvelope /> support@smartpay.com
              </li>
              <li className=" flex items-center justify-center gap-2.5">
                <CiPhone />
                1-800-123-4567
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="flex space-x-4 text-gray-400 justify-center">
              <li>
                <a href="#" className="hover:text-blue-500">
                  <CiFacebook className=" size-6" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  <CiTwitter className=" size-6" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  <CiInstagram className=" size-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} SmartPay. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
