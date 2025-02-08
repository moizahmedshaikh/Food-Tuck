"use client";
import HeroLinks from "@/components/HeroLinks";
import Nav2 from "@/components/Nav2";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { client } from "@/sanity/lib/client";
import Image from "next/image";


interface ImageAsset {
  url: string;
}

interface ImageType {
  asset: ImageAsset;
}


interface OrderItem {
  name: string;
  quantity: number;
  price: number;
  food?: { _id: string };
  image?: ImageType;
}

interface Customer {
  name?: string;
  email?: string;
}

interface OrderType {
  _id: string;
  orderId: string;
  total_price: number;
  order_date: string;
  status: string;
  customer?: Customer;
  items: OrderItem[];
}

const Orders = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<OrderType | null>(null);

  const { user } = useUser();

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user?.id) return;

      try {
        const query = `*[_type == "order" && clerkuserId == $userId]{
          _id,
          orderId,
          status,
          order_date,
          total_price,
          clerkuserId,
          customer->{name, email},
          items[]{
            name,
            quantity,
            price,
            food->{_id},
            image{
              asset->{url}
            }
          }
        }`;

        const fetchedOrders: OrderType[] = await client.fetch(query, {
          userId: user.id,
        });

        setOrders(fetchedOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [user]);

  return (
    <div>
      <Nav2 />
      <HeroLinks heading="Our Orders" url1="Home" url2="Orders" />
      <div className="container mx-auto p-8 text-[#333333]">
        <div className="overflow-x-auto">
          <table className="w-full mx-auto border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2">Order ID</th>
                <th className="px-4 py-2">Customer</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Total</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Order Date</th>
                <th className="px-4 py-2">Details</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-t border-gray-300 hover:bg-gray-200 cursor-pointer"
                    onClick={() => setSelectedOrder(order)}
                  >
                    <td className="px-4 py-2">{order.orderId}</td>
                    <td className="px-4 py-2">
                      {order.customer?.name || "N/A"}
                    </td>
                    <td className="px-4 py-2">
                      {order.customer?.email || "N/A"}
                    </td>
                    <td className="px-4 py-2">${order.total_price}</td>
                    <td className="px-4 py-2">{order.status}</td>
                    <td className="px-4 py-2">
                      {new Date(order.order_date).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2 text-blue-500">View</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="text-center py-4">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {selectedOrder && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
              <button
                className="absolute border-4 px-2 py-1 top-2 right-4 text-lg text-gray-700 hover:text-black"
                onClick={() => setSelectedOrder(null)}
              >
                ✖
              </button>
              <h3 className="text-xl font-bold mb-5">Order Details</h3>
              <div className="space-y-3">
                <p>
                  <strong>Order ID:</strong> {selectedOrder.orderId}
                </p>
                <p>
                  <strong>Customer:</strong>{" "}
                  {selectedOrder.customer?.name || "N/A"}
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  {selectedOrder.customer?.email || "N/A"}
                </p>
                <p>
                  <strong>Status:</strong> {selectedOrder.status}
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-lg my-2">Products:</h4>
                  {selectedOrder.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center mt-2 border p-4 rounded-md shadow-md"
                    >
                      <div>
                        {item.image?.asset?.url ? (
                          <Image
                            src={item.image.asset.url}
                            alt={item.name}
                            width={50}
                            height={50}
                            className="rounded-md"
                          />
                        ) : (
                          <div className="w-[50px] h-[50px] bg-gray-200 flex items-center justify-center">
                            ❌
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Price: ${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
