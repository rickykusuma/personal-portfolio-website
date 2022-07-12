import React from "react";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import projects from "../constants/projects";
import CarouselSlider from "./CarouselSlider";
const Projects = () => {
  return (
    <div
      id="project"
      className="w-full h-screen flex-col flex items-center mt-[150px] md:mt-0"
    >
      <div className="max-w-[1240px] m-auto grid grid-cols-2 gap-8">
        {/* Section Name */}
        <div className="m-auto w-full col-span-2">
          <div className="flex flex-col items-center md:py-16">
            <h1 className="uppercase text-4xl tracking-widest text-[#5651e5]">
              Portfolio
            </h1>
            <h3 className="py-2 text-gray-500">Most Recent Work</h3>
          </div>
        </div>
        {/* content project */}
        <CarouselSlider data={projects} />
        {/* <ProjectItem /> */}
      </div>
    </div>
  );
};

export default Projects;
