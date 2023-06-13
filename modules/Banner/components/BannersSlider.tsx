"use client";
import { IMainBanner } from "@/modules/Banner/types";
import React, { FC } from "react";
import s from "./Banner.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { Banner } from "@/modules/Banner/components/Banner";
import "swiper/css";
import "swiper/css/pagination";
interface banner {
  banner: IMainBanner[] | [];
}

export const BannersSlider: FC<banner> = ({ banner }) => {
  return (
    <div className={s.sliderBanner}>
      <Swiper
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        modules={[Pagination, Autoplay]}
        pagination={{
          dynamicBullets: true,
          type: "bullets",
          clickable: true,
          el: ".bannerDot",
        }}
        slidesPerView={1}
        spaceBetween={40}
        speed={600}
      >
        {banner.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Banner banner={banner} />
          </SwiperSlide>
        ))}
        <div className="bannerDot"></div>
      </Swiper>
    </div>
  );
};
