import React, { useState, useEffect } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import ProjectItem from "./ProjectItem";
const CarouselSlider = ({ data, ...props }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleSelectedIndex = (index) => {
    if (index < 0) {
      setSelectedIndex(data.length - 1);
    } else if (index > data.length - 1) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(index);
    }
  };
  const dotLength = new Array(data.length).fill(null);
  return (
    <div className="col-span-2 p-2 m-auto grid grid-cols-[30px_1fr_30px]">
      <div className="m-auto">
        <MdArrowBackIosNew
          onClick={handleSelectedIndex.bind(this, selectedIndex - 1)}
          size="30"
          className="text-[#5651e5] cursor-pointer"
        />
      </div>
      {/* project content */}
      {data.map((item, index) => {
        return (
          <ProjectItem
            data={item}
            key={index}
            classList={index == selectedIndex ? "grid" : "hidden"}
          />
        );
      })}
      {/* end Project Content */}
      <div className="m-auto">
        <MdArrowForwardIos
          onClick={handleSelectedIndex.bind(this, selectedIndex + 1)}
          size="30"
          className="text-[#5651e5] cursor-pointer"
        />
      </div>
      <div className="col-span-3 m-auto pt-4 flex gap-2 items-center">
        {dotLength.map((item, index) => {
          {
            return index == selectedIndex ? (
              <div
                onClick={handleSelectedIndex.bind(this, index)}
                className="bg-[#5651e5] rounded-full w-[15px] h-[15px] cursor-pointer"
              ></div>
            ) : (
              <div
                onClick={handleSelectedIndex.bind(this, index)}
                className="bg-white rounded-full w-[10px] h-[10px] cursor-pointer"
              ></div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CarouselSlider;
