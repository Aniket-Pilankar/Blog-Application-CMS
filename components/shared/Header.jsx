import React from "react";

import { FaBlog } from "react-icons/fa6";

import Link from "next/link";
import { Navbar, NavbarBrand } from "flowbite-react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Navbar fluid rounded className="bg-tra">
        <NavbarBrand as={Link} href="https://flowbite-react.com">
          <Image
            src="/assets/icons/blog.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
            width={25}
            height={25}
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-white">
            Blog App CMS
          </span>
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Header;
