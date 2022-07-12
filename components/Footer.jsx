import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-[300px] w-full bg-gray-400 flex flex-col justify-start items-start">
      <div className="grid grid-cols-3 gap-4 items-center w-full">
        <div className="col-span-3 md:col-span-1 text-white pt-4 pl-2 md:pl-10 md:pt-0 justify-end items-start flex flex-col">
          <h3>Ricky Andrianto Kusuma</h3>
          <p className="text-gray-200">Front-End Developer</p>
        </div>
        <div className="col-span-3 md:col-span-1 flex flex-col md:flex-row justify-center md:items-center gap-4 text-white pl-2">
          <Link href="/#about">
            <p>About</p>
          </Link>
          <Link href="/#experience">
            <p>Experience</p>
          </Link>
          <Link href="/#project">
            <p>Portfolio</p>
          </Link>
        </div>
        <div className="hidden md:flex md:col-span-1 py-4 m-auto items-center justify-between max-w-[330px] gap-4">
          <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#ecf0f3]">
            <a
              href="https://www.linkedin.com/in/ricky-andrianto/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#ecf0f3]">
            <a href="https://github.com/rickykusuma" target="_blank">
              <FaGithub />
            </a>
          </div>
          <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#ecf0f3]">
            <a href="mailto:ricky.ad58@gmail.com" target="_blank">
              <AiOutlineMail />
            </a>
          </div>
        </div>
      </div>
      <div className="pl-2 mx-auto flex items-center justify-center md:items-end h-full pb-5 text-gray-50">
        <p>© Ricky Andrianto Kusuma. All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
