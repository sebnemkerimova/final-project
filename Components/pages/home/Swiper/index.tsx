"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Hero from "@/Components/pages/home/Hero"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

export default function MySwiper() {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      slidesPerView={1}
      loop
      className="mySwiper"
    >
      <SwiperSlide className=''>

        <div>
        <Hero/>
        </div>
      </SwiperSlide>
    
      <SwiperSlide>
      <Hero/>
      </SwiperSlide>
      <SwiperSlide>
      <Hero/>
      </SwiperSlide>
    </Swiper>
  );
}
