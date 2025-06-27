import Image from "next/image";
import Link from "next/link";
import React from "react";
const Header = () => {
  return (
    <div className="w-full h-[90px]  flex justify-center items-center text-lime-600">
      <div className="lg:w-[90%] w-full flex md:flex-row flex-col md:gap-0 gap-8 justify-between items-center h-auto p-2">
        <div className="logo w-auto h-auto">
          <Image src='/logo.png' alt="Logo" width={150} height={150} />
        </div>
        <div className="tabs w-auto h-auto flex justify-center items-center">
          <ul className="w-full h-auto flex justify-center items-center xl:gap-13 lg:gap-10 md:gap-8 xs:gap-5 gap-3">
            <li className="cursor-pointer">
              <Link href="/" className="lg:text-lg sm:text-base text-sm hover:text-green-300 focus:text-green-300 cursor-pointer">
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/" className="lg:text-lg sm:text-base text-sm hover:text-green-300 focus:text-green-300 cursor-pointer">
                About Us
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/" className="lg:text-lg sm:text-base text-sm hover:text-green-300 focus:text-green-300 cursor-pointer">
                Services
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/" className="lg:text-lg sm:text-base text-sm hover:text-green-300 focus:text-green-300 cursor-pointer">
                Doctors
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/" className="lg:text-lg sm:text-base text-sm hover:text-green-300 focus:text-green-300 cursor-pointer">
                FAQs
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/" className="lg:text-lg sm:text-base text-sm hover:text-green-300 focus:text-green-300 cursor-pointer">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
