"use client";
// -----------------------------------------Imports--------------------------------------------
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import AboutUsImg from "../../_assets/images/AboutUsImg.jpg";
import Image from "next/image";
// --------------------------------------------------------------------------------------------

const AboutUs = (props, ref) => {
  // -----------------------------------------States--------------------------------------------
  // --------------------------------------------------------------------------------------------
  // -----------------------------------------Hooks--------------------------------------------
  const aboutUsRef = useRef();

  useImperativeHandle(
    ref,
    () => {
      return {
        reference: aboutUsRef.current,
      };
    },
    []
  );
  // --------------------------------------------------------------------------------------------
  return (
    <div className="aboutUs flex justify-center py-10 " ref={aboutUsRef}>
      <div className="flex flex-col md:flex-row gap-6 p-4 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl   justify-around  items-center py-10 my-10  w-[90%]">
        <div className="opacity-80 rounded-lg overflow-hidden  w-[60vw] sm:w-[40vw] border-2  ">
          <Image src={AboutUsImg} alt="AboutUsImg" />
        </div>

        <div className="flex flex-col items-center justify-around gap-3 text-sm md:text-[1.1rem] font-semibold md:h-[400px] md:w-[40vw] ">
          <p className="md:text-5xl text-2xl">About Us</p>
          <p className="text-base font-light text-wrap ">
            TOKYO IMMO offers you apartments, houses or buildings that meet your
            expectations and helps you get off to a smooth start in Japan. We'll
            work with you to find the real estate that will give you the peace
            of mind you're looking for in Japan. Each property is unique. Within
            the same building, between two properties with identical structures
            or two adjoining apartments, everything will be different if the
            location is not exactly the same: sunshine, perception of noise,
            wind flow... Among the wealth of information available, TOKYO IMMO
            will do its utmost to find the right property for you. We don't just
            show you apartments, houses or buildings, we can also take care of
            the formalities involved in subscribing to the various
            housing-related services, to help you prepare for your move.
          </p>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(AboutUs);