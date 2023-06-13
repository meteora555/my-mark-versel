"use client";
import React, { FC } from "react";
import s from "./Categories.module.scss";
import { CategoryCard } from "@/modules/Categories/components/CategoryCard";
import { ICategoryCard } from "@/modules/Categories/types";
import { Title } from "@/components/ui/Title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/grid";
import { LeftBtn } from "@/components/ui/LeftBtn/LeftBtn";
import { RightBtn } from "@/components/ui/RightBtn/RightBtn";

interface CategoriesProps {
  title: string;
  categories: ICategoryCard[];
  gridRows: number;
}

export const CategoriesSlider: FC<CategoriesProps> = ({
  title,
  categories,
  gridRows,
}) => {
  return (
    <div className={s.categories}>
      <div className={s.flex}>
        <Title>{title}</Title>
        <LeftBtn className={"categoryPrev"} />
        <RightBtn className={"categoryNext"} />
      </div>
      <Swiper
        navigation={{ nextEl: ".categoryNext", prevEl: ".categoryPrev" }}
        spaceBetween={40}
        allowTouchMove={true}
        modules={[Navigation, Grid]}
        speed={600}
        breakpoints={{
          576: {
            grid: { rows: 2, fill: "row" },
            slidesPerView: 1,
            spaceBetween: 20,
          },
          769: {
            grid: { rows: 2, fill: "row" },
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            grid: { rows: gridRows, fill: "row" },
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {categories.map((e) => (
          <SwiperSlide key={e.id}>
            <CategoryCard key={e.id} category={e} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
