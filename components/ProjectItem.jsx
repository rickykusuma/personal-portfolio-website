import React from "react";

import Image from "next/dist/client/image";

const ProjectItem = ({ data, classList, ...props }) => {
  const { title, img, techStack, code, demo, desc } = data;
  return (
    <div className={`grid-cols-2 p-3 gap-2 ${classList}`}>
      <div className="col-span-2 md:col-span-1 shadow-md shadow-gray-400 relative w-full h-60">
        <Image src={img} layout="fill" objectFit="cover" alt="image-project" />
      </div>
      <div className="col-span-2 md:col-span-1 flex flex-col justify-center items-center gap-2 md:gap-5 text-center md:text-left md:justify-start">
        <p className="text-lg tracking-wider font-bold md:text-2xl mt-2">
          {title}
        </p>
        <p className="">{desc}</p>
        <p>Technology Stack: {techStack}</p>
        <div className="flex justify-between items-center gap-3">
          <button className="p-2 rounded-full font-bold hover:bg-gradient-to-r hover:from-[#709dff] hover:to-[#5651e5] hover:scale-105 ease-in duration-300">
            {/* <AiOutlineDownload size="25" className="font-extrabold" /> */}
            <a href={code} className="w-16 p-3" target="_blank">
              Code
            </a>
          </button>
          <button className="p-2 rounded-full font-bold hover:bg-gradient-to-r hover:from-[#709dff] hover:to-[#5651e5] hover:scale-105 ease-in duration-300">
            {/* <AiOutlineDownload size="25" className="font-extrabold" /> */}
            <a href={demo} className="w-16 p-3" target="_blank">
              Demo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
