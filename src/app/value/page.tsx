import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const ValuePage = () => {
  const value_data = [
    {
      icon: "/images/value-icon1.png",
      description: " Promoting eco-friendly gardening methods.",
    },
    {
      icon: "/images/value-icon2.png",
      description: " Building connections through a shared love of gardening.",
    },
    {
      icon: "/images/value-icon3.png",
      description: " Empowering gardeners with practical knowledge.",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full h-auto py-20">
      <div className="w-[90%] h-auto flex justify-center flex-col gap-10 items-center ">
        <h3 className="sm:text-5xl text-4xl font-normal text-green-800 italic">Our Values</h3>
        <div className="flex justify-evenly flex-wrap items-center w-full h-auto gap-4">
          {value_data.map(({ icon, description }, index) => (
            <Card
              key={index}
              className="flex flex-col gap-3 items-center justify-center border-none shadow-none w-[340px] h-auto"
            >
              <CardContent className="flex justify-center items-center text-center w-full h-auto flex-col gap-3">
                <Image src={icon} alt="icon" width={80} height={80} className="h-[90px] w-[90px]" />
                <p className=" text-center italic letter-spacing-1 font-sans sm:text-base text-sm">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuePage;
