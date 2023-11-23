"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript, TbBrandTailwind } from "react-icons/tb"
import { SiNextdotjs } from "react-icons/si"
const testimonials = [
  {
    name: "React",
    Icon: FaReact,

    description: "React is a JavaScript library for building user interfaces, focusing on component-based architecture and efficient rendering to create dynamic and interactive web applications.",
  },
  {
    name: "Next",
    Icon: SiNextdotjs,

    description: "Next.js is a React framework that simplifies server-side rendering, offering a seamless developer experience for building fast, scalable, and SEO-friendly web applications.",
  },
  {
    name: "Tailwind",
    Icon: TbBrandTailwind,

    description: "Tailwind CSS is a utility-first CSS framework that provides a set of pre-designed, low-level utility classes to efficiently build responsive and customizable user interfaces.",
  },
  {
    name: "TypeScript",
    Icon: TbBrandTypescript,

    description: "TypeScript is a superset of JavaScript that enhances code maintainability and productivity through robust static typing, interfaces, and promoting scalable and robust applications.",
  },
];
export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-5xl text-white font-extrabold mb-10">Built on a foundation of fast,
        production <span className="text-center text-5xl text-white font-extrabold mb-10">grade tool</span> </h2>
        {/* <h2 className="text-center text-5xl text-white font-extrabold mb-10">grade tool</h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center sm:mx-auto ">
        {testimonials.map((item) => (

          <Card
            key={item.description}
            className=" card  text-gray-300 hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 m-4 rounded-lg overflow-hidden relative bg-[#192339] border-violet-600 transform hover:scale-105 hover:border-pink-500"
          >

            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                {/* <div >
                  <FaReact className="text-blue-500 w-10 h-10 rounded-full mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-blue-900 transition-all" />
                </div> */}

                <div>
                  <div>
                    {item.Icon && <item.Icon className="text-blue-500 w-10 h-10 rounded-full mb-4 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-blue-900 transition-all" />}
                  </div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm"></p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
            <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
            <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-yellow-950 group-hover:via-yellow-500 w-[70%] m-auto rounded transition-all"></div>
          </Card>

        ))}

      </div>

    </div>

  );
};
