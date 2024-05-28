"use client";
// -----------------------------------------------Imports--------------------------------------------------
import { forwardRef, useImperativeHandle, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Trans, useTranslation } from "react-i18next";
import 'swiper/css';
import apartmentImg from "../../_assets/images/individuals/apartment.jpg"
import apartmentImg1 from "../../_assets/images/individuals/apartment6.jpg"
import apartmentImg2 from "../../_assets/images/individuals/apartment2.jpg"
import apartmentImg3 from "../../_assets/images/individuals/apartment3.jpg"
import apartmentImg4 from "../../_assets/images/individuals/apartment4.jpg"
import apartmentImg5 from "../../_assets/images/individuals/apartment5.jpg"

import Image from "next/image";
import { FaAngleLeft , FaAngleRight } from "react-icons/fa6";
// --------------------------------------------------------------------------------------------------------

const Individuals = (props, ref) => {
  // -----------------------------------------------States--------------------------------------------------
  // --------------------------------------------------------------------------------------------------------
  // -----------------------------------------------Hooks--------------------------------------------------
  const individualsRef = useRef();
  const swiperRef = useRef(null);
  const { i18n } = useTranslation();
  // --------------------------------------------------------------------------------------------------------
  // ---------------------------------------------Functions--------------------------------------------------
  // --------------------------------------------------------------------------------------------------------
  // ---------------------------------------------useEffect--------------------------------------------------
  // --------------------------------------------------------------------------------------------------------
  useImperativeHandle(
    ref,
    () => {
      return {
        reference: individualsRef.current,
      };
    },
    []
  );

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="individuals p-[20px]   "   ref={individualsRef}>
      <div style={{ boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px" }} className="rounded-2xl overflow-hidden bg-transparent">
        <div className="grid grid-rows-1 lg:grid-cols-2    justify-center items-center overflow-hidden  ">
          <div className="bg-[#c6cedb]  order-2 md:h-[80vh]  flex sm:flex-col  justify-center p-10  items-center">
            <p style={{ textShadow: "2px 5px 0px rgba(44, 42, 42, 0.6)" }} className="text-5xl m-1 text-white  flex flex-col font-serif ">
              <p><Trans i18nKey="pages.individual.title.p1"></Trans></p>
              <p><Trans i18nKey="pages.individual.title.p2"></Trans></p>
              <p><Trans i18nKey="pages.individual.title.p3"></Trans></p>
              
            </p>
            <i className="font-serif   text-white text-xl  font-semibold"><Trans i18nKey="pages.individual.miniTitle"></Trans></i>
          </div>
          <div className="  overflow-hidden relative md:h-[80vh] flex justify-center items-center">
            <div className="bg-black/20 absolute  z-40 h-full "></div>
            <Swiper
              ref={swiperRef}
              className=" md:h-full  md:w-auto h-[300px] w-full object-cover"
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              
              <SwiperSlide className=" h-full overflow-hidden"><Image src={apartmentImg} alt="Apartment" className="md:h-full  md:w-auto h-[300px] w-full object-cover " /></SwiperSlide>
              <SwiperSlide className=" h-full overflow-hidden"><Image src={apartmentImg1} alt="Apartment" className="md:h-full  md:w-auto h-[300px] w-full object-cover" /></SwiperSlide>
              <SwiperSlide className=" h-full overflow-hidden"><Image src={apartmentImg2} alt="Apartment" className="md:h-full  md:w-auto h-[300px] w-full object-cover" /></SwiperSlide>
              <SwiperSlide className=" h-full overflow-hidden"><Image src={apartmentImg3} alt="Apartment" className="md:h-full  md:w-auto h-[300px] w-full object-cover" /></SwiperSlide>
              <SwiperSlide className=" h-full overflow-hidden"><Image src={apartmentImg4} alt="Apartment" className="md:h-full  md:w-auto h-[300px] w-full object-cover" /></SwiperSlide>
              <SwiperSlide className=" h-full overflow-hidden"><Image src={apartmentImg5} alt="Apartment" className="md:h-full  md:w-auto h-[300px] w-full object-cover" /></SwiperSlide>
            </Swiper>

            <div className="flex  justify-between mt-2">
            <button onClick={handlePrevSlide} className="bg-[rgba(255,255,255,0.45)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-20 rounded-[20px] border border-[rgba(255,255,255,0.18)] absolute z-50 left-0 text-white px-4 py-2 ">
            <FaAngleLeft />
              </button>


              <button onClick={handleNextSlide} className="bg-[rgba(255,255,255,0.45)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-20 rounded-[20px] border border-[rgba(255,255,255,0.18)] absolute z-50 right-0 text-white px-4 py-2"><FaAngleRight />  </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Individuals);
