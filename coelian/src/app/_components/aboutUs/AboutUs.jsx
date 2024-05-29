"use client";
// -----------------------------------------Imports--------------------------------------------
import React, { forwardRef, useImperativeHandle, useRef } from "react";

import AboutUsImg from "../../_assets/images/AboutUsImg.jpg";
import Image from "next/image";
import { Trans, useTranslation } from "react-i18next";
// --------------------------------------------------------------------------------------------



const AboutUs = (props, ref) => {
  // -----------------------------------------States--------------------------------------------
  // --------------------------------------------------------------------------------------------
  // -----------------------------------------Hooks--------------------------------------------
  const aboutUsRef = useRef();
  const { i18n } = useTranslation();
  console.log("about is rendering")

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
          <p className="md:text-5xl text-2xl"><Trans i18nKey="pages.aboutUs.title"> </Trans></p>
          <p className="text-base font-light text-wrap ">
          <Trans i18nKey="pages.aboutUs.description"> </Trans>
          </p>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(AboutUs);
