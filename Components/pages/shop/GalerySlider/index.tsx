"use client";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function GalerySlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="product-details-slider">
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="slider-left"
      >
        <SwiperSlide>
          <img src="/images/BarbetonDaisy/Skulen&sansiveria.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/BarbetonDaisy/Kaktus.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/BarbetonDaisy/Skulen&sansiveria.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/BarbetonDaisy/Kaktus.svg" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="slider-hero"
      >
        <SwiperSlide>
          <img src="/images/BarbetonDaisy/bigKaktus.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/BarbetonDaisy/Skulen&sansiveria.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/BarbetonDaisy/bigKaktus.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/BarbetonDaisy/Skulen&sansiveria.svg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
