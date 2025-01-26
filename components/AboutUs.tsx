import React from "react";

import Image from "next/image";

import { FaCheck } from "react-icons/fa6";
import Link from "next/link";

function AbountUs() {
  return (
    <section className="px-3 lg:px-[135px] max-w-[1320] py-24">
      <div className="mx-auto w-full grid gap-10 items-center lg:px-4 md:px-12 px-5 grid-cols-1 lg:grid-cols-2">
        {/* Heading */}
        <div className="text-white md:text-start text-center mx-auto ">
          <h1 className="md:text-[32px] text-[20px] Headdesign font-normal text-[#FF9F0D] font whitespace-nowrap font-greatVibes ">
            About us
          </h1>

          <h1 className="text-[30px] md:text-[50px] mb-4 font-bold md:whitespace-normal">
            <span className="text-[#FF9F0D]">We</span> Create the best foody
            product
          </h1>

          <p className="text-[10px] md:text-[16px] font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>

          <ul >
            <li className="text-[10px] md:text-[16px] font-normal mt-10 flex">
              <span className="mr-[10px] ">
                <FaCheck />
              </span>{" "}
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="text-[10px] md:text-[16px] font-normal my-5 flex">
              <span className="mr-[10px]">
                <FaCheck />
              </span>{" "}
              Quisque diam pellentesque bibendum non dui volutpat fringilla{" "}
            </li>
            <li className="text-[10px] md:text-[16px] font-normal  flex">
              <span className="mr-[10px]">
                <FaCheck />
              </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
          </ul>

          <div className="flex flex-col md:flex-row items-center md:items-start">
            <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800">
              <Link href={"/about"}>See more</Link>
            </button>
          </div>
        </div>

        {/* Image */}

        <div className=" ld:mx-auto px-10 lg:px-3  ">
          <div className="h-auto [660px]">
            <Image
              src="/About/img1.png"
              width={2000}
              height={2000}
              alt="Hero Image"
              className=""
            />
          </div>
          <div className="flex flex-col justify-between items-center md:flex-row mt-[16px] md:mt-[0]">
            <div className="h-auto md:w-[320px]">
              <Image
                src="/About/img2.png"
                width={2000}
                height={2000}
                alt="Hero Image"
                className="mr-[16px] pt-[40px]"
              />
            </div>
            <div className="h-auto md:w-[320px]">
              <Image
                src="/About/img3.png"
                width={2000}
                height={2000}
                alt="Hero Image"
                className="pt-[40px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>




















    















  );
}

export default AbountUs;
