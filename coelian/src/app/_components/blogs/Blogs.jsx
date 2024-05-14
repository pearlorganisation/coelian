"use client";
// -----------------------------------------------Imports--------------------------------------------------
import { forwardRef, useImperativeHandle, useRef } from "react";
// --------------------------------------------------------------------------------------------------------

const Blogs = (props, ref) => {
  // -----------------------------------------------States--------------------------------------------------
  // --------------------------------------------------------------------------------------------------------
  // -----------------------------------------------Hooks--------------------------------------------------
  const blogsRef = useRef();
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
                <span class="font-semibold text-lg text-primary mb-2 block">
                  Our Blogs
                </span>
                <h2
                  class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                >
                  Our Recent News
                </h2>
                <p class="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-1/2 lg:w-1/2 px-4">
              <div class="max-w-[370px] mx-auto mb-10 h-[500px] shadow-[0_0_0_1px#b3b3b3] rounded-lg  ">
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
                    Read More
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
                      Tokyo Immo on vivreatokyo.com
                    </a>
                  </h3>
                  <p class="text-base text-body-color">
                    Coelien revient sur son parcours au Japon : « Après avoir
                    fait un échange à l’université d’Okayama et être rentré en
                    France pour valider ma licence...
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/2 px-4">
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
                    Read More
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
                      Tokyo Immo on Expat.org
                    </a>
                  </h3>
                  <p class="text-base text-body-color">
                    TOKYO IMMO offers you apartments, houses or buildings
                    corresponding to customer expectations and assists them in
                    getting off to a...
                  </p>
                </div>
              </div>
            </div>
            {/* <div class="w-full md:w-1/2 lg:w-1/3 px-4">
              <div class="max-w-[370px] mx-auto mb-10">
                <div class="rounded overflow-hidden mb-8">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg"
                    alt="image"
                    class="w-full"
                  />
                </div>
                <div>
                  <span
                    class="
                     bg-primary
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
                    Jan 05, 2023
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
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
                      The no-fuss guide to upselling and cross selling
                    </a>
                  </h3>
                  <p class="text-base text-body-color">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default forwardRef(Blogs);
