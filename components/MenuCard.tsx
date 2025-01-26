import React from "react";
import Image from "next/image";

interface propsType {
  img: string;
  title: string;
  desc: string;
  price: string;
}

const MenuCard: React.FC<propsType> = ({ img, title, desc, price }) => {
  return (
    <div className="flex gap-2">
      <Image
        className="w-[80px] h-[80px]"
        src={img}
        width={80}
        height={80}
        alt={"dish"}
      />

      <div className="space-y-2">
        <div>
          <h2 className="text-[20px] font-bold">{title}</h2>
          <p className="text-[14px] font-[400]">{desc}</p>
        </div>
        <p className="text-lg font-bold text-textp">{price}</p>
      </div>
    </div>
  );
};

export default MenuCard;