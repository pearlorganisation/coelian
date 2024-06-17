"use client";
import axios from "axios";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Trans, useTranslation } from "react-i18next";

const ContactUs = (props, ref) => {
  const contactUsRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  useImperativeHandle(
    ref,
    () => ({
      reference: contactUsRef.current,
    }),
    []
  );

  const { t } = useTranslation();

  const formLabels = t("contactUs.content", { returnObjects: true });

  async function onSubmit(data) {
    setLoading(true);
    try {
      const prevData = await axios.get(
        "https://coelien-default-rtdb.firebaseio.com/contactDetails.json"
      );
      const contactDetails = prevData.data || [];
      console.log("Existing data:", contactDetails);

      contactDetails.push(data);

      const res = await axios.put(
        "https://coelien-default-rtdb.firebaseio.com/contactDetails.json",
        contactDetails
      );
      console.log("Updated data:", res.data);

      setAlert({ type: "success", message: "Form submitted successfully!" });
    } catch (error) {
      console.error("Error:", error);
      setAlert({
        type: "error",
        message: "Failed to submit form. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="contactUs flex justify-center items-center bg-cover h-[90vh]"
      style={{
        backgroundImage:
          'url("https://themebubble.com/demo/webify/real-estate/wp-content/uploads/sites/57/2019/10/vdf.jpg")',
      }}
      ref={contactUsRef}
    >
      <div className="blurEffect m-2 md:m-0 w-[400px]">
        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="md:text-[1.2rem] text-[1.2rem] text-white flex justify-center items-center flex-col font-semibold font-mono">
            <h1 className="text-3xl text-white">{formLabels?.title}</h1>
            <p className="text-center text-gray-200">{formLabels?.miniTitle}</p>
          </div>
          {errors.name && (
            <span className="text-red-500">This field is required </span>
          )}
          <div className="m-1 flex justify-center">
            <input
              id="name"
              className="glass w-full p-2 placeholder-gray-950"
              placeholder={formLabels?.form?.name}
              {...register("name", { required: true })}
            />
          </div>
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}

          <div className="m-1 flex justify-center">
            <input
              id="email"
              className="glass w-full p-2 placeholder-gray-950"
              placeholder={formLabels?.form?.email}
              type="email"
              {...register("email", { required: true })}
            />
          </div>

          <div className="m-1 flex justify-center">
            <input
              id="number"
              className="glass w-full p-2 placeholder-gray-950"
              placeholder={"Number (optional) "}
              {...register("number")}
            />
          </div>

          {errors.message && (
            <span className="text-red-500">This field is required</span>
          )}

          <div className="m-1 flex justify-center h-[25vh]">
            <textarea
              id="message"
              className="placeholder-gray-950 w-full p-2 glass"
              placeholder={formLabels?.form?.message}
              {...register("message", { required: true })}
            />
          </div>

          <div className="flex justify-center p-3">
            <button
              className="border-2 p-2 rounded-md text-white font-bold tracking-widest bg-red-500 border-transparent border-white"
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : formLabels?.form?.submitButton}
            </button>
          </div>

          {alert && (
            <div
              className={`text-center text-white ${
                alert.type === "success" ? "bg-green-500" : "bg-red-500"
              } py-2 px-4 rounded-md`}
            >
              {alert.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default forwardRef(ContactUs);
