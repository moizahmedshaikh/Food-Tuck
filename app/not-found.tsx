import HeroLinks from "@/components/HeroLinks";
import Nav2 from "@/components/Nav2";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Notfound = () => {
  return (
    <div>
      <Nav2 />
      <HeroLinks heading="404 Not Found" url1="Home" url2="404" />
      <div className="w-full h-full flex justify-center text-[#333333]">
        <div className="py-28 flex items-center flex-col justify-center gap-3">
          <h1 className="text-center text-textp lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-bold">404</h1>
          <p className="text-xl font-bold">Oops! Look likes something going wrong</p>
          <p className="text-center text-sm">Page Cannot be found! well have it figured out in no time. <br />
          Menwhile, cheek out these fresh ideas:</p>
          <Link href={"/"}>
            <Button className="rounded">
                Go to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
