"use client";
import axios from "axios";
// -----------------------------------------------Imports--------------------------------------------------
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { Trans, useTranslation } from "react-i18next";
// --------------------------------------------------------------------------------------------------------

const Corporate = (props, ref) => {
  // -----------------------------------------------States--------------------------------------------------

  // --------------------------------------------------------------------------------------------------------
  // -----------------------------------------------Hooks--------------------------------------------------
  const corporateRef = useRef();
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
        reference: corporateRef.current,
      };
    },
    []
  );
  useEffect(() => {
    const fetchCorporateData = async () => {
      try {
        const response = await axios.get(
          "https://coelien-default-rtdb.firebaseio.com/Corporate.json"
        );
        const data = response.data;

        console.log(data);
        // Update i18n resources with fetched data
        i18n.addResourceBundle(
          "en",
          "translation",
          {
            corporate: {
              title: "Looking For Corporate Purchasing !!",
              leftContent: "Own Your Office Today",
              rightContent: "Looking for stores !! we have it",
              listing: "listing",
              content1: data?.en.office,
              content2: data?.en.staffing,
              content3: data?.en.store,
            },
          },
          true,
          true
        );

        i18n.addResourceBundle(
          "fr",
          "translation",
          {
            corporate: {
              title: "À la recherche d'achats corporatifs !!",
              leftContent: "Possédez votre bureau dès aujourd'hui",
              rightContent: "Vous cherchez des magasins !! nous l'avons",
              listing: "liste",
              content1: data?.fr.office,
              content2: data?.fr.staffing,
              content3: data?.fr.store,
            },
          },
          true,
          true
        );

        i18n.addResourceBundle(
          "ja",
          "translation",
          {
            corporate: {
              title: "法人購買をお探しですか！！",
              leftContent: "今日、あなたのオフィスを所有してください",
              rightContent: "店舗をお探しですか！！ 私たちが持っています",
              listing: "リスト",
              content1: data?.ja.office,
              content2: data?.ja.staffing,
              content3: data?.ja.store,
            },
          },
          true,
          true
        );
      } catch (error) {
        console.error("Error fetching corporate data:", error);
      }
    };

    fetchCorporateData();
  }, [i18n]);

  return (
    <>
      <div
        className="corporate bg-[#e1e7f0] p-5 flex flex-col gap-4 border  h-[90vh] "
        ref={corporateRef}
      >
        <div className="flex justify-center items-center md:p-4 p-2 ">
          <h1 className="font-mono font-extrabold text-[1.2rem] text-center md:text-[2rem]">
            <Trans i18nKey="corporate.title" />
          </h1>
        </div>

        <div className="corporate bg-[#e1e7f0]   gap-5 grid md:grid-cols-2 h-[80%]">
          <div
            className="flex items-center justify-center border-2 bg-cover bg-center   relative rounded-lg opacity-80 overflow-hidden  "
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <div className="absolute  w-full h-full bg-black/40 flex justify-center items-center ">
              <div className=" flex gap-2 flex-col justify-center items-center text-base md:text-lg  text-white z-10 font-normal md:font-semibold">
                <p className="text-center md:text-md text-sm md:text-xl">
                  <Trans i18nKey="corporate.leftContent"></Trans>
                </p>

                <p className="text-center md:text-md text-sm md:text-xl">
                  <Trans i18nKey="corporate.content1" />
                </p>

                <button className=" bg-[#ccb47d] rounded-md w-[100px] md:text-xl">
                  <Trans i18nKey="corporate.listing"></Trans> (1)
                </button>
              </div>
            </div>
          </div>

          <div
            className="relative border-2 flex items-center justify-center bg-cover bg-center rounded-lg  opacity-80  overflow-hidden  "
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1601599963565-b7ba29c8e3ff?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          >
            <div className="absolute  w-full h-full bg-black/40 flex justify-center items-center ">
              <div className=" flex gap-2 flex-col items-center text-base md:text-lg text-white z-10 font-normal  md:font-semibold">
                <p>
                  <Trans i18nKey="corporate.rightContent md:text-xl"></Trans>
                </p>
                <div className="text-center text-sm md:text-xl">
                  <p className="md:text-md ">
                    <Trans i18nKey="corporate.content2" />
                  </p>
                  <p className="md:text-md text-sm md:text-xl">
                    <Trans i18nKey="corporate.content3" />
                  </p>
                </div>

                <button className=" bg-[#b7a16e] rounded-md w-[100px]">
                  <Trans i18nKey="corporate.listing"></Trans> (1){" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default forwardRef(Corporate);
