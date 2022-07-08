import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function SwiperGambar(props) {
  return (
    <div>
      {/**swiper setting */}
      <Swiper
        className="h-[300px] w-[360px] md:h-full md:w-full rounded-2xl"
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        autoplay={true}
        navigation
        pagination={{ clickable: true }}
      >
        {/**swiper content */}
        {props.images.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="flex justify-center">
              <img
                src={item.image}
                alt=""
                className="h-[300px] w-[360px] md:w-full md:h-full rounded-2xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
