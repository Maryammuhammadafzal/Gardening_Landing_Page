import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center py-20 ">
      <div
        className="lg:w-[85%] w-[95%] flex justify-center items-center sm:min-h-[400px] min-h-[500px] rounded-4xl bg-center bg-cover"
        style={{ backgroundImage: `url('/images/contact-image.png')` }}
      >
        <div className="w-full h-full flex lg:justify-evenly justify-center max-sm:text-center gap-24 sm:justify-between sm:flex-row flex-col items-center sm:gap-5">
          <div className="h-auto pl-10 w-auto text-white flex justify-center relative items-center">
            <h3 className="lg:text-5xl md:text-4xl text-3xl font-normal italic">Get In Touch</h3>
            <Image
              src="/images/contact-arrow.png"
              alt="arrow"
              width={200}
              height={200}
              className="absolute -right-10"
            />
          </div>
          <div className="flex flex-col gap-6 h-auto ">
            <p className="letter-spacing-1 text-white lg:max-w-lg max-w-md  max-[950px]:max-w-sm max-md:max-w-xs font-sans font-medium sm:text-base text-sm">
              Get inspired by our gallery showcasing stunning gardens designed
              by our team and the flourishing gardens of our community members.
            </p>
            <div className="button w-full h-auto ">
              <Button className="bg-white [#C7D216] text-green-800 py-6 px-8 rounded-lg letter-spacing-2 text-lg font-medium hover:bg-[#204a30] hover:text-white ">
                Lets Discuss
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
