import HeroLinks from "@/components/HeroLinks";
import Nav2 from "@/components/Nav2";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import ImageGallery from "@/components/ImageGallery";
import { client } from "@/sanity/lib/client";
import AddToCart from "@/components/AddToCart";

const getData = async (slug: string) => {
  const query = `*[_type == "food" && slug.current == "${slug}"][0]{
  _id,
    image,
    name,
    description,
    price,
    "slug": slug.current,
    category,
    available,
    tags[0],
    stripe,
    _id
} `;
  const data = await client.fetch(query);
  console.log(data);
  return data;
};

const ShopDetails = async ({
  params,
}: {
  params: { shoppingDetail: string };
}) => {
  const data = await getData(params.shoppingDetail);

  return (
    <div>
      <Nav2 />
      <HeroLinks heading="Shop Details" url1="Home" url2="Shop Details" />

      <div className="bg-white my-32">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <ImageGallery image={data.image} />

            <div className="lg:w-2/3 space-y-4">
              <span className="px-3 py-1 bg-green-200 text-green-800 rounded-md text-sm">
                {data.available ? "In Stock" : "Out of Stock"}
              </span>
              <h1 className="text-3xl font-bold text-gray-800">{data?.name}</h1>
              <p className="text-gray-600 border-b-[2px] pb-4 ">
                {data.description}
              </p>
              <div className="text-2xl font-bold text-gray-800">
                ${data?.price}.00
              </div>
              <div className="flex items-center gap-2 text-yellow-500">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>&#9733;</span>
                  ))}
                </div>
                <span className="text-gray-500">{"1"} Rating</span>
                <span className="text-gray-400">| {"5"} Reviews</span>
              </div>

              <div className="flex items-center gap-4">
                <Link href={"/checkout"}>
                  <AddToCart
                    key={data._id}
                    price_id={data.stripe}
                    btnName="CheckOut"
                    name={data.name}
                    price={data.price}
                    images={data.image[0]}
                    currency="USD"
                  />
                </Link>

                <AddToCart
                  key={data._id}
                  price_id={data.stripe}
                  btnName="Add to Cart"
                  name={data.name}
                  price={data.price}
                  images={data.image[0]}
                  currency="USD"
                />
              </div>

              <div className="text-gray-500 space-y-1">
                <p>
                  <span className="font-bold text-gray-800">
                    Category: {data.category}
                  </span>
                </p>
                <p>
                  <span className="font-bold text-gray-800">
                    Tag: {data.tags}
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-800">Share:</span>
                <div className="flex gap-3 text-gray-800">
                  <Link href="#">
                    <FaFacebook />
                  </Link>
                  <Link href="#">
                    <FaInstagram />
                  </Link>
                  <Link href="#">
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
