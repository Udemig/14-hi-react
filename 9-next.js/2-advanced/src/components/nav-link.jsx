"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, href }) => {
  // kullanıcının bulunduğu adresi getirdi
  const path = usePathname();

  return (
    <Link href={href} className={path === href ? "text-red-500!" : ""}>
      {children}
    </Link>
  );
};

export default NavLink;
