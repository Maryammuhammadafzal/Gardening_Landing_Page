import Image from "next/image";
import React from "react";

const GalleryPage = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-10 w-full h-auto py-20">
      <div className="w-[90%] h-auto flex justify-center flex-col gap-10 items-center ">
        <h3 className="sm:text-5xl text-4xl font-normal text-green-800 italic">
          Our Gallery
        </h3>
        <div className="flex flex-col w-full h-auto gap-5">
                <div className="flex w-full max-sm:flex-wrap gap-5">
          <div className="md:w-[70%] sm:w-[54%] w-full h-auto flex justify-center items-center bg-center bg-cover rounded-4xl">
            <Image
              src="/images/gallery-image1.png"
              alt="image"
              width={700}
              height={100}
              className="w-full h-[400px] rounded-4xl object-cover"
            />
          </div>
          <div className="md:w-[29%] sm:w-[45%] w-full h-auto flex justify-center items-center bg-center bg-cover rounded-4xl">
            <Image
              src="/images/gallery-image2.png"
              alt="image"
              width={200}
              height={100}
              className="w-full h-[400px] rounded-4xl object-cover"
            />
          </div>
        </div>
        <div className="flex w-full max-sm:flex-wrap gap-5">
          <div className="sm:w-[46%] w-full h-auto flex justify-center items-center bg-center bg-cover rounded-4xl">
            <Image
              src="/images/gallery-image3.png"
              alt="image"
              width={700}
              height={100}
              className="w-full h-[400px] rounded-4xl object-cover"
            />
          </div>
          <div className="sm:w-[29%] w-full h-auto flex justify-center items-center bg-center bg-cover rounded-4xl">
            <Image
              src="/images/gallery-image4.png"
              alt="image"
              width={200}
              height={100}
              className="w-full h-[400px] rounded-4xl object-cover"
            />
          </div>
          <div className="sm:w-[29%] w-full h-auto flex justify-center items-center bg-center bg-cover rounded-4xl">
            <Image
              src="/images/gallery-image5.png"
              alt="image"
              width={200}
              height={100}
              className="w-full h-[400px] rounded-4xl object-cover"
            />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
