import React from "react";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiNextdotjs, SiJavascript, SiTailwindcss } from "react-icons/si";
const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen p-2 flex items-center mt-[100px] md:mt-0"
    >
      <div className="max-w-[1240px] m-auto grid grid-cols-2 gap-8 ">
        <div className="col-span-2 flex flex-col justify-center items-center">
          <h1 className="uppercase text-4xl tracking-widest text-[#5651e5]">
            About Me
          </h1>
          <h3 className="py-2 text-gray-500">My Introduction</h3>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-center md:pl-10 order-2 md:order-1">
          <p className="py-2 text-gray-600 text-lg md:text-xl tracking-widest text-center">
            Hi, my name is Ricky Andrianto Kusuma. {`I'm`} a front-end developer
            and mobile developer. Graduated from Multimedia Nusantara University
            with a GPA of 3.39. Seeking a position where I can develop my
            skills. My vision is that I will be able to provide better solutions
            in a timely manner.
          </p>
          <div className="p-3 m-auto">
            <br />
            <h3 className="text-xl">Favorite Technology Stacks</h3>
            <ul className="pt-3 flex gap-2 md:gap-8">
              <li className="cursor-default">
                <FaReact size="45" />
              </li>
              <li className="cursor-default">
                <AiOutlineHtml5 size="45" />
              </li>
              <li className="cursor-default">
                <DiCss3 size="45" />
              </li>
              <li className="cursor-default">
                <SiJavascript size="45" />
              </li>
              <li className="cursor-default">
                <SiTailwindcss size="45" />
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-2 m-auto md:col-span-1 w-[75%] md:w-full flex justify-start md:pr-10 order-1 md:order-2">
          <div className="flex items-center h-auto m-auto shadow-xl shadow-gray-400 rounded-full p-2 hover:scale-105 duration-300">
            <Image
              src="/../public/assets/profile.jpg"
              width="350"
              height="325"
              alt="icon"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
