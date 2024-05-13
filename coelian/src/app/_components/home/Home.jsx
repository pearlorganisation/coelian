"use client";
// --------------------------------------------------Imports----------------------------------------------
import { forwardRef, useImperativeHandle, useState, useRef } from "react";
import Image from "next/image";
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
  // ------------------------------------------------------------------------------------------------
  // -----------------------------------------------Functions-------------------------------------------
  // -----------------------------------------------useEffects-------------------------------------------
  //   useEffect(() => {}, []);
  // ------------------------------------------------------------------------------------------------

  return (
    <>
      <div
        className={`home hidden  relative sm:flex gap-6  text-[2rem] justify-center flex-col overflow-hidden  transition-all  items-center bg-cover bg-no-repeat bg-center  roboto-regular  w-full z-10`}
        ref={homeRef}
      >
        <img
          src="https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="headerImg"
          className="object-cover h-[50vh] sm:h-[97vh] w-full"
        />
      </div>
    </>
  );
}

export default forwardRef(Home);
