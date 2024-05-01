// ------------------------------------------------Imports----------------------------------------------------
import { SiMinutemailer } from "react-icons/si";
import { RxLinkedinLogo } from "react-icons/rx";
import { BsTwitterX } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaMeta } from "react-icons/fa6";
import logo from "../../_assets/images/logo.png";
import Image from "next/image";
// ----------------------------------------------------------------------------------------------------------

const Footer = () => {
  return (
    <>
      <footer className="  bg-[#303031]">
        <div className="w-[100%] flex flex-col md:flex-row gap-1  justify-center  items-center  p-4 md:flex-wrap">
          <div className="md:flex md:flex-row md:w-[100%] justify-center items-center md:p-1 md:m-4">
            <div className="content flex flex-col justify-center items-center ">
              <div className="img  md:block md:p-2">
                <Image src={logo} alt={"Logo"} />
              </div>

              <p className="text-white text-center p-2 text-sm md:text-xl">
                Make the right data-driven decision that move your business.
              </p>
            </div>
          </div>

          <div className="flex justify-around w-full flex-wrap">
            <div className="flex flex-col items-center justify-center p-5 md:text-xl md:ml-4">
              <h4 className="text-[#7fb4ab] font-mono text-md font-extrabold">
                NO CREDIT CARD REQUIRED
              </h4>

              <h1 className=" text-[#a0a0a0] text-center text-md">
                Start using Tokyo Immo today.
              </h1>

              <div className="mailer flex mt-4">
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className=" bg-transparent border-b-2 border-1  outline-none text-blue-200"
                ></input>
                <SiMinutemailer size={30} style={{ color: "white" }} />
              </div>
            </div>

            <div className="grid grid-cols-2 mt-2 content-center items-center text-sm text-[#d0d3d8] md:text-xl">
              <div>
                <p>
                  <a href="#">About</a>
                </p>
                <p>
                  <a href="#">Jobs </a>
                </p>
                <p>
                  <a href="#">Docs </a>
                </p>
              </div>
              <div>
                <p>
                  <a href="#">Terms and Conditions </a>
                </p>
                <p>
                  <a href="#">Privacy Policy </a>{" "}
                </p>
                <p>
                  <a href="#">Cookie Policy </a>
                </p>
              </div>
            </div>

            <div className="md:flex md:flex-col">
              <div className="text-white p-1 flex flex-col items-center mt-2">
                <h1>Let's chat !</h1>
                <h1>hi@avo.app</h1>
              </div>
              <div className="flex gap-6 p-2 mt-2 text-white">
                <RxLinkedinLogo size={15} />
                <BsTwitterX size={15} />
                <PiInstagramLogoFill size={15} />
                <FaMeta size={15} />
              </div>
            </div>
          </div>
          <div className="text-white">© 2022 Owned by Tokyoimmo.</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
