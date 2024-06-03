"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import { ModeToggle } from "../ui/toggle-mode";
import menu from "../../utils/recipe-menu.js";
import menuMobile from "../../utils/mobile-menu.js";
import ListItem from "./list-item";
import MobileListItem from "./mobile-list-item";
import { navVariants, menuVariants, menuContainer } from "../../utils/motion.js";
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
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center h-24 max-w-[1280px] mx-auto px-4">
        <h1 className="w-full text-3xl font-bold">NGOPILU.</h1>
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex">
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
        <div onClick={toggleNav} className="md:hidden">
          <IoMenu size={30} />
        </div>
      </div>
      <AnimatePresence>
        {nav && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top z-10 bg-orange-100 text-black"
          >
            <div className="flex h-full flex-col">
              <div className="grid justify-items-end py-8 px-4">
                <IoClose size={30} onClick={toggleNav} />
              </div>
              <motion.div
                variants={menuContainer}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center items-center gap-4"
              >
                {menuMobile.map((item) => (
                  <div className="overflow-hidden text-2xl uppercase text-black">
                    <MobileListItem
                      key={item.id}
                      title={item.title}
                      href={item.link}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
