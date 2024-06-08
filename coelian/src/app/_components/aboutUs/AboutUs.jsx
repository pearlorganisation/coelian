"use client";
// -----------------------------------------Imports--------------------------------------------
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";

// import AboutUsImg from "../../_assets/images/AboutUsImg.jpg";
import database from "../../_assets/json/db";

import { Trans, useTranslation } from "react-i18next";
// --------------------------------------------------------------------------------------------
import axios from "axios";


const AboutUs = (props, ref) => {
  // -----------------------------------------States--------------------------------------------

     const [aboutUs,setAboutUs] = useState({});
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

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get('https://coelien-default-rtdb.firebaseio.com/About.json');
        const data = response.data;

        // Update i18n resources with fetched data
        i18n.addResourceBundle('en', 'translation', {
          pages: {
            aboutUs: {
              description: data?.aboutUsData?.en,
            },
          },
        }, true, true);

        i18n.addResourceBundle('fr', 'translation', {
          pages: {
            aboutUs: {
              description: data?.aboutUsData?.fr,
            },
          },
        }, true, true);

        i18n.addResourceBundle('ja', 'translation', {
          pages: {
            aboutUs: {
              description: data?.aboutUsData?.ja,
            },
          },
        }, true, true);

        setAboutUs(data); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchAboutData();
  }, []);

  // --------------------------------------------------------------------------------------------
  return (
    <div className="aboutUs flex justify-center py-10 " ref={aboutUsRef}>
      <div className="flex flex-col md:flex-row gap-6 p-4 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl   justify-around  items-center py-10 my-10  w-[90%]">
        <div className="opacity-80 rounded-lg overflow-hidden  w-[60vw] sm:w-[40vw] border-2  ">
          
          <img src={aboutUs.aboutUsImg} alt="about_us_img" />
        </div>

        <div className="flex flex-col items-center justify-around gap-3 text-sm md:text-[1.1rem] font-semibold md:min-h-[400px] md:w-[40vw] ">
          <p className="md:text-5xl text-2xl"><Trans i18nKey="pages.aboutUs.title"/> </p>
          <p className="text-base font-light text-wrap ">
          <Trans i18nKey="pages.aboutUs.description"/> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(AboutUs);
