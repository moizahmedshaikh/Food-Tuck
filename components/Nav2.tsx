
"use client";

import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { ShoppingBagIcon, UserIcon, Bars3Icon } from "@heroicons/react/24/outline";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import { UserButton, useUser } from "@clerk/nextjs";

const Nav2 = () => {
  const { cartCount } = useShoppingCart();
  const { isSignedIn } = useUser();
  // const [open, setOpen] = useState(false);

  return (
    <nav className="max-w-full bg-[#0D0D0D] mx-auto py-5 md:px-7 px-4">
      <div className="pb-3"></div>

      <div className="flex justify-between max-w-[1320px] mx-auto">
        <h1 className="font-[700] hidden lg:block text-center text-[34px] leading-[34px]">
          <span className="text-textp">Food</span>tuck
        </h1>

        <div className="flex justify-between items-center">
          <ul className="lg:flex items-center gap-x-7 hidden">
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/menu"}>Menu</Link></li>
            <li><Link href={"/blog"}>Blog</Link></li>
            <li><Link href={"/FAQ"}>Faq</Link></li>
            <li className="flex items-center"><Link href={"/about"}>About</Link><IoIosArrowDown /></li>
            <li><Link href={"/shop"}>Shop</Link></li>
            <li><Link href={"/contact"}>Contact</Link></li>
          </ul>
          <h1 className="font-[700] lg:hidden flex text-center text-[27px] leading-[34px]">
            <span className="text-textp">Food</span>tuck
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex gap-2 items-center">
            <IoSearch size={25} className="text-white w-6 lg:block hidden" />

            {/* Clerk User Icon (Sign in / Profile) */}

            <div className="cursor-pointer pt-1">
              {isSignedIn ? <UserButton afterSignOutUrl="/" /> : <Link href="/signin"><UserIcon className="text-white w-6" /></Link>}
            </div>

            {/* Shopping Cart Icon */}
            <Link href={"/shopingCart"}>
              <div className="relative lg:block hidden">
                <ShoppingBagIcon className="text-white w-6" />
                {cartCount ? (
                  <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                    {cartCount}
                  </span>
                ) : null}
              </div>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger>
              <Bars3Icon className="text-white w-6 ml-1 lg:hidden block" />
            </SheetTrigger>
            <SheetContent>
              <div className="mt-20">
                <div className="flex justify-center items-center gap-5 mb-10">
                  {/* Mobile Shopping Cart */}
                  <Link href={"/shopingCart"}>
                    <div className="relative">
                      <ShoppingBagIcon className="w-8" />
                      {cartCount ? (
                        <span className="absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                          {cartCount}
                        </span>
                      ) : null}
                    </div>
                  </Link>

                  {/* Mobile User Authentication */}
                  {/* <div className="cursor-pointer">
                    {isSignedIn ?  <UserButton afterSignOutUrl="/" /> : <Link href="/sign-in"><UserIcon className="text-black w-9" /></Link>}
                  </div> */}

                  {/* Search Bar */}
                  <div className="relative">
                    <input type="text" placeholder="Search.." className="w-full outline-none rounded-3xl md:px-6 px-2 py-2 border-[1px] border-black" />
                    <IoSearch className="absolute top-2 right-4 text-2xl" />
                  </div>
                </div>

                {/* Mobile Navigation Links */}
                <ul className="flex flex-col text-xl gap-7">
                  <li><Link href={"/"}>Home</Link></li>
                  <li><Link href={"/menu"}>Menu</Link></li>
                  <li><Link href={"/blog"}>Blog</Link></li>
                  <li><Link href={"/FAQ"}>Faq</Link></li>
                  <li><Link href={"/about"}>About</Link></li>
                  <li><Link href={"/shop"}>Shop</Link></li>
                  <li><Link href={"/contact"}>Contact</Link></li>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Nav2;
