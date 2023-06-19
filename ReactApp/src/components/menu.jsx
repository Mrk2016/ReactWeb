import React from "react";
import { navLinks } from "../constants";
import { close, logo } from "../assets";

const menu = () => (
  <nav className="w-full flex py-6 justify-between items-center nabvar">
    <img src={logo} className="w-[124px] h-[32px]" alt="" />
    <ul className="list-none text-white sm:flex hidden justify-end items-center flex-1">
      {navLinks.map((nav, index) => (
        <li
          key={nav.id}
          className={`font-nomal font-poppins p-2 cursor-pointer text-[16px] ${
            index === navLinks.length - 1 ? "mr-0" : "mr-10"
          }`}
        >
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default menu;
