import React from "react";
import Nav2 from "@/components/Nav2";
import HeroLinks from "@/components/HeroLinks";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <Nav2 />
      <HeroLinks heading="Our About" url1="Home" url2="About" />
      <section className="flex  flex-wrap lg:flex-nowrap items-center justify-between max-w-[1200px] mx-auto py-20 px-14">
        {/* Left Images Section */}
        <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">
          {/* Image 1 */}
          <div className="relative w-full h-[250px]">
            <Image
              src="/aboutus.png" // Replace with actual image
              alt="Food 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          {/* Image 2 */}
          <div className="relative w-full h-[250px]">
            <Image
              src="/about3.png" // Replace with actual image
              alt="Food 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          {/* Image 3 */}
          <div className="relative col-span-2 w-full h-[250px]">
            <Image
              src="/about4.png" // Replace with actual image
              alt="Food 3"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
          {/* Heading */}
          <h3 className="text-[#FF9F0D] Headdesign text-2xl font-semibold">
            About us ____
          </h3>
          <h1 className="text-black Headings text-3xl md:text-5xl font-bold mt-4">
            Food is an important part Of a balanced Diet
          </h1>
          <p className="text-black text-sm md:text-base mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
            velit in consequat.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-6">
            {/* Show More Button */}
            <button className="bg-[#FF9F0D] text-white py-2 px-6 rounded-lg text-sm md:text-base font-semibold hover:bg-[#e58907]">
              Show more
            </button>
            {/* Watch Video Button */}
            <button className="flex items-center gap-2 text-[#FF9F0D] font-semibold">
              <span className="p-2 bg-[#FF9F0D] text-white rounded-full">
                ▶
              </span>
              Watch video
            </button>
          </div>
        </div>
      </section>

      <section className="px-5">
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-[35px] md:text-[50px] font-bold text-black whitespace-nowrap md:whitespace-normal mt-1">
            Why Choose Us
          </h2>
          <p className="max-w-[500px] text-black mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            aliquid tenetur commodi obcaecati minima rem
          </p>
        </div>

        <div className="w-full mx-auto">
          <Image
            src={"/bg2.png"}
            width={1000}
            height={1000}
            alt="Bg"
            className="mx-auto mt-10"
          />
        </div>
      </section>


      <section className="my-20">
        <div className="max-w-[1320px] mx-auto text-black">
          <div className="flex justify-between md:flex-row gap-7 flex-col items-center px-24">

            <div className="w-[360px]  flex justify-center items-center flex-col">
              <Image src={"/Student.png"} alt="coffee" width={70} height={70}/>
              <h2 className="font-bold text-[#333333]">120 Items food</h2>
              <p className="text-center text-[#4F4F4F]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore perspiciatis accusantium in quaerat</p>
            </div>

            <div className="w-[360px]  flex justify-center items-center flex-col">
              <Image src={"/Coffee.png"} alt="coffee" width={70} height={70}/>
              <h2 className="font-bold text-[#333333]">120 Items food</h2>
              <p className="text-center text-[#4F4F4F]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore perspiciatis accusantium in quaerat</p>
            </div>

            <div className="w-[360px]  flex justify-center items-center flex-col">
              <Image src={"/man.png"} alt="coffee" width={70} height={70}/>
              <h2 className="font-bold text-[#333333]">120 Items food</h2>
              <p className="text-center text-[#4F4F4F]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore perspiciatis accusantium in quaerat</p>
            </div>

          </div>
        </div>
      </section>




      <section className=" px-4 md:px-[135px] max-w-[1320px] mx-auto py-[50px]">
        {/* Heading Section */}

        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-[35px] md:text-[50px] font-bold text-black whitespace-nowrap md:whitespace-normal mt-1">
            Team Member
          </h2>
          <p className="max-w-[500px] text-black mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            aliquid tenetur commodi obcaecati minima rem
          </p>
        </div>

        {/* <Image src={"/Bg.png"} width={1000} height={500} alt="bg image"/> */}

        {/* Images Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-[50px] justify-items-center ">
          {/* Chef 1 */}
          <div className="flex flex-col items-center shadow cursor-pointer transition-transform hover:scale-[1.05]  w-[200px] sm:w-[250px] lg:max-w-[312px] md:max-h-[398px]  ">
            <Image
              src={"/pic3.png"}
              alt="Chef 1"
              className=" md:h-[310px] object-cover rounded-lg "
              height={1000}
              width={1000}
            />

            <div className="py-2 text-black flex flex-col justify-center items-center">
              <h1 className="text-xl font-bold Headings">Mark Henry</h1>
              <p className="text-[#828282] text-base Headings font-[400]">
                Owner
              </p>
            </div>
          </div>

          {/* Chef 2 */}
          <div className="flex flex-col items-center shadow cursor-pointer transition-transform hover:scale-[1.05]  w-[200px] sm:w-[250px] md:max-w-[312px] md:max-h-[398px]  ">
            <Image
              src={"/pic3.png"}
              alt="Chef 1"
              className=" md:h-[310px] sm:w-[312px] object-cover rounded-lg "
              height={1000}
              width={1000}
            />

            <div className="py-2 text-black flex flex-col justify-center items-center">
              <h1 className="text-xl font-bold Headings">Mark Henry</h1>
              <p className="text-[#828282] text-base Headings font-[400]">
                Owner
              </p>
            </div>
          </div>

          {/* Chef 3 */}
          <div className="flex flex-col items-center shadow cursor-pointer transition-transform hover:scale-[1.05]  w-[200px] sm:w-[250px] md:max-w-[312px] md:max-h-[398px]  ">
            <Image
              src={"/pic3.png"}
              alt="Chef 1"
              className=" md:h-[310px] sm:w-[312px] object-cover rounded-lg "
              height={1000}
              width={1000}
            />

            <div className="py-2 text-black flex flex-col justify-center items-center">
              <h1 className="text-xl font-bold Headings">Mark Henry</h1>
              <p className="text-[#828282] text-base Headings font-[400]">
                Owner
              </p>
            </div>
          </div>

          {/* Chef 4 */}
          <div className="flex flex-col items-center shadow cursor-pointer transition-transform hover:scale-[1.05]  w-[200px] sm:w-[250px] md:max-w-[312px] md:max-h-[398px]  ">
            <Image
              src={"/pic3.png"}
              alt="Chef 1"
              className=" md:h-[310px] sm:w-[312px] object-cover rounded-lg "
              height={1000}
              width={1000}
            />

            <div className="py-2 text-black flex flex-col justify-center items-center">
              <h1 className="text-xl font-bold Headings">Mark Henry</h1>
              <p className="text-[#828282] text-base Headings font-[400]">
                Owner
              </p>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div className="flex max-w-[1273px] px-10 mt-7 mx-auto flex-col gap-2 py-6">
          <p className="text-3xl Headdesign text-textp">Testimonials</p>
          <h1 className="text-[35px] md:text-5xl Headings text-black font-bold">
            What our client are saying
          </h1>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
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
              <h3 className="text-gray-800 font-semibold text-lg">
                Alamin Hasan
              </h3>
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

      {/* Menu Section */}

      <div className="container mx-auto pb-40 px-4 text-[#333333]">
        <div className="space-y-4 w-fit mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold Headings">
            <span className="text-textp">Fr</span>om Our Menu
          </h2>
          <p className="text-[#4F4F4F] Headdesign text-center max-w-[450px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            dolorem sapiente, tempore nemo sed incidunt et sit{" "}
          </p>
          <div className="w-fit mx-auto">
            <div className="bg-accent h-[5px] w-[70px] mt-10"></div>
          </div>
        </div>

        <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 w-fit  mx-auto">
          <li className=" text-textp p-1">Breakfast</li>
          <li id="icon" className="hover:cursor-pointer">
            Dinner
          </li>
          <li id="icon" className="hover:cursor-pointer">
            Desert
          </li>
          <li id="icon" className="hover:cursor-pointer">
            Drinks
          </li>
          <li id="icon" className="hover:cursor-pointer">
            Snack
          </li>
          <li id="icon" className="hover:cursor-pointer">
            Soup
          </li>
        </ul>

        <div className="max-w-[1320px] mx-auto min-h-[523px] mt-2 pt-6 border-t-[1px] border-gray-300">
          <div className="grid lg:grid-cols-2 grid-cols-1 ">
            <div className="flex justify-between Headings px-4 py-2 ">
              <div className="border-b-[1px] border-gray-200 pb-3 w-full">
                <h1 className="hover:text-textp transition-all cursor-pointer duration-100 font-bold md:text-2xl text-xl">
                  Alder Grilled Chinook Salmon
                </h1>
                <p className="text-base font-[400] text-[#4F4F4F] py-2">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-base text-[#828282]">560 CAL</p>
              </div>
              <div className="text-textp font-bold md:text-2xl text-xl">
                32$
              </div>
            </div>

            <div className="flex justify-between Headings px-4 py-2 ">
              <div className="border-b-[1px] border-gray-200 pb-3 w-full">
                <h1 className="hover:text-textp transition-all cursor-pointer duration-100 font-bold md:text-2xl text-xl">
                  Alder Grilled Chinook Salmon
                </h1>
                <p className="text-base font-[400] text-[#4F4F4F] py-2">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-base text-[#828282]">560 CAL</p>
              </div>
              <div className="text-textp font-bold md:text-2xl text-xl">
                32$
              </div>
            </div>

            <div className="flex justify-between Headings px-4 py-2 ">
              <div className="border-b-[1px] border-gray-200 pb-3 w-full">
                <h1 className="hover:text-textp transition-all cursor-pointer duration-100 font-bold md:text-2xl text-xl">
                  Alder Grilled Chinook Salmon
                </h1>
                <p className="text-base font-[400] text-[#4F4F4F] py-2">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-base text-[#828282]">560 CAL</p>
              </div>
              <div className="text-textp font-bold md:text-2xl text-xl">
                32$
              </div>
            </div>

            <div className="flex justify-between Headings px-4 py-2 ">
              <div className="border-b-[1px] border-gray-200 pb-3 w-full">
                <h1 className="hover:text-textp transition-all cursor-pointer duration-100 font-bold md:text-2xl text-xl">
                  Alder Grilled Chinook Salmon
                </h1>
                <p className="text-base font-[400] text-[#4F4F4F] py-2">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-base text-[#828282]">560 CAL</p>
              </div>
              <div className="text-textp font-bold md:text-2xl text-xl">
                32$
              </div>
            </div>

            <div className="flex justify-between Headings px-4 py-2 ">
              <div className="border-b-[1px] border-gray-200 pb-3 w-full">
                <h1 className="hover:text-textp transition-all cursor-pointer duration-100 font-bold md:text-2xl text-xl">
                  Alder Grilled Chinook Salmon
                </h1>
                <p className="text-base font-[400] text-[#4F4F4F] py-2">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-base text-[#828282]">560 CAL</p>
              </div>
              <div className="text-textp font-bold md:text-2xl text-xl">
                32$
              </div>
            </div>

            <div className="flex justify-between Headings px-4 py-2 ">
              <div className="border-b-[1px] border-gray-200 pb-3 w-full">
                <h1 className="hover:text-textp transition-all cursor-pointer duration-100 font-bold md:text-2xl text-xl">
                  Alder Grilled Chinook Salmon
                </h1>
                <p className="text-base font-[400] text-[#4F4F4F] py-2">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-base text-[#828282]">560 CAL</p>
              </div>
              <div className="text-textp font-bold md:text-2xl text-xl">
                32$
              </div>
            </div>

            <div className="flex justify-between Headings px-4 py-2 ">
              <div className="border-b-[1px] border-gray-200 pb-3 w-full">
                <h1 className="hover:text-textp transition-all cursor-pointer duration-100 font-bold md:text-2xl text-xl">
                  Alder Grilled Chinook Salmon
                </h1>
                <p className="text-base font-[400] text-[#4F4F4F] py-2">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-base text-[#828282]">560 CAL</p>
              </div>
              <div className="text-textp font-bold md:text-2xl text-xl">
                32$
              </div>
            </div>

            <div className="flex justify-between Headings px-4 py-2 ">
              <div className="border-b-[1px] border-gray-200 pb-3 w-full">
                <h1 className="hover:text-textp transition-all cursor-pointer duration-100 font-bold md:text-2xl text-xl">
                  Alder Grilled Chinook Salmon
                </h1>
                <p className="text-base font-[400] text-[#4F4F4F] py-2">
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className="text-base text-[#828282]">560 CAL</p>
              </div>
              <div className="text-textp font-bold md:text-2xl text-xl">
                32$
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-10">
            <Button className="rounded-none hover:text-white bg-transparent text-textp border-[1px] py-6 px-6  border-textp">    <Link href={"/menu"}>View Menu</Link></Button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default About;
