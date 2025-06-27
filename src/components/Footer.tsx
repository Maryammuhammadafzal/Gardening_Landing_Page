import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-auto py-10 flex justify-center items-center">
      <div className="lg:w-[90%] w-full lg:px-0 px-5 flex flex-col gap-5 justify-center items-center">
        <div className="w-full h-full py-10 flex text-green-800 justify-between items-center gap-5">
          <div className="h-auto pl-10 w-auto flex justify-center relative items-center">
            <h3 className="lg:text-5xl md:text-4xl text-3xl font-normal italic">Grow with Us!</h3>
            <Image
              src="/images/footer-arrow.png"
              alt="arrow"
              width={200}
              height={200}
              className="absolute md:-right-10 -right-7"
            />
          </div>
          <div className="flex flex-col gap-6 h-auto max-w-lg">
            <p className="letter-spacing-1  lg:max-w-lg max-w-md max-[950px]:max-w-sm max-md:max-w-xs font-sans font-medium sm:text-base text-sm">
              Join our newsletter to receive exclusive gardening tips,
              discounts, and updates straight to your inbox.
            </p>
          </div>
        </div>

        <div className="w-full h-auto py-10 flex flex-wrap justify-evenly gap-5">
          <div className="flex flex-col gap-2 w-auto h-auto">
            <h4 className="text-2xl italic text-[#C7D216]">Quick Links</h4>
            <ul className="flex py-2 font-sans letter-spacing-1 text-green-800 flex-col gap-2 h-auto w-auto">
              <li className="">
                <Link href="/" className="">
                  Home
                </Link>
              </li>
              <li className="">
                <Link href="/" className="">
                  About us
                </Link>
              </li>
              <li className="">
                <Link href="/" className="">
                  Services
                </Link>
              </li>
              <li className="">
                <Link href="/" className="">
                  Gallery
                </Link>
              </li>
              <li className="">
                <Link href="/" className="">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 w-auto h-auto">
            <h4 className="text-2xl italic text-[#C7D216]">Services</h4>
            <ul className="flex py-2 font-sans letter-spacing-1 text-green-800 flex-col gap-2 h-auto w-auto">
              <li className="">
                <Link href="/" className="">
                  Garden Design & Consultation
                </Link>
              </li>
              <li className="">
                <Link href="/" className="">
                  Plant Selection & Maintenance
                </Link>
              </li>
              <li className="">
                <Link href="/" className="">
                  Workshops & Tutorials
                </Link>
              </li>
              <li className="">
                <Link href="/" className="">
                  Sustainable Gardening Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 w-auto h-auto">
            <h4 className="text-2xl italic text-[#C7D216]">Social Media</h4>
            <ul className="flex py-2 font-sans letter-spacing-1 text-green-800 flex-col gap-2 h-auto w-auto">
              <li className="">
                <Link href="/" className="flex gap-3 items-center">
                <FaFacebook className="text-[#C7D216]"/>  Facebook
                </Link>
              </li>
              <li className="">
                <Link href="/" className="flex gap-3 items-center">
                 <FaWhatsapp className="text-[#C7D216]"/>  Whatsapp
                </Link>
              </li>
              <li className="">
                <Link href="/" className="flex gap-3 items-center">
                <FaLinkedin className="text-[#C7D216]"/> Linkedin
                </Link>
              </li>
              <li className="">
                <Link href="/" className="flex gap-3 items-center">
                 <FaInstagram className="text-[#C7D216]"/>  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="copy-right flex w-full justify-center items-center">
                <p className="text-base text-green-800 font-sans">© 2021 all copyright reserved. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
