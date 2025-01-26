"use client";


import Image from "next/image";
import { useState } from "react";
import { urlFor } from "../sanity/lib/image";

interface imgAppProps {
  image: string[];
}

const ImageGallery = ({ image }: imgAppProps) => {
  const [bigImage, setBigImage] = useState(image[0]);

  const handleSmallImageClick = (image: string) => {
    setBigImage(image);
  };

  return (
    <div className="grid lg:grid-cols-5 gap-4">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {image.map((img: string, idx: number) => (
          <div key={idx} className="overflow-hidden rounded-lg  bg-gray-100">
            <Image
              onClick={() => {
                handleSmallImageClick(img);
              }}
              src={urlFor(img).url()}
              alt="detailed picture"
              width={1000}
              height={1000}
              className="object-cover object-center hover:opacity-75 cursor-pointer"
            />
          </div>
        ))}
      </div>

      <div className=" overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt="detailed picture"
          height={1000}
          width={1000}
          className="object-cover object-center w-full h-full"
        />
        
      </div>
    </div>
  );
};

export default ImageGallery;
