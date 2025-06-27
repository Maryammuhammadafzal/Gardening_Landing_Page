import { Card, CardContent } from "@/components/ui/card";
import React from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
const AboutPage = () => {
  return (
    <div className="w-full h-auto my-35 flex flex-col justify-center items-center">
      <div className="lg:w-[90%] w-full flex md:flex-row flex-col gap-5 justify-center items-center h-auto">
        <div className="img md:w-[50%] w-full sm:px-0 px-3 h-auto flex justify-center items-center">
          <Card
            className="flex justify-end flex-col rounded-4xl relative items-center bg-cover bg-center xl:h-[600px] max-sm:w-full xl:w-[600px] h-[500px] w-[500px] "
            style={{ backgroundImage: `url('/images/about-image.png')` }}
          >
            <CardContent className="bg-white absolute bottom-10 left-10 h-[100px] rounded-2xl p-5 w-[225px] flex flex-col justify-end items-center">
              <p className="text-sm text-green-800 text-center font-sans ">
                “Start your journey to a greener world with us today.”
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="content md:w-[50%]  sm:w-[80%] w-full sm:p-0 text-green-800 px-5 h-auto flex flex-col justify-center items-start gap-4">
          <h2 className="lg:text-5xl  md:text-4xl text-3xl font-medium ">
            Why Choose Us?
          </h2>
          <p className="about-para max-w-lg font-sans font-medium sm:text-base text-sm">
            Explore a world of lush greenery, vibrant blooms, and sustainable
            gardening practices. Let's grow together!
          </p>
          <div className="visions flex gap-5 py-4 h-auto w-full">
            <div className="w-auto h-auto gap-3 flex items-center">
              <div className="icon w-auto h-auto">
                <Image src='/images/about-icon1.png' alt="icon" width={50} height={50}/>
              </div>
              <div className="w-auto h-auto gap-3 flex-col flex ">
                <h2 className="text-xl font-semibold ">
                  Our Mission:
                </h2>
                <p className="md:text-base sm:text-sm text-xs">
                  To provide high-quality, patient-centered healthcare that
                  enhances the lives of individuals and communities.
                </p>
              </div>
            </div>
            <div className="w-full h-auto gap-3 flex flex-col ">
              <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold ">
                Our Vision:
              </h2>
              <p className="md:text-base sm:text-sm text-xs">
                To be a trusted healthcare partner known for innovation,
                excellence, and compassion.
              </p>
            </div>
          </div>
          <div className="button w-full h-auto ">
            <Button className="bg-[#A8D5BA] py-6 px-8 rounded-lg text-[#2E8B57] text-base font-bold hover:bg-[#b7e7ca] ">
              Book Your Appointment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
