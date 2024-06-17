"use client";

import React, { useState } from "react";
import database,{setAboutImg} from "../../../_assets/json/db";

const AdminForm = () => {
  const [aboutUsImg, setAboutUsImage] = useState(database.aboutUs.Img);
  const [imgError, setImgError] = useState(false);
  const blogsContent = database.blogs.content;
  const blogsImages = database.blogs.images;



  return (
    <form className="w-[60%] mx-auto border border-red-400">
      {/* Header for the first section */}
      <div
        className="p-4"
        style={{ boxShadow: "rgba(6, 2, 22, 0.24) 0px 3px 8px;" }}
      >
        <h2 className="text-lg font-semibold mb-4">Update About Us Details </h2>

        {/* First Section: About Us Image */}
        <div
          className="flex flex-col justify-center items-center border rounded-lg p-2 "
          style={{ boxShadow: "rgba(6, 2, 22, 0.24) 0px 3px 8px;" }}
        >
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="about_us_image"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-center"
            >
              About Us Image
            </label>
            <input
              type="text"
              defaultValue={database.aboutUs.Img}
              onChange={(event) => {
                setAboutUsImage(event.target.value);
                setImgError(false); // Reset error state when URL changes
              }}
              name="about_us_image"
              id="about_us_image"
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
          </div>

          <div
            style={{ boxShadow: "rgba(6, 2, 22, 0.24) 0px 3px 8px;" }}
            className="w-[90%] rounded-lg my-3"
          >
            <h1 className="text-center z-10 font-bold text-blue-500">
              Preview Of Image
            </h1>
            {imgError ? (
              <p className="text-center text-red-500">Image failed to load.</p>
            ) : (
              <div className="flex gap-2 flex-col justify-center items-center">
                <img
                  src={aboutUsImg}
                  alt="aboutUsImg"
                  id="about_us_img"
                  className="w-[300px] h-[300px]"
                  onError={() => setImgError(true)}
                />
                <button
                  type="button"
                  className="text-white my-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={()=>{setAboutImg(database.aboutUs.Img)}}
                >
                  Save IMG
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Header for the second about section */}
        <div className="p-2 ">
          <div
            style={{ boxShadow: "rgba(6, 2, 22, 0.24) 0px 3px 8px;" }}
            className="flex flex-col gap-2 rounded-lg border-2     p-4"
          >
            {/* Second Section: Translations */}
            <h2 className="text-lg font-semibold mb-4 text-center">
              About Us Data
            </h2>
            <div className="relative z-0 w-full mb-5 group">
              <label
                htmlFor="english_translation"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                English Translation
              </label>
              <textarea
                defaultValue={database.aboutUs.content.en}
                id="english_translation"
                name="english_translation"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write the English translation here..."
              ></textarea>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <label
                htmlFor="french_translation"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                French Translation
              </label>
              <textarea
                defaultValue={database.aboutUs.content.fr}
                id="french_translation"
                name="french_translation"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write the French translation here..."
              ></textarea>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <label
                htmlFor="japanese_translation"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Japanese Translation
              </label>
              <textarea
                defaultValue={database.aboutUs.content.ja}
                id="japanese_translation"
                name="japanese_translation"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write the Japanese translation here..."
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      {/* blogs section  */}

      <div className="p-2">
        <div
          style={{ boxShadow: "rgba(6, 2, 22, 0.24) 0px 3px 8px;" }}
          className="border-2 h-[80vh] rounded-lg p-2   flex gap-2 mx-2 flex-col cursor-pointer"
        >
          <h2 className="text-lg font-semibold mb-4 text-center">
            Update Blogs Details
          </h2>

          {/* // blogs content in english */}
          <div className="p-4  m-4 overflow-auto  ">
            {blogsContent.en.map((blog, index) => (
              <div
                key={index}
                className="border-2 m-2 rounded-lg p-2"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;",
                }}
              >
                <h1>Blogs {index + 1}</h1>
                <div className="flex flex-col gap-4 ">
                  <div className="grid grid-cols-2  gap-2">
                    <div className="border ̥p-2">
                      <h1 className="text-center">Title</h1>
                      <p className="text-center">{blog.title}</p>
                    </div>
                    <div className="border  p-2">
                      <h1 className="text-center">Body</h1>
                      <p>{blog.body}</p>
                    </div>
                  </div>
                  <div className=" overflow-hidden  flex justify-center items-center">
                    <img src={blogsImages[index]} alt="blog image" />
                  </div>
                </div>
              </div>
            ))}
            <div />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default AdminForm;
