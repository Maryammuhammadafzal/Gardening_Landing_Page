import Header from "@/components/Header";
import React from "react";

const HeroPage = () => {
  return (
    <div
      className="w-full md:h-[700px] sm:h-[600px] h-[550px] bg-cover max-md:bg-center  bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/images/hero-image.png')` }}
    >
      <div className="w-full md:h-[90px] h-auto md:py-0 py-5 bg-white fixed top-0 left-0 shadow-md z-50">
        <Header />
      </div>
      <div className="relative w-full md:h-screen h-auto flex justify-center items-center">
        <div className="overlay bg-black/35 absolute top-0 left-0 md:h-[700px] sm:h-[600px] h-[550px] w-full"></div>
        <div className="content w-full md:h-[700px] sm:h-[600px] h-[550px] absolute top-0 left-0 z-20 flex justify-center items-end">
          <div className="md:w-[85%] w-full md:px-0 px-5 pb-20 h-auto flex items-center">
                <div className="lg:w-[55%] md:w-[70%] sm:w-full h-fit flex-col flex gap-4 max-w-xl text-white">
                        <h1 className="2xl:text-7xl xl:text-6xl sm:text-5xl text-4xl md:leading-18 sm:leading-14 leading-12 font-normal xl-leading-20">Cultivating Your Green Oasis</h1>
                        <p className="text-lg font-sans">Welcome to your one-stop destination for gardening inspiration, tools, and expertise. Whether youre an experienced gardener or just starting out, we are here to nurture your passion for plants.</p>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
