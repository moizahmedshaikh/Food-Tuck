"use client";

import HeroLinks from "@/components/HeroLinks";
import Nav2 from "@/components/Nav2";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div>
      <Nav2 />
      {/* Hero Section */}
      <HeroLinks heading="Payment Error" url1="Home" url2="Error" />
      <div className="flex items-center justify-center min-h-screen bg-red-50 p-2">
        <div className="text-center bg-white shadow-lg rounded-lg p-6 max-w-lg">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            Payment Failed
          </h1>
          <p className="text-gray-700 mb-6">
            Unfortunately, your payment was not successful. Please try again or
            contact support if the issue persists.
          </p>
          <Link href={"/checkout"}>
            <button className="px-6 py-3 text-white bg-red-500 rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300">
              Retry Payment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
