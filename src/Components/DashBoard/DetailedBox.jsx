import React from "react";
const DetailedBox = ({ ...props }) => {
  return (
    <div className="border-2 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-300 m-4 min-w-48 h-24  ">
      <div className="text-center p-4 font-medium text-lg">
        <span className="">{props.title}</span> <br></br>
        <span className="">{props.value}</span>
      </div>
    </div>
  );
};

export default DetailedBox;
