import React from "react";

const IconsItem = ({ children, url, ...props }) => {
  return (
    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
      <a href={url} target="_blank" rel="noreferrer">
        {children}
      </a>
    </div>
  );
};

export default IconsItem;
