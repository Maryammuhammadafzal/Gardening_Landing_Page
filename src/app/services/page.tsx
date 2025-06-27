"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    image: "/images/service-card-image1.png",
    title: "Garden Design & Consultation",
    },
  {
    id: 2,
    image: "/images/service-card-image2.png",
    title: "Flowers Care",
   },
  {
    id: 3,
    image: "/images/service-card-image3.png",
    title: "Plant sowing",
    },
  {
    id: 4,
    image: "/images/service-card-image4.png",
    title: "Growing House Garden",
   },
  {
    id: 5,
    image: "/images/service-card-image5.png",
    title: "Eco-Friendly Designs",
    },
  {
    id: 6,
     image: "/images/service-card-image2.png",
    title: "Growing FLowers",
  },
];
const ServicePage = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 4,
    initialSlide: 0,
    centerMode: true,
    centerPadding: "60px",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: "15px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
    ],
  };
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      <div className="w-[90%] flex justify-center items-center h-auto py-10">
        <div className="w-full h-full py-10 flex sm:flex-row flex-col text-green-800 justify-between items-center gap-24 sm:gap-5">
          <div className="h-auto pl-10 w-auto flex justify-center relative items-center">
            <h3 className="lg:text-5xl md:text-4xl text-3xl font-normal italic">
              Services
            </h3>
            <Image
              src="/images/footer-arrow.png"
              alt="arrow"
              width={200}
              height={200}
              className="absolute md:-right-10 -right-7"
            />
          </div>
          <div className="flex flex-col gap-6 h-auto">
            <p className="letter-spacing-1  lg:max-w-3xl max-w-xl text-right max-[950px]:max-w-lg max-md:max-w-md font-sans font-medium sm:text-base text-sm">
              We believe in the transformative power of plants. Founded in
              [Year], our mission has been to inspire, educate, and equip
              gardening enthusiasts with the tools and knowledge they need to
              create thriving gardens.
            </p>
          </div>
        </div>
      </div>
      <div id="features" className="w-full overflow-hidden min-h-[500px] py-10">
        <Slider
          {...settings}
          className="w-full flex justify-center items-center"
        >
          {slides.map(({ id, image, title }) => (
            <div
              key={id}
              className="margin-10 w-[300px] h-[460px] rounded-[40px] relative group font-sans"
            >
              <div className="relative w-fit h-fit flex justify-center items-center">
                <Image
                  src={image}
                  alt={title}
                  width={300}
                  height={300}
                  className="min-h-[400px] object-center w-full rounded-[40px] margin-10"
                  placeholder="blur"
                  blurDataURL="/images/placeholder.png"
                />
                <div className="overlay group-hover:block hidden h-full w-[95%] card-gradient absolute top-0 left-2 rounded-[40px] z-10" />
              </div>
              <div className="w-full h-full group-hover:flex hidden absolute top-0 left-0 justify-center items-center z-20">
                <div className="flex flex-col gap-3 text-white w-full h-full pt-10  items-start justify-start px-10 ">
                  <h3 className="font-sans md:text-xl text-base sm:text-lg">
                    {title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServicePage;
