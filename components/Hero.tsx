import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-10 py-7">
      {/* <div className="bg-blue-500 w-full h-2 flex"/> */}
      <div className=" flex lg:flex-row flex-col justify-center gap-4  py-7 items-center ">
        <div className="lg:w-[600px] ">
          <h3 className="Headdesign text-center text-textp font-[400] lg:text-start text-[32px]">Its Quick & Amusing!</h3>
          <h1 className=" Headings text-center lg:text-start my-4 md:text-[60px] text-[45px] leading-[68px] tracking-wide font-[700]">
            <span className="text-textp ">Th</span>e Art of speed food Quality
          </h1>
          <p className=" text-center lg:text-start font-[400] text-[16px] pb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            repellendus ex soluta dolor, quaerat laboriosam ipsum dicta vitae,
          </p>
          <div className="flex lg:justify-start justify-center">
          <Button
            variant={"default"}
            className=" text-white md:w-[200px] md:h-[56px] w-[200px] h-[50px] my-5 text-[16px] rounded-full"
          >
            <Link href={"/menu"}>See Menu</Link>
            
          </Button>
          </div>
        </div>

        <div className=" lg:w-[877px]">
          <Image
            className="w-[629px] mx-auto "
            src={"/Hero/food.png"}
            width={2000}
            height={2000}
            alt={""}
          />

        </div>
      </div>
    </div>
  );
};

export default Hero;


