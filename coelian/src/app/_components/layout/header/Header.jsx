"use client";
// -------------------------------------------------Imports-------------------------------------------
import React, { useContext, useState } from "react";
import Hamburger from "hamburger-react";
import Image from "next/image";
import logo from "../../../_assets/images/logo.png";
import mobileNavImg from "../../../_assets/images/mobileNavImg.jpg";
import { RootContext } from "@/app/_contexts/RootContext/RootContextProvider";
import { useRouter, usePathname } from "next/navigation";
import { Noto_Sans } from "next/font/google";
// ------------------------------------------------------------------------------------------------

const noto_sans = Noto_Sans({
  weight: "700",
  subsets: ["latin"],
  adjustFontFallback: false,
});

function Header(props, ref) {
  // -------------------------------------------------States-------------------------------------------
  const [navHam, setNavHam] = useState(false);

  const navArray = [
    {
      title: "Home",
      path: "home",
    },
    {
      title: "About Us",
      path: "aboutUs",
    },
    { title: "Individuals", path: "individuals" },
    { title: "Corporate", path: "corporate" },
    { title: "Blogs", path: "blogs" },
    { title: "Contact Us", path: "contactUs" },
  ];

  const router = useRouter();

  // ------------------------------------------------------------------------------------------------
  // -------------------------------------------------Hooks-------------------------------------------
  const { selectedIndex, setSelectedNavLink } = useContext(RootContext);
  const pathname = usePathname();
  // ------------------------------------------------------------------------------------------------
  // -----------------------------------------------Functions-------------------------------------------
  function handleToggle() {
    setNavHam((prevState) => !prevState);
  }
  // -----------------------------------------------useEffects-------------------------------------------
  // ------------------------------------------------------------------------------------------------

  return (
    <>
      <div className="relative hidden  sm:block h-[100px] z-[99] ">
        <style jsx="true">{`
          .roboto-regular {
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-style: normal;
          }

          .jersey-10-regular {
            font-family: "Jersey 10", sans-serif;
            font-weight: 400;
            font-style: normal;
          }
        `}</style>
        <div className="fixed top:0 left-0 right-0  h-[100px] bg-white flex items-center justify-around">
          <div>
            <Image src={logo} alt="logo" width={100} />
          </div>

          <nav
            className={` flex gap-4 text-[25px] jersey-10-regular tracking-widest`}
          >
            {navArray.map((navData, index) => {
              return (
                <li
                  className={`list-none   hover:border-blue-600 hover:text-blue-400 ${
                    selectedIndex === index
                      ? "border-t-[0.2rem] border-blue-600 text-blue-900 "
                      : "border-transparent"
                  }`}
                >
                  <div
                    onClick={() => {
                      pathname !== "/" && router.push("/");
                      setSelectedNavLink(`${navData?.path}`);
                    }}
                  >
                    <span
                      className={`${noto_sans.className} cursor-pointer text-lg sm:text-xl md:text-2xl`}
                    >
                      {navData?.title}
                    </span>
                  </div>
                </li>
              );
            })}
          </nav>
        </div>
      </div>
      {/* hamNavbar */}

      <div className="sm:hidden flex flex-col items-end text-[1.5rem]  z-50 ">
        <Hamburger toggled={navHam} toggle={handleToggle} duration={0.9} />

        <nav
          className={`relative flex gap-6  text-[2rem] justify-center flex-col overflow-hidden  transition-all  items-center bg-cover bg-no-repeat bg-center  roboto-regular  w-full ${
            navHam ? "h-[100vh]" : "h-[0vh] "
          }  `}
        >
          <Image
            src={mobileNavImg}
            className=" absolute top-0 left-0 -z-10 w-full h-full object-cover opacity-50 "
          />
          <li className="list-none font-semibold jersey-10-regular tracking-widest hover:text-red-400">
            <a href="about-us">Home</a>
          </li>
          <li className="list-none font-semibold jersey-10-regular tracking-widest hover:text-red-400">
            <a href="about-us"></a>About Us
          </li>
          <li className="list-none font-semibold jersey-10-regular tracking-widest hover:text-red-400">
            <a href="#"></a>Individuals
          </li>
          <li className="list-none font-semibold jersey-10-regular tracking-widest hover:text-red-400">
            <a href="#"></a>Corporate
          </li>
          <li className="list-none font-semibold jersey-10-regular tracking-widest hover:text-red-400">
            <a href="#"></a>Contact Us
          </li>
          <li className="list-none font-semibold jersey-10-regular tracking-widest hover:text-red-400">
            <a href="#"></a>Blogs
          </li>
        </nav>
      </div>
    </>
  );
}

export default Header;
