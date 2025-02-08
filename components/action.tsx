import { client } from "@/sanity/lib/client";
import { formData } from "@/type";
import { CartEntry } from "use-shopping-cart/core";

const createCustomer = async (customerInfo: formData) => {
  try {
    const customerObject = {
      _type: "customer",
      name: customerInfo.name,
      email: customerInfo.email,
      phone: customerInfo.phone,
      address: customerInfo.address,
      city: customerInfo.city,
    };

    const response = await client.create(customerObject);
    console.log("✅ Customer created in Sanity:", response);

    return response;
  } catch (error) {
    console.error("❌ Error creating customer in Sanity:", error);
  }
};

const createOrder = async (
  totalPrice: number | undefined,
  cartData: CartEntry[],
  customerId: string,
  clerkuserId: string | undefined
) => {
  try {
    const orderItems = await Promise.all(
      Object.values(cartData ?? {}).map(async (item) => {
        let imageAsset;

        // ✅ Image URL ko fetch karke Sanity me upload karo
        if (typeof item.image === "string") {
          const response = await fetch(item.image);
          const blob = await response.blob();
          imageAsset = await client.assets.upload("image", blob);
        }

        return {
          _type: "foodItem", // ✅ Yahan "food" nahi, balki "foodItem" ka type use karein
          _key:item._id,
          food: {
            _type: "reference",
            _ref: item._id, // ✅ Food ka reference store karein
          },
          
          name: item.name,
          price: item.price,
          quantity: item.quantity ?? 1, // ✅ Default quantity set karein
          image: imageAsset
            ? {
                _type: "image",
                asset: {
                  _type: "reference",
                  _ref: imageAsset._id,
                },
              }
            : null,
        };
      })
    );

    // ✅ Final order object create karein
    const orderObject = {
      _type: "order",
      orderId: customerId,
      customer: {
        _type: "reference",
        _ref: customerId,
      },
      items: orderItems, // ✅ Yahan ab sahi structure me items jayenge
      order_date: new Date().toISOString(),
      total_price: totalPrice,
      status: "pending",
      clerkuserId: clerkuserId,
    };

    // ✅ Sanity me order create karein
    const response = await client.create(orderObject);
    console.log("✅ Order created in Sanity:", response);
  } catch (error) {
    console.error("❌ Error creating order in Sanity:", error);
  }
};

const Checkout = async (
  cartData: CartEntry[],
  formData: formData,
  totalPrice: number | undefined,
  clerkuserId: string | undefined
) => {
  try {
    const customer = await createCustomer(formData);
    if (customer?._id) {
      await createOrder(totalPrice, cartData, customer._id, clerkuserId);
      console.log("✅ Checkout completed successfully!");
    }
  } catch (error) {
    console.error("❌ Error during checkout process:", error);
  }
};

export default Checkout;
