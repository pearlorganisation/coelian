"use client";
// --------------------------------------------------Imports----------------------------------------------
import { forwardRef, useImperativeHandle, useState, useRef } from "react";
import Image from "next/image";
import database from "../../_assets/json/db";

import mobileNavImg from "../../_assets/images/mobileNavImg.jpg";
// --------------------------------------------------------------------------------------------------------

function Home(props, ref) {
  // -------------------------------------------------States-------------------------------------------

  const [selectedIndex, setSelectedIndex] = useState(0);
  // ------------------------------------------------------------------------------------------------
  // -------------------------------------------------Hooks-------------------------------------------
  const homeRef = useRef();

  useImperativeHandle(
    ref,
    () => {
      return {
        reference: homeRef.current,
      };
    },
    []
  );

  console.log(database.bannerImgMobile);
  // ------------------------------------------------------------------------------------------------
  // -----------------------------------------------Functions-------------------------------------------
  // -----------------------------------------------useEffects-------------------------------------------
  //   useEffect(() => {}, []);
  // ------------------------------------------------------------------------------------------------

  return (
    <>
      <div
        className={`home hidden   relative md:flex gap-6  text-[2rem] justify-center flex-col overflow-hidden  transition-all  items-center bg-cover bg-no-repeat bg-center  roboto-regular  w-full z-10`}
        ref={homeRef}
      >
        <img
          src={database.bannerImgDesktop}
          alt="headerImg"
          className="object-cover h-[50vh] sm:h-[97vh] w-full"
        />
      </div>

      <div
        className={`home  md:hidden flex gap-6 overflow-hidden transition-all  items-center bg-cover bg-no-repeat bg-center`}
      >
        <img
          src={database.bannerImgMobile}
          alt="bannerImgMobile"
          className="object-cover h-[90vh] w-full"
        />
      </div>
    </>
  );
}

export default forwardRef(Home);
