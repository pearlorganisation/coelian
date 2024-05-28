"use client";
// -----------------------------------------------Imports--------------------------------------------------
import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import { motion } from "framer-motion";
import { RootContext } from "@/app/_contexts/RootContext/RootContextProvider";
import { Trans, useTranslation } from "react-i18next";

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

  return (
    <div className="blogs  flex blogBackground justify-center" ref={blogsRef}>
      <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
        <div class="container">
          <div class="flex flex-wrap justify-center -mx-4">
            <div class="w-full px-4">
              <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <span class="font-semibold text-lg text-primary  block">
                  <Trans i18nKey="pages.blogs.title"></Trans>
                </span>
                <h2
                  class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                
                  "
                >
                  <Trans i18nKey="pages.blogs.title"></Trans>
                </h2>
                <p class="text-base text-body-color">
                  <Trans i18nKey="pages.blogs.miniTitle"></Trans>
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-1/2 lg:w-1/2 px-4">
              <motion.div
                animate={{
                  x: window.innerWidth > 1080 && selectedIndex == 4 ? -100 : 0,
                  scale:
                    window.innerWidth > 1080 && selectedIndex == 4 ? 1 : 0.8,
                }}
                initial={{ scale: 0.8 }}
                class="max-w-[370px] mx-auto mb-10 h-[500px] shadow-[0_0_0_1px#b3b3b3] rounded-lg  "
              >
                <div class="rounded overflow-hidden mb-8">
                  <img
                    className="rounded-t-lg rounded-b-0"
                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                    alt="image"
                    class="w-full"
                  />
                </div>
                <div className="p-2">
                  <a
                    href="https://vivreatokyo.com/coelien-plain-un-agent-immobilier-francais-a-tokyo.html"
                    target="_blank"
                    class="
                     bg-blue-600
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                  >
                    <Trans i18nKey="pages.blogs.readMoreButton"></Trans>
                  </a>
                  <h3>
                    <a
                      href="https://vivreatokyo.com/coelien-plain-un-agent-immobilier-francais-a-tokyo.html"
                      target="_blank"
                      class="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                    >
                      <Trans i18nKey="pages.blogs.paragraph.part1.title"></Trans>
                      
                    </a>
                  </h3>
                  <p class="text-base text-body-color">
                  <Trans i18nKey="pages.blogs.paragraph.part1.body"></Trans>
                  </p>
                </div>
              </motion.div>
            </div>
            <motion.div
              animate={{
                x: window.innerWidth > 1080 && selectedIndex == 4 ? 100 : 0,
                scale: window.innerWidth > 1080 && selectedIndex == 4 ? 1 : 0.8,
              }}
              initial={{ scale: 0.8 }}
              class="w-full md:w-1/2 lg:w-1/2 px-4"
            >
              <div class="max-w-[370px] mx-auto mb-10 h-[500px] shadow-[0_0_0_1px#b3b3b3] rounded-lg ">
                <div class="rounded overflow-hidden mb-8">
                  <img
                    className="rounded-t-lg rounded-b-none"
                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                    alt="image"
                    class="w-full"
                  />
                </div>
                <div className="p-2">
                  <a
                    href="https://www.expat.org/vivre-a-tokyo/agence-immobiliere-location-appartement-bureau-tokyo.html"
                    target="_blank"
                    class="
                     bg-blue-600
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                  >
                    <Trans i18nKey="pages.blogs.readMoreButton"></Trans>{" "}
                  </a>
                  <h3>
                    <a
                      href="https://www.expat.org/vivre-a-tokyo/agence-immobiliere-location-appartement-bureau-tokyo.html"
                      target="_blank"
                      class="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                    >
                       <Trans i18nKey="pages.blogs.paragraph.part2.title"></Trans>
                    </a>
                  </h3>
                  <p class="text-base text-body-color">
                  <Trans i18nKey="pages.blogs.paragraph.part2.body"></Trans>

                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default forwardRef(Blogs);
