"use client"
import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";

const StripeSuccess = () => {

  const {clearCart} = useShoppingCart()
  
  useEffect(()=>{
    clearCart()
  },[])

  return (
    <div className="h-screen">
      
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <CheckCheck className="text-green-600 w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h3 className="text-base md:text-2xl text-gray-900 font-semibold text-center">
            Order Submit Done!
          </h3>
          <p className="text-gray-600 my-2">Thank you for you purchase we hope you enjoy it</p>
          <p className="text-gray-600">Great Day!</p>

          <Button asChild className="mt-6">
            <Link href={"/shippment"}>Go To Tracking</Link>
          </Button>

        </div>
      </div>
    </div>
  );
};

export default StripeSuccess;