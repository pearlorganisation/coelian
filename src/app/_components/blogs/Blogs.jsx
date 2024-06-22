"use client";
// -----------------------------------------------Imports--------------------------------------------------
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import axios from "axios";

// --------------------------------------------------------------------------------------------------------
const Blogs = (props, ref) => {
  const [blogsData, setBlogsData] = useState({
    en: [],
    fr: [],
    ja: [],
  });
  const [blogsImages, setBlogsImages] = useState([]);
  const blogsRef = useRef();
  const { i18n } = useTranslation();

  useImperativeHandle(
    ref,
    () => {
      return {
        reference: blogsRef.current,
      };
    },
    []
  );

  useEffect(() => {
    const fetchBlogsData = async () => {
      try {
        const response = await axios.get(
          "https://coelien-default-rtdb.firebaseio.com/Blogs.json"
        );
        const data = response.data;
        setBlogsImages(data.blogImages);

        // Update i18n resources with fetched data
        i18n.addResourceBundle(
          "en",
          "translation",
          {
            pages: {
              blogs: {
                content: data?.en,
              },
            },
          },
          true,
          true
        );

        i18n.addResourceBundle(
          "fr",
          "translation",
          {
            pages: {
              blogs: {
                content: data?.fr,
              },
            },
          },
          true,
          true
        );

        i18n.addResourceBundle(
          "ja",
          "translation",
          {
            pages: {
              blogs: {
                content: data?.ja,
              },
            },
          },
          true,
          true
        );

        setBlogsData(data); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching blogs data:", error);
      }
    };

    fetchBlogsData();
  }, []);

  const blogsContent = blogsData[i18n.language];
  const blogTitle = i18n.t("pages.blogs.title");

  return (
    <div className="blogs blogBackground" ref={blogsRef}>
      <section className="pt-10 lg:pt-[50px] pb-8 lg:pb-10">
        <div className="flex justify-center items-center m-4">
          <p className="font-extrabold text-3xl p-5">{blogTitle}</p>
        </div>
        <div className="container mx-auto">
          <Swiper
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3, // Set to 3 slides per view for 1024px and above
                spaceBetween: 30,
              },
            }}
          >
            {blogsImages.length > 0 &&
              blogsContent?.map((blog, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center"
                >
                  <div className="max-w-sm bg-white w-fit mx-auto rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-5 h-[400px]">
                      <img src={blogsImages[index]} alt={blog.title} />
                      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {blog.title}
                      </h1>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {blog.body}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default forwardRef(Blogs);
