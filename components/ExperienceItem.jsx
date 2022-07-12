import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";

const ExperienceItem = ({ ...props }) => {
  const { id, role, startDate, endDate, location, company } = props.data;
  return (
    <>
      {id % 2 !== 0 ? (
        <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-[1.5rem] text-right">
          <div>
            <h3 className="text-lg">{role}</h3>
            <span className="text-sm text-gray-500">
              {location} - {company}
            </span>
            <div className="flex items-center gap-2 justify-end">
              <AiOutlineCalendar className="text-xl" />
              {startDate} - {endDate}
            </div>
          </div>
          <div>
            <span className="inline-block w-[13px] h-[13px] bg-[#5651e5] rounded-full"></span>
            <span className="block w-[1px] h-full bg-[#5651e5] translate-x-[6px] translate-y-[-7px]"></span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-[1.5rem]">
          <div></div>
          <div className="col-start-2 col-span-1">
            <span className="inline-block w-[13px] h-[13px] bg-[#5651e5] rounded-full"></span>
            <span className="block w-[1px] h-full bg-[#5651e5] translate-x-[6px] translate-y-[-7px]"></span>
          </div>
          <div className="col-start-3 col-span-1">
            <h3 className="text-lg">{role}</h3>
            <span className="text-sm text-gray-500">
              {location} - {company}
            </span>
            <div className="flex items-center gap-2 ">
              <AiOutlineCalendar className="text-xl" />
              {startDate} - {endDate}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExperienceItem;
