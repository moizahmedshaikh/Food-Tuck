"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { urlFor } from "@/sanity/lib/image";
import { toast } from "react-toastify";

interface ProductCartProps {
  name: string;
  price: number;
  images: string;
  price_id: string;
  btnName: string;
  currency:string
}

const AddToCart = ({
  currency,
  name,
  price,
  images,
  btnName,
  price_id,
 
}: ProductCartProps) => {
  const { addItem } = useShoppingCart();

  const product = {
    name: name,
    price: price,
    image: urlFor(images).url(),
    price_id: price_id,
    currency: currency,
    id:price_id
  };

  return (
    <Button
      onClick={() => {
        addItem(product);
        {
          toast.success(`${product.name} has been added to your cart!`, {
            position: "bottom-right",
            autoClose: 3000, // Duration of the toast
            style: {
              backgroundColor: "black",
              color: "white",
              fontSize: "16px",
              borderRadius: "8px",
            },
          });
        }
      }}
    >
      {btnName}
    </Button>
  );
};

export default AddToCart;
