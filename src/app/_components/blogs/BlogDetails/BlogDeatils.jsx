import React from "react";

const BlogDeatils = () => {
  return (
    <>
      <div class="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
        <div class="mb-6">
          <img
            src="apartment.jpg"
            alt="Blog Image"
            class="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        <h1 class="text-3xl font-bold mb-4">Blog Title</h1>
        <p class="text-gray-700 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue,
          quam velit venenatis sem, vel euismod est odio ut mi. Nam gravida
          purus non orci malesuada fermentum. Suspendisse potenti. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Fusce auctor arcu sit amet laoreet ultricies. Proin
          tincidunt dolor in quam dictum, a dapibus lacus facilisis. Phasellus
          at diam quis arcu varius aliquam eu et erat.
        </p>
        <p class="text-gray-700 leading-relaxed">
          Curabitur venenatis ut eros a hendrerit. Integer euismod, velit ac
          euismod tempor, turpis erat bibendum est, ut aliquet mauris lectus vel
          ex. Mauris pharetra, felis at viverra convallis, sapien arcu gravida
          metus, eget condimentum leo elit sed nulla. Vestibulum in fermentum
          augue. Aliquam erat volutpat. Duis ac semper ante, sit amet tincidunt
          arcu. Praesent viverra augue in enim tempor, at varius lacus ultrices.
        </p>
      </div>
    </>
  );
};

export default BlogDeatils;
