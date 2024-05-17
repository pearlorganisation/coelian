"use client";
// -----------------------------------------------Imports--------------------------------------------------
import { forwardRef, useImperativeHandle, useRef } from "react";
// --------------------------------------------------------------------------------------------------------

const Corporate = (props, ref) => {
  // -----------------------------------------------States--------------------------------------------------
  // --------------------------------------------------------------------------------------------------------
  // -----------------------------------------------Hooks--------------------------------------------------
  const corporateRef = useRef();
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

  return (
    <>
      <div
      className="corporate bg-[#e1e7f0] p-5 flex flex-col gap-4 border border-green-500  h-[90vh] "
      ref={corporateRef}
    >

           <div className="flex justify-center items-center md:p-4 p-2 ">
            <h1 className="font-mono font-extrabold text-[1.2rem] text-center md:text-[2rem]">Looking For Corporate Purchasing !!</h1>
           </div>
       
           <div className="corporate bg-[#e1e7f0]   gap-5 grid md:grid-cols-2 h-[80%]">

           
           <div className = "flex items-center justify-center border-2 bg-cover bg-center   relative rounded-lg opacity-80 overflow-hidden  " style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}>
            <div className="absolute w-full h-full bg-black/40 flex justify-center items-center ">
            <p className=" flex gap-2 flex-col justify-center items-center text-lg translate-y-16 text-white z-10 font-semibold" >
              <p>Own Your Office Today</p> 
              <button className=" bg-[#b7a16e] rounded-md w-[100px]">Listing (1)</button>
              </p>
            </div>
          
           </div>




           <div className="relative border-2 flex items-center justify-center bg-cover bg-center rounded-lg  opacity-80  overflow-hidden" style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1601599963565-b7ba29c8e3ff?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}>
            
            <div className="absolute w-full h-full bg-black/40 flex justify-center items-center ">
            <p className=" flex gap-2 flex-col justify-center items-center text-lg translate-y-16 text-white z-10 font-semibold" >
              <p>Looking for stores !! we have it </p> 
              <button className=" bg-[#b7a16e] rounded-md w-[100px]">Listing (1) </button>
              </p>
            </div>
            

            
           </div>

    </div>
      
    </div>
    </>
  
  );
};

export default forwardRef(Corporate);
