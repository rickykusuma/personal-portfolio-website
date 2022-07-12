import React, { useState } from "react";
import { BsBriefcase } from "react-icons/bs";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { AiOutlineCalendar } from "react-icons/ai";
import workExperience from "../constants/workExperience";
import education from "../constants/education";
import ExperienceItem from "./ExperienceItem";
const Experience = () => {
  const [tab, setTab] = useState("education");
  const handleTab = (tabName) => {
    setTab(tabName);
  };
  return (
    <div
      id="experience"
      className="w-full h-screen mt-[250px] md:mt-0 flex-col flex items-center justify-center"
    >
      <div>
        <div className="max-w-[1240px] md:w-[768px] m-auto">
          <div className="flex flex-col items-center">
            <h1 className="uppercase text-4xl tracking-widest text-[#5651e5]">
              Experience
            </h1>
            <h3 className="py-2 text-gray-500">My Journey</h3>
          </div>
        </div>
        {/* tab button */}
        <div className="flex gap-5 justify-around items-center mt-5">
          <div
            onClick={handleTab.bind(this, "education")}
            className={
              tab == "education"
                ? "flex gap-2 cursor-pointer shadow-xl shadow-gray-400 p-5 rounded-full bg-gray-300"
                : "flex gap-2 cursor-pointer shadow-xl shadow-gray-400 p-5 rounded-full"
            }
          >
            <HiOutlineAcademicCap size="25" />
            Education
          </div>
          <div
            onClick={handleTab.bind(this, "work")}
            className={
              tab == "work"
                ? "flex gap-2 cursor-pointer shadow-xl shadow-gray-400 p-5 rounded-full bg-gray-300"
                : "flex gap-2 cursor-pointer shadow-xl shadow-gray-400 p-5 rounded-full"
            }
          >
            <BsBriefcase size="25" />
            Work
          </div>
        </div>
      </div>
      {/* sections */}
      <div className=" mt-10 max-w-[768px] md:w-[768px] pl-5 flex justify-center items-center shadow-xl shadow-gray-400 py-16 rounded-xl">
        {/* content education */}
        <div className={tab == "education" ? "block w-full" : "hidden"}>
          {/* data */}
          {education.map((item, index) => (
            <ExperienceItem key={index} data={item} />
          ))}
        </div>
        {/* content work */}
        <div className={tab == "work" ? "block w-full" : "hidden"}>
          {/* data */}
          {workExperience.map((item, index) => (
            <ExperienceItem key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
