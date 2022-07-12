import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMail,
  AiOutlineAppstore,
  AiOutlineHome,
  AiOutlinePicture,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdWorkOutline } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { useRouter } from "next/router";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    if (router.asPath === "/property") {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);
  const handleShadow = () => {
    if (window.scrollY >= 90) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShadow);

    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, []);

  return (
    <div className="z-[100] flex justify-center">
      {/* start web Nav */}
      <div
        className={
          shadow
            ? "hidden fixed md:flex w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]"
            : "hidden fixed md:flex w-full h-20 z-[100] bg-[#ecf0f3]"
        }
      >
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <Link href="/#home">
            <Image
              className="cursor-pointer"
              src="/../public/assets/Logo.png"
              width="50px"
              height="50px"
              alt="logo"
            />
          </Link>
          <div>
            <ul className="hidden md:flex">
              <Link href="/#home">
                <li className="ml-10 uppercase text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li className="ml-10 uppercase text-sm">About</li>
              </Link>
              <Link href="/#experience">
                <li className="ml-10 uppercase text-sm">Experience</li>
              </Link>
              <Link href="/#project">
                <li className="ml-10 uppercase text-sm">Portfolio</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {/*end web Nav */}

      {/* start mobile nav*/}
      <div className="flex z-[100] fixed md:hidden bottom-5 w-[95%] h-12 shadow-xl bg-[#ecf0f3] shadow-gray-400 rounded-xl ">
        {/* start nav container */}
        <div className="p-5 w-full flex  justify-between items-center">
          <Link href="/#home">
            <Image
              className="cursor-pointer"
              src="/../public/assets/Logo.png"
              width="50px"
              height="50px"
              alt="logo"
            />
          </Link>
          <AiOutlineAppstore
            onClick={handleNav}
            className="cursor-pointer"
            size={25}
          />
        </div>
        {/* end nav container */}
        {/* start nav content */}
        <div
          className={
            nav
              ? "border border-gray-200 fixed bg-[#ecf0f3] w-[95%] h-[200px] bottom-5 rounded-xl shadow-gray-400 ease-in duration-300"
              : "border border-gray-200 fixed bg-[#ecf0f3] w-[95%] h-[200px] bottom-[-50%] rounded-xl shadow-gray-400 ease-in duration-300"
          }
        >
          <ul className="grid grid-cols-4 p-5 ">
            <Link href="/#home">
              <li
                onClick={() => {
                  setNav(false);
                }}
                className="py-4 text-sm flex flex-col items-center"
              >
                <AiOutlineHome size="20" />
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li
                onClick={() => {
                  setNav(false);
                }}
                className="py-4 text-sm flex flex-col items-center"
              >
                <IoPersonOutline size="20" />
                About
              </li>
            </Link>
            <Link href="/#experience">
              <li
                onClick={() => {
                  setNav(false);
                }}
                className="py-4 text-sm flex flex-col items-center"
              >
                <MdWorkOutline size="20" />
                Experience
              </li>
            </Link>
            <Link href="/#project">
              <li
                onClick={() => {
                  setNav(false);
                }}
                className="py-4 text-sm flex flex-col items-center"
              >
                <AiOutlinePicture size="20" />
                Portofolio
              </li>
            </Link>
            <a
              href="https://www.linkedin.com/in/ricky-andrianto/"
              target="_blank"
              rel="noreferrer"
            >
              <li
                onClick={() => {
                  setNav(false);
                }}
                className="py-4 text-sm flex flex-col items-center"
              >
                <AiOutlineLinkedin size="20" />
                LinkedIn
              </li>
            </a>
            <a
              href="https://github.com/rickykusuma"
              target="_blank"
              rel="noreferrer"
            >
              <li
                onClick={() => {
                  setNav(false);
                }}
                className="py-4 text-sm flex flex-col items-center"
              >
                <FiGithub size="20" />
                Github
              </li>
            </a>
            <a
              href="mailto:ricky.ad58@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <li
                onClick={() => {
                  setNav(false);
                }}
                className="py-4 text-sm flex flex-col items-center"
              >
                <AiOutlineMail size="20" />
                Email
              </li>
            </a>
            <div className="flex justify-center self-center">
              <div
                onClick={handleNav}
                className=" cursor-pointer rounded-full shadow-lg shadow-gray-400 flex justify-center items-center w-10 h-10"
              >
                <AiOutlineClose size="20" />
              </div>
            </div>
          </ul>
        </div>
        {/* end nav content */}
      </div>
      {/* end mobile nav */}
    </div>
  );
};

export default Navbar;
