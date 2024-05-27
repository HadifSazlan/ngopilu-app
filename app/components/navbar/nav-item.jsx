import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ link, title, onClick }) => {
  const pathname = usePathname();

  return (
    <li
      className={`p-4 ${pathname === link ? "active" : ""}`}
      onClick={() => onClick(link)}
    >
      <Link href={link}>{title}</Link>
    </li>
  );
};

export default NavItem;
