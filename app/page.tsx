import AbountUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import MenuSec from "@/components/MenuSec";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Review from "@/components/Review";
import FoodSection from "@/components/FoodSection";
import BlogPage from "@/components/BlogPage";

export default function Home() {
  return (
    <div className="bg-[#0D0D0D]">
      <Navbar />
      <Hero />
      <AbountUs />
      <FoodSection />

      <MenuSec />

      <section className=" px-4 md:px-[135px] max-w-[1320px] mx-auto py-[50px]">
        {/* Heading Section */}
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-[24px] Headdesign md:text-[32px] font-normal text-[#FF9F0D] font-greatVibes whitespace-nowrap">
            Chefs
          </h1>
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-white whitespace-nowrap md:whitespace-normal mt-2">
            <span className="text-[#FF9F0D] ">Me</span>et Our Chef
          </h2>
        </div>

        {/* Images Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-[50px] justify-items-center">
          {/* Chef 1 */}
          <div className="flex flex-col items-center">
            <Image
              src={"/chef1.png"}
              alt="Chef 1"
              className="w-[200px] sm:w-[250px] md:w-[280px] lg:w-[305px] md:h-[280px] rounded-lg cursor-pointer transition-transform hover:scale-105"
              height={1000}
              width={1000}
            />
          </div>

          {/* Chef 2 */}
          <div className="flex flex-col items-center">
            <Image
              src={"/chef2.png"}
              alt="Chef 2"
              className="w-[200px] sm:w-[250px] md:w-[280px] lg:w-[305px] md:h-[280px] rounded-lg cursor-pointer transition-transform hover:scale-105"
              height={1000}
              width={1000}
            />
          </div>

          {/* Chef 3 */}
          <div className="flex flex-col items-center">
            <Image
              src={"/chef3.png"}
              alt="Chef 3"
              className="w-[200px] sm:w-[250px] md:w-[280px] lg:w-[305px] md:h-[280px] rounded-lg cursor-pointer transition-transform hover:scale-105"
              height={1000}
              width={1000}
            />
          </div>

          {/* Chef 4 */}
          <div className="flex flex-col items-center">
            <Image
              src={"/chef4.png"}
              alt="Chef 4"
              className="w-[200px] sm:w-[250px] md:w-[280px] lg:w-[305px] md:h-[280px] rounded-lg cursor-pointer transition-transform hover:scale-105"
              height={1000}
              width={1000}
            />
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <Button className="bg-transparent border-2 font-[400] rounded-full px-8 py-3 border-textp">
            <Link href="/ourChefs">See More</Link>
          </Button>
        </div>
      </section>

      <Review />

      <section>
        <div className="lg:h-[558px] md:h-[400px] h-[270px] bg-[url('/bg3.png')] bg-cover bg-center">
          <div className="flex flex-col items-end lg:px-60 lg:py-32 md:px-32 md:py-20 sm:px-20 sm:py-10 px-10 py-5">
            <h1 className="Headdesign text-textp lg:text-4xl md:text-3xl text-xl">
              Restaurant Active Process
            </h1>
            <h2 className="text-end lg:text-5xl md:text-4xl sm:text-2xl text-xl lg:py-8 md:py-6 py-2 Headings">
              <span className="text-textp">We</span> Document Every Food <br />
              Bean Process untile it is saved
            </h2>
            <p className="text-end md:text-base text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque <br /> bibendum non dui volutpat fringilla
              bibendum. Urna, elit augue urna,{" "}
            </p>
          </div>
        </div>

        {/* <div className="w-full h-[558px]">
          <Image src={"/bg3.png"} width={1000} height={1000} />
        </div> */}
        <BlogPage/>
      </section>
    </div>
  );
}
