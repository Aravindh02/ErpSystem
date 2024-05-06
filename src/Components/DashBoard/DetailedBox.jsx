import React from "react";
const DetailedBox = ({ ...props }) => {
  return (
    <div className="border-2 border-indigo-200 shadow-lg transition ease-linear delay-400 text-primary hover:scale-110 hover:shadow-indigo-300 bg-indigo-200 duration-300 m-4 min-w-48 h-24  ">
      <div className="text-center p-4 font-medium text-lg">
        <span className="">{props.title}</span> <br></br>
        <span className="">{props.value}</span>
      </div>
    </div>
  );
};

export default DetailedBox;
