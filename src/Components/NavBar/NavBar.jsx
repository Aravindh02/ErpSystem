import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const NavBar = () => {
  return (
    <div className="flex justify-between p-0 ">
      <img className="w-32 h-18 pl-4 object-contain" src={logo} alt="lo"></img>
      <ul className=" flex justify-around items-center  min-w-72 w-2/4 text-sm md:text-lg">
        <li className=" font-bold  hover:text-gray-400 hover:font-black hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300 ">
          <Link to="/"> Dashboard </Link>
        </li>

        <li className=" font-bold  hover:text-gray-400 hover:font-black hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300 ">
          <Link to="product">Product</Link>
        </li>

        <li className=" font-bold  hover:text-gray-400 hover:font-black hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300 ">
          <Link to="order">Order</Link>
        </li>
        <li className=" font-bold  hover:text-gray-400 hover:font-black hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300 ">
          <Link to="CalendarPage">Calendar</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
