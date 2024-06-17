// -----------------------------------------------Imports----------------------------------------------
import React from "react";
import { FaWallet } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { LiaRocketSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
// ----------------------------------------------------------------------------------------------------

const Services = () => {
  return (
    <div>
      <div
        className="flex flex-col gap-12 bg-cover p-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url("https://images01.nicepage.com/c461c07a441a5d220e8feb1a/937069da22f6547d8998bbd1/sdsdsd-min.jpg")',
        }}
      >
        <div className=" flex items-center flex-col    justify-center gap-5 m-4 ">
          <h1
            className="text-4xl md:text-[4rem] font-mono
                font-extrabold text-yellow-400"
          >
            Services
          </h1>
          <p className="text-lg md:text-[1.5rem] text-white text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quam nemo ipsa doloremque, delectus sequi!
          </p>
        </div>

        <div className="lg:flex m-8 md:grid grid-cols-1 md:grid-cols-2 ">
          <div className="flex flex-col justify-center items-center   tracking-widest gap-2">
            <h1 className="font-bold text-white  text-[2rem]">PRICING</h1>
            <div className="flex flex-col gap-6 items-center h-[40vh] ">
              <FaWallet className=" text-yellow-300 hover:text-green-500 " size={84} />
              <p className="text-white text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A,
                cupiditate?
              </p>
              <a
                className="font-mono font-semibold text-white tracking-wide border-b-2 border-yellow-300  hover:border-none"
                href="#"
              >
                LEARN MORE
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center  tracking-widest gap-2">
            <h1 className="font-bold text-white text-[2rem]">500+SITES</h1>
            <div className="flex flex-col gap-6 items-center h-[40vh] ">
              <FaBriefcase className=" text-yellow-300 hover:text-green-500  w-full" size={84} />
              <p className="text-white text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A,
                cupiditate?
              </p>
              <a
                className="font-mono font-semibold text-white tracking-wide border-b-2 border-yellow-300  hover:border-none"
                href="#"
              >
                LEARN MORE
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center  tracking-widest gap-2">
            <h1 className="font-bold text-white text-[2rem]">EFFECTIVE</h1>
            <div className="flex flex-col gap-6 items-center h-[40vh] ">
              <LiaRocketSolid className=" text-yellow-300 hover:text-green-500 w-full" size={84} />
              <p className="text-white text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A,
                cupiditate?
              </p>
              <a
                className="font-mono font-semibold text-white tracking-wide border-b-2 border-yellow-300  hover:border-none"
                href="#"
              >
                LEARN MORE
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center  tracking-widest gap-2">
            <h1 className="font-bold text-white text-[2rem]">SUPPORT</h1>
            <div className="flex flex-col gap-6 items-center h-[40vh] ">
              <BiSupport className=" text-yellow-300 hover:text-green-500 " size={84} />
              <p className="text-white text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A,
                cupiditate?
              </p>
              <a
                className="font-mono font-semibold text-white tracking-wide border-b-2 border-yellow-300  hover:border-none"
                href="#"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
