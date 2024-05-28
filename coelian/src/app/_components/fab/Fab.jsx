"use client";
// -------------------------------------------------Imports------------------------------------------------
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import logo from "../../_assets/images/logo.png";
import Image from "next/image";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useForm } from "react-hook-form";
// --------------------------------------------------------------------------------------------------------

export default function Fab() {
  // -------------------------------------------------Hooks------------------------------------------------
  const ref = useRef(null);

  // --------------------------------------------States-------------------------------------------------------
  const [dilaogOpen, setDialogOpen] = useState(false);

  // ---------------------------------------------Function---------------------------------------------------------

  function handleFabOpen() {
    setDialogOpen((prevState) => !prevState);
  }

  // -------------------------------------------------useEffect------------------------------------------------
  useEffect(() => {
    ref.current = document.getElementById("portal");
    console.log(moment().format("LT"));
  }, []);
  // ------------------------------------------------------------------------------------------------------

  return (
    ref.current &&
    true &&
    createPortal(
      <div
        className="fixed z-20  hover:border-red-400 active:border-red-400  bottom-0 right-0 bg-white bg-opacity-35  backdrop-blur-lg rounded-lg border-2  border-red-300 border-opacity-20 m-5  shadow-[0px_20px_30px_-10px_rgb(38,_57,_77)] "
        style={{ boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px" }}
      >
        <button className="p-2  " onClick={handleFabOpen}>
          Nous contacter
        </button>

        {dilaogOpen && (
          <div
            className="absolute overflow-hidden  bg-gradient-to-t from-gray-100 to-sky-300 top-[-26rem] rounded-2xl  right-0 w-[300px] h-[400px] border "
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          >
            <div className="flex  justify-between bg-white px-4 py-3 ">
              <p className="text-center text-black">
                Vous souhaitez discuter ?
              </p>
              <button className="text-sky-300" onClick={handleFabOpen}>
                <IoIosCloseCircleOutline size={34} />
              </button>
            </div>

            <p className="text-center">{moment().format("LT")}</p>

            <div className=" flex items-center justify-center gap-2">
              <Image
                src={logo}
                alt="website logo"
                className="h-[81px] w-[85px]"
              />
            </div>

            <p className="text-center font-bold text-[1.2rem] text-white">
              Hi !! there Welcome to Immo
            </p>
          </div>
        )}
      </div>,

      document.body
    )
  );
}
