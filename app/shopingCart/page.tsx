"use client";

import Image from "next/image";
import Nav2 from "@/components/Nav2";
import HeroLinks from "@/components/HeroLinks";
import { useShoppingCart } from "use-shopping-cart";
import Link from "next/link";
import { toast } from "react-toastify";


const ShoppingCart = () => {
  const {
    cartCount,
    cartDetails,
    removeItem,
    incrementItem,
    decrementItem,
  } = useShoppingCart();


  const handleRemoveItem = (id: string, name: string) => {
    removeItem(id); // Remove item from cart
    toast.success(`${name} has been removed from your cart!`, {
      position: "bottom-right",
      autoClose: 3000,
      style: {
        backgroundColor: "black",
        color: "white",
        fontSize: "16px",
        borderRadius: "8px",
      },
    });
  };

  const handleIncreamentItem = (id:string, name: string) => {
    incrementItem(id);
    toast.success(`Quantity of ${name} increased!`, {
      position: "bottom-right",
      autoClose: 3000,
      style: {
        backgroundColor: "black",
        color: "white",
        fontSize: "16px",
        borderRadius: "8px",
      },
    });
  }

  const handleDecreamentItem = (id:string, name: string) => {
    decrementItem(id);
    toast.success(`Quantity of ${name} decreased!`, {
      position: "bottom-right",
      autoClose: 3000,
      style: {
        backgroundColor: "black",
        color: "white",
        fontSize: "16px",
        borderRadius: "8px",
      },
    });
  }



  

  const total = Object.values(cartDetails ?? {}).reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  console.log("cart count", cartCount);

  return (
    <div className="bg-white font-sans">
      <Nav2 />
      <HeroLinks heading="Shoping Cart" url1="Home" url2="Shopping Cart" />

      {cartCount === 0 ? (
        <h1 className="text-black font-bold flex justify-center lg:text-4xl md:text-3xl sm:text-2xl text-xl  py-16 ">
          You Dont Have Any Items
        </h1>
      ) : (
        <div>
          <>
            <div>
              <main className="py-8 px-4 sm:px-8 md:px-16 text-black lg:px-28">
                <table className="w-full border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-gray-100 text-left">
                      <th className="p-2 md:p-4 font-semibold">Product</th>
                      <th className="p-2 md:p-4 font-semibold">Price</th>
                      <th className="p-2 md:p-4 font-semibold">Quantity</th>
                      <th className="p-2 md:p-4 font-semibold">Total</th>
                      <th className="p-2 md:p-4 font-semibold">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.values(cartDetails ?? {}).map((entry, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-2 md:p-4 flex items-center">
                          <Image
                            src={entry.image as string}
                            alt={entry.name}
                            width={100}
                            height={100}
                            className="w-12 h-12 md:w-16 md:h-16 object-cover rounded mr-2 md:mr-4"
                          />
                          <span className="truncate">{entry.name}</span>
                        </td>
                        <td className="p-2 md:p-4">${entry.price}</td>
                        <td className="p-2 md:p-4">
                          <div className="flex items-center border border-gray-500 overflow-hidden w-[80px]">
                            <button
                              onClick={() => handleDecreamentItem(entry.id, entry.name)}
                              className="w-1/3 h-full text-lg text-gray-500 hover:bg-gray-200 flex justify-center items-center"
                            >
                              -
                            </button>
                            <div className="w-1/3 h-full flex justify-center border-l border-r border-gray-500  items-center text-md font-medium text-gray-700 border-x">
                              {entry.quantity}
                            </div>
                            <button
                              onClick={() => handleIncreamentItem(entry.id, entry.name)}
                              className="w-1/3 h-full text-lg  text-gray-800 hover:bg-gray-200 flex justify-center items-center"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="p-2 md:p-4">
                          ${entry.quantity * entry.price}.0
                        </td>
                        <td className="p-2 md:p-4 text-2xl text-red-500 cursor-pointer">
                          <span
                            className="p-2"
                            onClick={() => handleRemoveItem(entry.id,entry.name)}
                          >
                            &times;
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-8">
                  <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                    <h2 className="text-lg font-semibold mb-2">Coupon Code</h2>
                    <div className="flex items-center">
                      <input
                        type="text"
                        placeholder="Enter your code"
                        className="flex-grow border rounded-l px-4 py-2"
                      />
                      <button className="bg-orange-500 text-white px-6 py-2 rounded-r font-semibold">
                        Apply
                      </button>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/3">
                    <div className="bg-gray-100 p-4 md:p-6 rounded-lg">
                      <div className="flex justify-between mb-3 md:mb-4">
                        <span>Cart Subtotal</span>
                        <span>${total}</span>
                      </div>

                      <div className="flex justify-between mb-3 md:mb-4">
                        <span>Shipping Charges</span>
                        <span>$00.00</span>
                      </div>
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total Amount</span>
                        <span>${total}</span>
                      </div>
                        <Link href={"/checkout"}>
                      <button className="w-full bg-orange-500 text-white mt-4 py-3 rounded font-semibold">
                        Proceed to Checkout
                      </button>
                        </Link>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
