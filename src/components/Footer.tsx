import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto py-10 flex justify-center items-center">
      <div className="w-[90%] flex flex-col gap-5 justify-center items-center">
        <div className="w-full h-full flex justify-between items-center gap-5">
          <div className="h-auto pl-10 w-auto text-white flex justify-center relative items-center">
            <h3 className="text-5xl font-normal italic">Get In Touch</h3>
            <Image
              src="/images/contact-arrow.png"
              alt="arrow"
              width={200}
              height={200}
              className="absolute -right-10"
            />
          </div>
          <div className="flex flex-col gap-6 h-auto max-w-lg">
            <p className="letter-spacing-1 text-white max-w-lg font-sans font-medium sm:text-base text-sm">
              Get inspired by our gallery showcasing stunning gardens designed
              by our team and the flourishing gardens of our community members.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
