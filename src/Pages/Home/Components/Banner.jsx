import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper";

const Banner = () => {
  return (
    <div className="sm:block">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        autoplay={true}
      >
        <SwiperSlide>
          <img src="/Imgs/idul-adha.png" alt="Banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Imgs/banner-tengah.png" alt="Banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Imgs/Imlek.png" alt="Banner" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
