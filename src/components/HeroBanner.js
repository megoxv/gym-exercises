import React from "react";
const HeroBanner = () => {
  return (
    <div className="relative h-screen">
      <div className="bg-[url('https://preview.colorlib.com/theme/gymlife/img/hero/hero-1.jpg.webp')] bg-no-repeat bg-cover bg-fixed relative top-0 left-0 h-screen w-auto"></div>
      <div className="absolute bottom-52 -right-1 sm:right-11 text-clip">
        <div className="text-white uppercase">
          <span className="text-3xl indent-8">Shape your body</span>
          <h1 className="text-5xl sm:text-7xl w-[350px] sm:w-[500px] " >
            Be <b className="text-main-color">Strong</b> traning hard
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
