import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className=" h-14 flex justify-between items-center p-5 bg-primary drop-shadow-2xl md:p-8 ">
     <h1 className="font-title text-logo font-semibold text-4xl">ERP</h1>
      <ul className=" flex justify-around items-center  min-w-72 w-2/4 text-sm md:text-lg">
        <li className=" font-bold text-white hover:text-gray-400 hover:font-white hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300 ">
          <Link to="/"> Dashboard </Link>
        </li>

        <li className=" font-bold text-white hover:text-gray-400 hover:font-black hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300 ">
          <Link to="product">Product</Link>
        </li>

        <li className=" font-bold text-white hover:text-gray-400 hover:font-black hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300 ">
          <Link to="order">Order</Link>
        </li>
        <li className=" font-bold text-white hover:text-gray-400 hover:font-black hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300 ">
          <Link to="CalendarPage">Calendar</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
