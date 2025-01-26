"use client";

import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";

import { Bars3Icon } from "@heroicons/react/24/outline";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";

const Nav2 = () => {
  const { cartCount } = useShoppingCart();
  return (
    <nav className="max-w-full bg-[#0D0D0D] mx-auto py-5 md:px-7 px-4">
      <div className="pb-3">
        {/* <h1 className="font-[700] hidden lg:block text-center text-[34px] leading-[34px]">
          <span className="text-textp">Food</span>tuck
        </h1> */}
      </div>

      <div className="flex justify-between max-w-[1320px] mx-auto">
        <h1 className="font-[700] hidden lg:block text-center text-[34px] leading-[34px]">
          <span className="text-textp">Food</span>tuck
        </h1>

        <div className="flex justify-between  items-center">
          <ul className="lg:flex items-center gap-x-7  hidden">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/menu"}>Menu</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link href={"/FAQ"}>Faq</Link>
            </li>
            <li className="flex items-center">
              <Link href={"/about"}>About</Link>
              <IoIosArrowDown />
            </li>
            <li>
              <Link href={"/shop"}>Shop</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
          <h1 className="font-[700] lg:hidden flex text-center text-[27px] leading-[34px]">
            <span className="text-textp">Food</span>tuck
          </h1>
        </div>

        <div className=" flex items-center gap-2 ">
          <div className="flex gap-3 items-center">
            <IoSearch size={25} className=" text-white w-6 lg:block hidden" />
            <Link href={"/signin"}>
              <UserIcon className=" text-white w-6 lg:block hidden" />
            </Link>
            <Link href={"/shopingCart"}>
              <div className="relative lg:block hidden">
                <ShoppingBagIcon className="text-white w-6" />
                {cartCount ? (
                  <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                    {cartCount}
                  </span>
                ) : (
                  ""
                )}
              </div>
            </Link>
          </div>
          <div>
            <Sheet>
              <SheetTrigger>
                <div>
                  <Bars3Icon className="text-white w-6 ml-1 lg:hidden block" />
                </div>
              </SheetTrigger>
              <SheetContent>
                <div className="mt-20">
                  <div className="flex justify-center items-center gap-5 mb-10">
                    <Link href={"/shopingCart"}>
                      <div className="relative">
                        <ShoppingBagIcon className="w-8" />
                        {cartCount ? (
                          <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                            {cartCount}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </Link>
                    <Link href={"/signin"}>
                      <UserIcon className=" text-black w-9 " />
                    </Link>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search.."
                        className=" w-full outline-none rounded-3xl md:px-6 px-2 py-2 border-[1px] border-black"
                      />
                      <IoSearch className="absolute top-2 right-4 text-2xl" />
                    </div>
                  </div>
                  <ul className="flex flex-col text-xl gap-7">
                    <li>
                      <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link href={"/menu"}>Menu</Link>
                    </li>
                    <li>
                      <Link href={"/blog"}>Blog</Link>
                    </li>
                    <li>
                      <Link href={"/FAQ"}>Faq</Link>
                    </li>
                    <li className="flex items-center">
                      <Link href={"/about"}>About</Link>
                      
                    </li>
                    <li>
                      <Link href={"/shop"}>Shop</Link>
                    </li>
                    <li>
                      <Link href={"/contact"}>Contact</Link>
                    </li>
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav2;

// 'use client';
// // resopnsive
// import { useState } from 'react'
// import Link from "next/link"
// import Image from "next/image"
// import { Menu, X } from 'lucide-react'

// export default function Nav2() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const menuItems = [
//     { name: "Home", href: "/", active: true },
//     { name: "Menu", href: "/menu"},
//     { name: "Blog", href: "/blog" },
//     { name: "Pages", href: "/pages" },
//     { name: "About", href: "/about" },
//     { name: "Shop", href: "/shop" },
//     { name: "Contact", href: "/contact" },
//   ]

//   return (
//     <header className="max-w-[1920px] bg-[#0D0D0D] fixed top-0 px-4 sm:px-6 lg:px-[15.62%] py-4 lg:py-7">
//       <nav className="flex items-center justify-between">
//         {/* Logo */}
//         <Link
//           href="/"
//           className="text-[20px] sm:text-[24px] leading-[32px] font-bold text-white font-helvetica z-10"
//         >
//           Food<span className="text-[#FF9F0D]">tuck</span>
//         </Link>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="lg:hidden text-white z-10"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         {/* Navigation Links */}
//         <ul className={`
//           fixed inset-0 bg-[#0D0D0D] flex flex-col items-center justify-center gap-6
//           lg:static lg:flex-row lg:bg-transparent lg:gap-[32px]
//           transition-all duration-300 ease-in-out
//           ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible lg:opacity-100 lg:visible'}
//         `}>
//           {menuItems.map((item) => (
//             <li key={item.name}>
//               <Link
//                 href={item.href}
//                 className={`text-[16px] leading-6 ${
//                   item.active ? "text-[#FF9F0D] font-bold" : "text-white"
//                 } font-inter hover:text-[#FF9F0D] transition-colors`}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Icons */}
//         <div className="hidden lg:flex items-center gap-4">
//           <Link href="/" className="text-white hover:text-[#FF9F0D] transition-colors">
//             <Image src="/search.png" alt="search" width={24} height={24} />
//           </Link>
//           <Link href="/" className="text-white hover:text-[#FF9F0D] transition-colors">
//             <Image src="/user.png" alt="user" width={24} height={24} />
//           </Link>
//           <Link href="/" className="text-white hover:text-[#FF9F0D] transition-colors">
//             <Image src="/tote.png" alt="cart" width={24} height={24} />
//           </Link>
//         </div>
//       </nav>
//     </header>
//   )
// }
