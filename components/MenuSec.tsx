import React from "react";
import Image from "next/image";
import MenuCard from "./MenuCard";
import { MenuData } from "@/constant/MenuData";




const MenuSec = () => {
  return (
    <div className="container mx-auto pb-40 ">
      <div className="space-y-4 w-fit mx-auto text-center">
        <p className="text-textp text-2xl Headdesign">Choose & Pick</p>
        <h2 className="text-4xl md:text-5xl font-bold Headings">
          <span className="text-textp">Fr</span>om Our Menu
        </h2>
        <div className="w-fit mx-auto">
        <div className='bg-accent h-[5px] w-[70px] mt-10'></div>
        </div>
      </div>

      <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 w-fit  mx-auto">
        <li className=" text-textp p-1">Breakfast</li>
        <li id="icon" className="hover:cursor-pointer">Dinner</li>
        <li id="icon" className="hover:cursor-pointer">Desert</li>
        <li id="icon" className="hover:cursor-pointer">Drinks</li>
        <li id="icon" className="hover:cursor-pointer">Snack</li>
        <li id="icon" className="hover:cursor-pointer">Soup</li>
      </ul>

      <div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] h-auto"
            src={"/MenuCard/img1.png"}
            width={500}
            height={500}
            alt={"dish"}
          />
        </div>

        <div className="grid w-fit mx-auto sm:grid-cols-2 gap-4 ">
          {MenuData.map((items, index) => (
            <MenuCard
             key={index} 
             img={items.img}
             title={items.title}
             desc={items.desc}
             price={items.price}
             />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSec;