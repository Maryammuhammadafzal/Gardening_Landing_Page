import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center py-20 ">
      <div
        className="w-[85%] flex justify-center items-center min-h-[400px] rounded-4xl bg-center bg-cover"
        style={{ backgroundImage: `url('/images/contact-image.png')` }}
      >
        <div className="w-full h-full flex justify-evenly items-center gap-5">
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
