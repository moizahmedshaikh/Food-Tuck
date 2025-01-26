import { menuItems } from "@/constant/Dessert";
import { DrinksItem } from "@/constant/Drink";
import { MainCoursItem } from "@/constant/MainCourse";
import { Coffee } from "lucide-react";
import Image from "next/image";
interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return <h1>{text}</h1>;
};

const Menu = () => {
  return (
    <section className="w-full mx-auto mt-[80px] sm:mt-[120px] px-4 sm:px-6 lg:px-8">
      {/* Starter Menu */}

      <div className="container mx-auto py-10 sm:py-16 flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-[448px] mb-6 lg:mb-0">
          <Image
            src="/menu.png"
            alt="Starter dish"
            width={448}
            height={626}
            className="w-full h-auto max-w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Menu Content */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center mb-6">
            <Coffee className="text-[#FF9F0D] mr-2" size={24} />
            <Heading text={"Starter Menu"}></Heading>
          </div>
          <div className="space-y-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-dashed border-gray-300 pb-6"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3
                    className={`text-lg sm:text-xl font-bold ${
                      item.highlight ? "text-[#FF9F0D]" : "text-gray-800"
                    }`}
                  >
                    {item.name}
                  </h3>
                  <span className="text-lg sm:text-xl font-bold text-[#FF9F0D]">
                    {item.price}$
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-2">
                  {item.description}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {item.calories} CAL
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Course */}
      <div className="container mx-auto py-10 sm:py-16 flex flex-col lg:flex-row-reverse gap-8 lg:gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-[448px] mb-6 lg:mb-0">
          <Image
            src="/mainCourse.png"
            alt="Main Course Dish"
            width={448}
            height={626}
            className="w-full h-auto max-w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Menu Content */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center mb-6">
            <Coffee className="text-[#FF9F0D] mr-2" size={24} />
            <Heading text="Main Course" />
          </div>
          <div className="space-y-8">
            {MainCoursItem.map((item, index) => (
              <div
                key={index}
                className="border-b border-dashed border-gray-300 pb-6"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3
                    className={`text-lg sm:text-xl font-bold ${
                      item.highlight ? "text-[#FF9F0D]" : "text-gray-800"
                    }`}
                  >
                    {item.name}
                  </h3>
                  <span className="text-lg sm:text-xl font-bold text-[#FF9F0D]">
                    {item.price}$
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-2">
                  {item.description}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {item.calories} CAL
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dessert */}
      <div className="container mx-auto py-10 sm:py-16 flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-[448px] mb-6 lg:mb-0">
          <Image
            src="/dessert.png"
            alt="Dessert dish"
            width={448}
            height={626}
            className="w-full h-auto max-w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Menu Content */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center mb-6">
            <Coffee className="text-[#FF9F0D] mr-2" size={24} />
            <Heading text="Dessert" />
          </div>
          <div className="space-y-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-dashed border-gray-300 pb-6"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                    {item.name}
                  </h3>
                  <span className="text-lg sm:text-xl font-bold text-[#FF9F0D]">
                    {item.price}$
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-2">
                  {item.description}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {item.calories} CAL
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Drinks */}
      <div className="container mx-auto py-10 sm:py-16 flex flex-col lg:flex-row-reverse gap-8 lg:gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-[448px] mb-6 lg:mb-0">
          <Image
            src="/drinks.png"
            alt="Drinks image"
            width={448}
            height={626}
            className="w-full h-auto max-w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Menu Content */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center mb-6">
            <Coffee className="text-[#FF9F0D] mr-2" size={24} />
            <Heading text="Drinks" />
          </div>
          <div className="space-y-8">
            {DrinksItem.map((item, index) => (
              <div
                key={index}
                className="border-b border-dashed border-gray-300 pb-6"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3
                    className={`text-lg sm:text-xl font-bold ${
                      item.highlight ? "text-[#FF9F0D]" : "text-gray-800"
                    }`}
                  >
                    {item.name}
                  </h3>
                  <span className="text-lg sm:text-xl font-bold text-[#FF9F0D]">
                    {item.price}$
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-2">
                  {item.description}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {item.calories} CAL
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
