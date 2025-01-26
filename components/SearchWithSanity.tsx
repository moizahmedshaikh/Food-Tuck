"use client"; // Client Component for real-time interactivity

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";


type Product = {
  name: string,
  slug: string,
  image: string,
  price: number,
  category: string,
  originalPrice: number
}


export default function SearchWithSanity() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // Handle Search Button Click
  const handleSearch = async () => {
    if (query.length > 2) {
      // Fetch data from Sanity for both category and name

      const searchResults = await client.fetch(
        `*[_type == "food" && (category match "${query}" || name match "${query}")]{
          name,
          "slug":slug.current,
          "image": image[0].asset->url,
          price,
          originalPrice,
          category
        }`
      );
      setResults(searchResults);
      setShowResults(true);
    } else {
      alert("Please enter at least 3 characters to search.");
      setShowResults(false);
    }
  };

  // Handle Clear Search
  const handleClear = () => {
    setQuery("");
    setResults([]);
    setShowResults(false);
  };

  return (
    <div className="relative z-[10] flex-wrap mx-auto shadow-md rounded max-w-2xl p-4">
      {/* Search Input and Buttons */}
      <div className="flex items-center gap-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className=" md:w-80 sm:w-40 w-32 outline-none  bg-black rounded-3xl md:px-6 px-2 py-2 border-[1px] border-[#FF9F0D]"
          />

          <IoSearch
            onClick={handleSearch}
            className="absolute top-2 right-4 text-2xl cursor-pointer"
          />
        </div>
        {showResults && (
          <button
            onClick={handleClear}
            className="bg-[#0D0D0D] text-gray-100 px-3 py-2 rounded shadow hover:bg-gray-800 transition"
          >
            ✕
          </button>
        )}
      </div>

      {/* Search Results */}
      {showResults && (
        <div className="mt-4 bg-[#0D0D0D] absolute z-10 w-full max-h-80 overflow-y-auto rounded shadow-lg p-4">
          <h2 className="text-lg font-bold mb-4">Search Results:</h2>
          {results.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {results.map((product: Product) => (
                <Link href={`/shop/${product.slug}`} key={product.name}>
                  <div className="flex gap-4 items-center bg-[#0D0D0D] border rounded shadow p-3 hover:bg-gray-800 transition">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                      height={80}
                      width={80}
                    />
                    <div>
                      <h3 className="text-[12px] font-semibold text-gray-200">
                        {product.name}
                      </h3>
                      <p className="text-xs py-1 text-slate-200">
                        Category:{" "}
                        <span className=" ml-3">{product.category}</span>
                      </p>

                      <p className="text-sm pt-2 ">
                        {product.originalPrice > 0 ? (
                          <span className=" text-gray-500 font-bold">
                            {product.price -
                              (product.price * product.originalPrice) /
                                100}
                            <span className="text-red-700 ml-9 font-semibold line-through">
                              {product.price}
                            </span>
                          </span>
                        ) : (
                          <p>${product.price}</p>
                        )}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No products found for {query}.</p>
          )}
        </div>
      )}
    </div>
  );
}
