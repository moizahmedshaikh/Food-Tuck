import React from 'react';
import Image from 'next/image';

const Review = () => {
  return (
    <div>
        <div className='flex max-w-[1273px] mx-auto flex-col gap-2 py-6 px-6'>
            <p className='text-3xl Headdesign text-textp'>Testimonials</p>
            <h1 className='lg:text-5xl md:text-4xl text-3xl Headings font-bold'>What our client are saying</h1>
        </div>
    <div className="flex items-center justify-center py-24 px-4">
      <div className="relative bg-white max-w-[600px] mx-auto shadow-md py-10 px-8 text-center">
        {/* Profile Image */}
        <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2">
          <Image
            src="/review.png" // Replace with actual profile image
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Quote Icon */}
        <div className="text-[#FF9F0D] text-4xl mt-8">❝</div>

        {/* Review Text */}
        <p className="text-gray-600 mt-4 text-[16px] leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum.
        </p>

        {/* Rating Stars */}
        <div className="flex justify-center mt-4">
          <span className="text-[#FF9F0D] text-xl">★</span>
          <span className="text-[#FF9F0D] text-xl">★</span>
          <span className="text-[#FF9F0D] text-xl">★</span>
          <span className="text-[#FF9F0D] text-xl">★</span>
          <span className="text-gray-300 text-xl">★</span>
        </div>

        {/* Reviewer Info */}
        <div className="mt-4">
          <h3 className="text-gray-800 font-semibold text-lg">Alamin Hasan</h3>
          <p className="text-gray-500 text-sm">Food Specialist</p>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          <span className="w-3 h-3 bg-[#FF9F0D] rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Review;