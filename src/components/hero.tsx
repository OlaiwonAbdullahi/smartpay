import { MdArrowOutward } from "react-icons/md";
import hero from "../assets/hero.svg";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { PiAsteriskThin } from "react-icons/pi";

const Hero = () => {
  return (
    <>
      <section className="border-b border-white flex flex-col md:flex-row justify-between px-6 md:px-20 py-10 md:py-14  min-h-[80vh] items-center gap-3 md:gap-0">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <h1 className="text-3xl md:text-4xl font-bold text-white md:text-left text-center leading-tight font-sora">
            A <span className=" text-primary">smarter</span> and more{" "}
            <span className=" text-primary">rewarding</span> way to
            make payments
          </h1>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md md:text-left text-center">
            SmartPay makes it easier than ever to manage and pay your bills.
            Fast, secure, and hassle-free, SmartPay brings all your bill
            payments under one roof.
          </p>
          <Link to="/signup">
            <div className="flex  mt-2  justify-center md:justify-start">
              <div className=" bg-transparent border-white/50 border flex items-center rounded-full  h-12 p-0.5">
                <div className=" text-white m-3 mr-1.5">
                  Unlock Financial Freedom
                </div>
                <div className=" bg-primary text-white h-10 rounded-full p-1 w-10  flex items-center justify-center">
                  <MdArrowOutward className=" size-6  bg-primary text-white rounded-full " />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex items-center">
          <img
            src={hero}
            alt="Wishverse Hero"
            className="w-4/6 max-w-md mx-auto transform rotate-[-4deg]"
          />
        </div>
      </section>
      <div className=" marque flex items-center justify-around">
        <Marquee>
          <div className=" text-white text-lg">Airtime</div>
        </Marquee>
        <Marquee>
          <PiAsteriskThin className=" size-6 text-4xl text-white" />
        </Marquee>
        <Marquee>
          <div className=" text-white text-lg">Data</div>
        </Marquee>
        <Marquee>
          <PiAsteriskThin className=" size-6 text-4xl text-white" />
        </Marquee>
        <Marquee>
          <div className=" text-white text-lg">Electricity</div>
        </Marquee>
        <Marquee>
          <PiAsteriskThin className=" size-6 text-4xl text-white" />
        </Marquee>
        <Marquee>
          <div className=" text-white text-lg">Education</div>
        </Marquee>
      </div>
    </>
  );
};

export default Hero;
