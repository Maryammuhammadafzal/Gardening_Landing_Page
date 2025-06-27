import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const ValuePage = () => {
  return (
    <div className="flex justify-center items-center w-full h-auto py-20">
      <div className="w-[90%] h-auto flex justify-center flex-col gap-10 items-center ">
        <h3 className="text-5xl font-normal italic">Our Values</h3>
        <div className="flex justify-evenly items-center w-full h-auto gap-4">
          <Card className="flex flex-col gap-3 items-center justify-center">
            <CardContent>
              <Image
                src="/images/contact-arrow.png"
                alt="arrow"
                width={100}
                height={100}
              />
              <p className="letter-spacing-1 text-center max-w-lg font-sans font-medium sm:text-base text-sm">
                Promoting eco-friendly gardening methods.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ValuePage;
