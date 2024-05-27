"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoMenu, IoClose } from "react-icons/io5";
import { ModeToggle } from "../ui/toggle-mode";
import { Button } from "../ui/button";
import menu from "../utils/menu";
import NavItem from "./nav-item.jsx";

const Navbar = () => {
  const router = useRouter();

  const handleNav = (link) => {
    router.push(link);
  };

  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1280px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold">NGOPILU.</h1>
      <ul className="hidden md:flex items-center">
        {menu.map((item) => (
          <NavItem
            key={item.id}
            link={item.link}
            title={item.title}
            onClick={handleNav}
          />
        ))}
        <li className="p-4">
          <ModeToggle />
        </li>
        <li className="p-4">
          <Button>Subscribe</Button>
        </li>
      </ul>
      <div onClick={toggleNav} className="block md:hidden">
        {nav ? <IoClose size={30} /> : <IoMenu size={30} />}
      </div>
      <div
        className={
          nav
            ? "fixed top-3.5 left-0 w-[50%] h-full border-r ease-in-out duration-500"
            : "fixed left-[-100%] top-3.5 ease-in-out duration-500"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4">NGOPILU.</h1>
        <ul className="uppercase p-4 mt-8">
          {menu.map((item) => (
            <NavItem
              key={item.id}
              link={item.link}
              title={item.title}
              onClick={handleNav}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
