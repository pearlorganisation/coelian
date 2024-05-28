"use client";
// -----------------------------------------------Imports--------------------------------------------------
import { forwardRef, useImperativeHandle, useRef } from "react";
import { useForm } from "react-hook-form";
// --------------------------------------------------------------------------------------------------------

const ContactUs = (props, ref) => {
  // -----------------------------------------------States--------------------------------------------------
  // --------------------------------------------------------------------------------------------------------
  // -----------------------------------------------Hooks--------------------------------------------------
  const contactUsRef = useRef();
  const {
    register,
    onBlur,
    handleSubmit,
    formState: { error },
  } = useForm();

  useImperativeHandle(
    ref,
    () => {
      return {
        reference: contactUsRef.current,
      };
    },
    []
  );
  // --------------------------------------------------------------------------------------------------------
  // ---------------------------------------------Functions--------------------------------------------------
  // --------------------------------------------------------------------------------------------------------
  // ---------------------------------------------useEffect--------------------------------------------------
  // --------------------------------------------------------------------------------------------------------

  return (
    <div
      className="contactUs flex justify-center items-center  bg-cover  h-[90vh]"
      style={{
        backgroundImage:
          'url("https://themebubble.com/demo/webify/real-estate/wp-content/uploads/sites/57/2019/10/vdf.jpg")',
      }}
      ref={contactUsRef}
    >
      <div className="blurEffect m-2 md:m-0 w-[400px]">

        <form className="p-5" onSubmit={handleSubmit(() => {})}>
          <div className="md:text-[1.2rem] text-[1.2rem]  text-white flex justify-center items-center flex-col font-semibold font-mono">
            <h1 className="text-3xl text-white">Contact Us </h1>
            <p className="text-center text-gray-200">
              Fill out the details for information
            </p>
          </div>

          <div className="m-1 flex justify-center">
            <input
              className="glass w-full p-2  placeholder-gray-950  text-black"
              id="name"
              placeholder="Name"
              {...register("name")}
            />
          </div>
          <div className="m-1 flex justify-center">
            <input
              id="email"
              className="glass w-full p-2 placeholder-gray-950"
              placeholder="Email"
              {...register("email")}
            />
          </div>

          <div className="m-1  flex justify-center h-[25vh]">
            <textarea
              id="message"
              className="placeholder-gray-950 w-full p-2 glass"
              placeholder="Message"
              {...register("message")}
            />
          </div>
          <div className="flex justify-center p-3">
            <button
              className="border-2 p-2 rounded-md text-white font-bold tracking-widest  bg-red-500 border-transparent border-white "
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default forwardRef(ContactUs);
