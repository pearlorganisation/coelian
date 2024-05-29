"use client";
// -----------------------------------------------Imports--------------------------------------------------
import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import { motion } from "framer-motion";
import { RootContext } from "@/app/_contexts/RootContext/RootContextProvider";
import { Trans, useTranslation } from "react-i18next";
import { t } from "i18next";

// --------------------------------------------------------------------------------------------------------
const Blogs = (props, ref) => {
  // -----------------------------------------------States--------------------------------------------------
  // --------------------------------------------------------------------------------------------------------
  // -----------------------------------------------Hooks--------------------------------------------------
  const blogsRef = useRef();
  const { selectedIndex, selectedNavLink } = useContext(RootContext);
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
        reference: blogsRef.current,
      };
    },
    []
  );

  // we are getting data from i18n to plot in our news card
  const blogs = i18n.t("pages.blogs.content", { returnObjects: true });
  const images = i18n.t("pages.blogs.images", { returnObjects: true });

  return (
    <div className="blogs  flex blogBackground justify-center" ref={blogsRef}>
      <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
        <div className="container">
          {blogs?.map((blog, index) => (
            <div key={index}>
              
                <div>
                  <img src={images[index]} alt={blog.title} />
                  <h1>{blog.title}</h1>
                  <p>{blog.body}</p>
                </div>
             
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default forwardRef(Blogs);
