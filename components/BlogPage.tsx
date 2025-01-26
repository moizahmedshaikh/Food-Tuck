import Image from "next/image";
import Link from "next/link";
import { ShareIcon, HandThumbUpIcon, ChatBubbleLeftIcon  } from "@heroicons/react/24/outline";


const blog = [
  {
    id: 1,
    date: "10 February 2022",
    title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
    img: "/blog1.png",
  },
  {
    id: 2,
    date: "10 February 2022",
    title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A",
    img: "/blog2.png",
  },
  {
    id: 3,
    date: "10 February 2022",
    title: "Curabitur rutrum velit ac congue malesuada",
    img: "/blog3.png",
  },
];

function BlogPage() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto py-7">
      <div className="max-w-[1330px] text-center px-8">
        <h1 className="text-textp Headdesign lg:text-3xl text-2xl font-400 mt-16 mb-2">Blog Post</h1>
        <h2 className="lg:text-5xl md:text-4xl text-3xl Headings mb-12"> <span className="text-textp">La</span>test News & Blog</h2>
        <div className="flex flex-row">
          <div className=" flex lg:flex-row flex-col lg:gap-5 gap-12">
            {blog.map((item) => {
              return (
                <div key={item.id} className=" border-[0.5px] max-w-[424px] border-gray-400">
                  <div className="w-full">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={2000}
                      height={2000}
                    />
                  </div>
                  <div className="text-start py-6 px-8 ">
                    <h3 className="font-[400] text-base text-textp mb-4">10 February 2022</h3>
                    <p className="Headings text-2xl mb-7">{item.title}</p>
                    <div className="flex justify-between items-center">
                      <div><Link href={"/blog"} className="hover:text-textp text-base font-[400]">Learn More</Link></div>
                      <div className=" flex items-center gap-2 cursor-pointer">
                        <HandThumbUpIcon className="w-5 hover:text-textp"/><ChatBubbleLeftIcon className="w-5 hover:text-textp"/><ShareIcon className="w-5 hover:text-textp"/>
                        </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
