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
          <p className="letter-spacing-1 max-w-lg font-sans font-medium sm:text-base text-sm">
            Explore a world of lush greenery, vibrant blooms, and sustainable
            gardening practices. Let's grow together!
          </p>
          <div className="visions flex gap-5 py-4 h-auto w-full">
            <div className="w-auto h-auto gap-3 flex items-center">
              <div className="icon w-auto h-auto">
                <Image
                  src="/images/about-icon1.png"
                  alt="icon"
                  width={100}
                  height={100}
                />
              </div>
              <div className="w-auto h-auto gap-3 flex-col flex ">
                <h2 className="text-lg letter-spacing-2 font-medium ">Eco-friendly</h2>
                <p className="letter-spacing-1 font-sans font-medium text-sm">
                  Eco-friendly and sustainable practices.
                </p>
              </div>
            </div>
            <div className="w-auto h-auto gap-3 flex items-center">
              <div className="icon w-auto h-auto">
                <Image
                  src="/images/about-icon2.png"
                  alt="icon"
                  width={100}
                  height={100}
                />
              </div>
              <div className="w-auto h-auto gap-3 flex-col flex ">
                <h2 className="text-lg letter-spacing-2 font-medium ">High-quality</h2>
                <p className="letter-spacing-1 font-sans font-medium text-sm">
                  High-quality tools and supplies.
                </p>
              </div>
            </div>
           
          </div>
          <div className="button w-full h-auto ">
            <Button className="bg-[#C7D216] text-white py-6 px-8 rounded-lg letter-spacing-2 text-lg font-medium hover:bg-[#204a30] ">
              Lets Discuss
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
