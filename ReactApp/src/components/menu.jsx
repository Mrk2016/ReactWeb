import React from "react";
import { navLinks } from "../constants";

const menu = () => (
  <nav className="w-full flex py-6 justify-between items-center nabvar">
    <img src="src/assets/react.svg" className="" alt="" />
    <ul className="list-none sm:flex hidden justify-end items-center flex-1">
      {navLinks.map((nav, index) => (
        <li
          key={nav.id}
          className={`font-nomal cursor-pointer text-[16px] ${
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
