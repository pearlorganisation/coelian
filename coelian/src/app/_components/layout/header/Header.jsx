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
import { Trans, useTranslation } from "react-i18next";
import LangFlag from "../../langFlag/LangFlag";
// ------------------------------------------------------------------------------------------------

const noto_sans = Noto_Sans({
  weight: "700",
  subsets: ["latin"],
  adjustFontFallback: false,
});

function Header({}, ref) {
  // -------------------------------------------------States-------------------------------------------
  const [navHam, setNavHam] = useState(false);

  const navArray = [
    {
      title: <Trans i18nKey="pages.navbar.home"></Trans>,
      path: "home",
    },
    {
      title: <Trans i18nKey="pages.navbar.about"></Trans>,
      path: "aboutUs",
    },
    {
      title: <Trans i18nKey="pages.navbar.corporate"></Trans>,
      path: "corporate",
    },
    { title: <Trans i18nKey="pages.navbar.blog"></Trans>, path: "blogs" },
    {
      title: <Trans i18nKey="pages.navbar.contact"></Trans>,
      path: "contactUs",
    },
  ];

  const router = useRouter();

  // ------------------------------------------------------------------------------------------------
  // -------------------------------------------------Hooks-------------------------------------------
  const { selectedIndex, setSelectedNavLink } = useContext(RootContext);
  const pathname = usePathname();
  const { i18n } = useTranslation();
  // ------------------------------------------------------------------------------------------------
  // -----------------------------------------------Functions-------------------------------------------
  function handleToggle() {
    setNavHam((prevState) => !prevState);
  }
  // -----------------------------------------------useEffects-------------------------------------------
  // ------------------------------------------------------------------------------------------------

  return (
    <>
      <div className="relative hidden  md:block h-[100px] z-[99] ">
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
        <div className="fixed top:0 left-0 right-0  h-[100px] bg-white flex items-center  justify-around font-thin md:font-semibold">
          <div className="flex justify-center items-center">
            <Image src={logo} alt="logo" width={100} />
          </div>

          <nav
            className={` flex gap-4 sm:text-[25px] md:text-[15px] lg:text-[25px]  sm:mono lg:jersey-10-regular tracking-wide lg:tracking-widest`}
          >
            {navArray.map((navData, index) => {
              return (
                <li
                  key={index}
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
                      className={`${noto_sans.className} cursor-pointer text-lg  md:text-base lg:text-2xl`}
                    >
                      {navData?.title}
                    </span>
                  </div>
                </li>
              );
            })}
            {/*------------------ Language Flag Component---------------  */}
            <div className="flex justify-center items-center">
              <LangFlag />
            </div>
          </nav>
        </div>
      </div>
      {/* hamNavbar */}

      <div className="md:hidden flex flex-col items-end text-[1.5rem]  z-50 ">
        <Hamburger toggled={navHam} toggle={handleToggle} duration={0.9} />

        <nav
          className={`relative flex gap-6  text-[2rem] justify-center flex-col overflow-hidden  transition-all  items-center bg-cover bg-no-repeat bg-center  roboto-regular  w-full ${
            navHam ? "h-[100vh]" : "h-[0vh] "
          }  `}
        >
          <Image
            src={mobileNavImg}
            className=" absolute top-0 left-0 -z-10 w-full h-full object-cover opacity-50 "
            alt="mobileNavImg"
          />
          {navArray.map((navData, index) => {
            return (
              <li
                key={index}
                className={`list-none    hover:text-red-400 jersey-10-regular text-2xl font-bold `}
              >
                <div
                  onClick={() => {
                    pathname !== "/" && router.push("/");
                    setSelectedNavLink(`${navData?.path}`);
                    handleToggle();
                  }}
                >
                  <span
                    className={`${noto_sans.className} cursor-pointer text-3xl `}
                  >
                    {navData?.title}
                  </span>
                </div>
              </li>
            );
          })}
          <div className="flex gap-2 justify-center items-center">

            <p className="hover:text-red-400 jersey-10-regular text-3xl font-bold"><Trans i18nKey="language.lang"/> : </p> 
            <LangFlag />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
