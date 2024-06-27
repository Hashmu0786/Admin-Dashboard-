import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../index.css";
import { Navigation } from "swiper/modules";
import slide1 from "./images/slide1.png";
import slide2 from "./images/slide2.png";
import slide3 from "./images/slide3.png";
import slide4 from "./images/slide4.png";
import slide5 from "./images/slide5.png";
import slide6 from "./images/slide6.png";
import slide7 from "./images/slide7.png";
import slide8 from "./images/slide8.png";

const Slider = () => {
  return (
    <div className=" w-1/2 flex justify-center items-center bg-gray-100 ">
      <Swiper navigation={true} modules={[Navigation]} className="mt-16 p-4 ">
        <SwiperSlide className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-medium font-[roboto] text-center mb-6 2xl:text-5xl">
            Admin Dashboard
          </h2>
          <img src={slide2} alt="" className="h-96 2xl:w-full 2xl:h-full " />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center  text-2xl">
          <h2 className="text-3xl font-medium font-[roboto] text-center mb-6 2xl:text-5xl">
            Admin Dashboard
          </h2>
          <img src={slide3} alt="" className="h-96 2xl:w-full 2xl:h-full" />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center  text-2xl">
          <h2 className="text-3xl font-medium font-[roboto] text-center mb-6 2xl:text-5xl">
            Admin Dashboard
          </h2>
          <img src={slide4} alt="" className="h-96 2xl:w-full 2xl:h-full" />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center text-2xl">
          <h2 className="text-3xl font-medium font-[roboto] text-center mb-6 2xl:text-5xl">
            Admin Dashboard
          </h2>
          <img src={slide5} alt="" className="h-96 2xl:w-full 2xl:h-full" />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center  text-2xl">
          <h2 className="text-3xl font-medium font-[roboto] text-center mb-6 2xl:text-5xl">
            Admin Dashboard
          </h2>
          <img src={slide1} alt="" className="h-96 2xl:w-full 2xl:h-full" />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center text-2xl">
          <h2 className="text-3xl font-medium font-[roboto] text-center mb-6 2xl:text-5xl">
            Admin Dashboard
          </h2>
          <img src={slide6} alt="" className="h-96 2xl:w-full 2xl:h-full" />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center  text-2xl">
          <h2 className="text-3xl font-medium font-[roboto] text-center mb-6 2xl:text-5xl">
            Admin Dashboard
          </h2>
          <img src={slide7} alt="" className="h-96 2xl:w-full 2xl:h-full" />
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center text-2xl ">
          <h2 className="text-3xl font-medium font-[roboto] text-center mb-6 2xl:text-5xl">
            Admin Dashboard
          </h2>
          <img src={slide8} alt="" className="h-96 2xl:w-full 2xl:h-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
