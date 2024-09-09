"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Hero from "@/Components/pages/home/Swiper/Hero";

export default function MySwiper() {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      loop={true}
      speed={2500}
      autoplay={{ delay: 500, pauseOnMouseEnter: true }}
      className="mySwiper"
    >
      <SwiperSlide>
        <Hero />
      </SwiperSlide>

      <SwiperSlide>
        <Hero />
      </SwiperSlide>

      <SwiperSlide>
        <Hero />
      </SwiperSlide>
    </Swiper>
  );
}
