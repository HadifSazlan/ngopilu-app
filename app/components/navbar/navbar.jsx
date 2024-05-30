"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

import { ModeToggle } from "../ui/toggle-mode";
import { Button } from "../ui/button";
import menu from "../../../utils/recipe-menu.js";
import ListItem from "./list-item";
import { navVariants } from "../../../utils/motion.js";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu.jsx";

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
    <motion.nav variants={navVariants} initial="hidden" whileInView="show">
      <div className="flex justify-between items-center h-24 max-w-[1280px] mx-auto px-4">
        <h1 className="w-full text-3xl font-bold">NGOPILU.</h1>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  onClick={() => router.reload()}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Recipe</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {menu.map((menu) => (
                    <ListItem
                      key={menu.id}
                      link={menu.link}
                      title={menu.title}
                      onClick={() => handleNav(menu.link)}
                    >
                      {menu.description}
                    </ListItem>
                  ))}
                  <ListItem></ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenuItem className="hidden md:flex items-center pl-1">
          <ModeToggle />
        </NavigationMenuItem>
      </div>
    </motion.nav>
  );
};

export default Navbar;
