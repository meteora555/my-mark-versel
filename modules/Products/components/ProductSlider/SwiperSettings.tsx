"use client";
import React, { FC } from "react";
import { Swiper } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import s from "./ProductSlider.module.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/css/virtual";

interface SwiperSettingsProps {
  children: React.ReactNode;
  nextName: string;
  prevName: string;
}

const ProductsReviewed: FC<SwiperSettingsProps> = ({
  children,
  prevName,
  nextName,
}) => {
  return (
    <Swiper
      className={s.slider}
      navigation={{
        nextEl: `.${nextName}`,
        prevEl: `.${prevName}`,
      }}
      spaceBetween={40}
      allowTouchMove={true}
      modules={[Navigation, Autoplay]}
      speed={600}
      autoplay={{
        delay: 1200,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        769: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 40,
        },
      }}
    >
      {children}
    </Swiper>
  );
};

export default ProductsReviewed;
