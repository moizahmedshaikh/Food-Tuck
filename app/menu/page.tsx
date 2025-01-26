import HeroLinks from '@/components/HeroLinks';
import Nav2 from '@/components/Nav2';
import { menuItems } from '@/constant/Dessert';
import { DrinksItem } from '@/constant/Drink';
import { MainCoursItem } from '@/constant/MainCourse';
import { Coffee } from 'lucide-react';
import Image from 'next/image';


const Menu = () => {
  return (
    <section className="w-full">
      <Nav2/>
      {/* Hero Section */}
      <HeroLinks heading='Our Menu' url1='Home' url2='Menu'/>


      {/* Starter Menu */}
      <div className="container mx-auto py-10 px-8 sm:py-16 flex flex-col lg:flex-row gap-8 lg:gap-12">
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
          <div className="flex flex-col gap-2 mb-6">
            <Coffee className="text-[#FF9F0D] mr-2" size={24} />
            <h2 className="md:text-5xl text-3xl font-bold text-black">Starter Menu</h2>
          </div>
          <div className="space-y-8">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3
                    className={`text-lg sm:text-xl font-bold ${item.highlight ? "text-[#FF9F0D]" : "text-gray-800"}`}
                  >
                    {item.name}
                  </h3>
                  <span className="text-lg sm:text-xl font-bold text-[#FF9F0D]">
                    {item.price}$
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-2">{item.description}</p>
                <p className="text-xs sm:text-sm text-gray-500">{item.calories} CAL</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Course */}
      <div className="container mx-auto py-10 px-8 sm:py-16 flex flex-col lg:flex-row-reverse gap-8 lg:gap-12">
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
        <div className="flex flex-col gap-2 mb-6">
            <Coffee className="text-[#FF9F0D] mr-2" size={24} />
            <h2 className="md:text-5xl text-3xl font-bold text-black">Starter Menu</h2>
          </div>
          <div className="space-y-8">
            {MainCoursItem.map((item, index) => (
              <div key={index} className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3
                    className={`text-lg sm:text-xl font-bold ${item.highlight ? "text-[#FF9F0D]" : "text-gray-800"}`}
                  >
                    {item.name}
                  </h3>
                  <span className="text-lg sm:text-xl font-bold text-[#FF9F0D]">
                    {item.price}$
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-2">{item.description}</p>
                <p className="text-xs sm:text-sm text-gray-500">{item.calories} CAL</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dessert */}
      <div className="container mx-auto py-10 px-8 sm:py-16 flex flex-col lg:flex-row gap-8 lg:gap-12">
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
        <div className="flex flex-col gap-2 mb-6">
            <Coffee className="text-[#FF9F0D] mr-2" size={24} />
            <h2 className="md:text-5xl text-3xl font-bold text-black">Starter Menu</h2>
          </div>
          <div className="space-y-8">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">{item.name}</h3>
                  <span className="text-lg sm:text-xl font-bold text-[#FF9F0D]">{item.price}$</span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-2">{item.description}</p>
                <p className="text-xs sm:text-sm text-gray-500">{item.calories} CAL</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Drinks */}
      <div className="container mx-auto py-10 px-8 sm:py-16 flex flex-col lg:flex-row-reverse gap-8 lg:gap-12">
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
        <div className="flex flex-col gap-2 mb-6">
            <Coffee className="text-[#FF9F0D] mr-2" size={24} />
            <h2 className="md:text-5xl text-3xl font-bold text-black">Starter Menu</h2>
          </div>
          <div className="space-y-8">
            {DrinksItem.map((item, index) => (
              <div key={index} className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3
                    className={`text-lg sm:text-xl font-bold ${item.highlight ? "text-[#FF9F0D]" : "text-gray-800"}`}
                  >
                    {item.name}
                  </h3>
                  <span className="text-lg sm:text-xl font-bold text-[#FF9F0D]">
                    {item.price}$
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-2">{item.description}</p>
                <p className="text-xs sm:text-sm text-gray-500">{item.calories} CAL</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
