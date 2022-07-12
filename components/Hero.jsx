import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { TypePhase, useTyping } from "./UseTyping";
import Image from "next/image";
import profile from "../public/assets/undraw_profile.svg";
import Link from "next/link";
import IconsItem from "./IconsItem";
const Hero = () => {
  const roleList = [
    "Front-End Developer",
    "Mobile Developer",
    "React/React Native",
  ];
  const { typedString } = useTyping(roleList);
  return (
    // container
    <div id="home" className="w-full h-screen text-center ">
      {/* content */}
      <div className="max-w-[1240px] w-full h-full grid grid-cols-1 md:grid-cols-2 mx-auto p-2  justify-center items-center">
        <div className="order-2 md:order-1 md:pl-5">
          <h2 className="py-4 text-gray-700">
            Hi, {`I'm `}
            <span className="text-[#5651e5]">Ricky Andrianto K</span>
          </h2>
          <h2 className="py-2 text-gray-700 blinking-cursor">{typedString}</h2>
          <div className="flex justify-center items-center pt-8">
            <a
              href="https://drive.google.com/file/d/1BwdxNlsfh7rRILPLU_xN4fMpxMfQ-5bY/view?usp=sharing"
              download
              target="_blank"
              rel="noreferrer"
            >
              <button className="p-5 rounded-full flex gap-3 font-bold hover:bg-gradient-to-r hover:from-[#709dff] hover:to-[#5651e5] hover:scale-105 ease-in duration-300">
                <AiOutlineDownload size="25" className="font-extrabold" />
                Download CV
              </button>
            </a>
          </div>
          <div className="max-w-[1240px] w-full hidden md:flex pt-10">
            {/* start icons */}
            <div className="flex py-4 m-auto items-center justify-between max-w-[330px] gap-4">
              <IconsItem url="https://www.linkedin.com/in/ricky-andrianto/">
                <FaLinkedinIn />
              </IconsItem>
              <IconsItem url="https://github.com/rickykusuma">
                <FaGithub />
              </IconsItem>
              <IconsItem url="mailto:ricky.ad58@gmail.com">
                <AiOutlineMail />
              </IconsItem>
            </div>
            {/* end icons */}
          </div>
        </div>
        <div className="order-1 md:order-2 m-auto h-[75%] w-[75%] md:h-full md:w-full flex justify-center items-center">
          <Image
            src={profile}
            width="400px"
            height="400px"
            className="bg-[#5651e5]/5 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
