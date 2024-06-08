"use client";
// --------------------------------------------------Imports----------------------------------------------
import { forwardRef, useImperativeHandle, useState, useRef, useEffect } from "react";
import Image from "next/image";
import axios from "axios";


// --------------------------------------------------------------------------------------------------------

function Home(props, ref) {
  // -------------------------------------------------States-------------------------------------------

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [bannerImg,setBannerImg] = useState();
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
    useEffect(() => {
      const fetchBannerImg = async ()=>{
        
      const res = await axios.get("https://coelien-default-rtdb.firebaseio.com/BannerImg.json");
      console.log(res.data);
      setBannerImg(res.data);




      }
      fetchBannerImg();
    }, []);
  // ------------------------------------------------------------------------------------------------

  return (
    <>
      <div
        className={`home hidden   relative md:flex gap-6  text-[2rem] justify-center flex-col overflow-hidden  transition-all  items-center bg-cover bg-no-repeat bg-center  roboto-regular  w-full z-10`}
        ref={homeRef}
      >
        <img
          src={bannerImg?.desktopImg}
          alt="headerImg"
          className="object-cover  h-[50vh] sm:h-[97vh] w-full"
          fill ={true}
        />
      </div>

      <div
        className={`home  md:hidden flex gap-6 overflow-hidden transition-all  items-center bg-cover bg-no-repeat bg-center`}
      >
        <img
          src={bannerImg?.mobileImg}
          alt="bannerImgMobile"
          className="object-cover h-[90vh] w-full"
          fill ={true}
        />
      </div>
    </>
  );
}

export default forwardRef(Home);
