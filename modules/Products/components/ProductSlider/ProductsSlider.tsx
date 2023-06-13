"use client";
import React, { FC } from "react";
import { ProductSlider } from "@/modules/Products/types";
import { SwiperSlide } from "swiper/react";
import s from "./ProductSlider.module.scss";
import { ProductCard } from "@/modules/Products/components/ProductCard/ProductCard";
import { ProductCardSkeleton } from "@/modules/Products/components/ProductCard/ProductCardSkeleton";
import { getProducts } from "@/modules/Products/api";
import { NotFound } from "@/components/ui/NotFound/NotFound";
import SwiperSettings from "@/modules/Products/components/ProductSlider/SwiperSettings";
import SwiperTop from "@/modules/Products/components/ProductSlider/SwiperTop";
import useProductsApi from "../../hook";
const ProductsSlider: FC<ProductSlider> = (props) => {
  const {isLoading,error,data:products} = useProductsApi(props.url)
  const skeletons = Array.from({ length: 6 }).map((e, index) => (
    <ProductCardSkeleton key={index} />
  ));
  return (
    <div className={s.swiperCard}>
      <div className={s.item}>
        <SwiperTop
          title={props.title}
          nextName={props.nextName}
          prevName={props.prevName}
        />
      </div>
      <SwiperSettings nextName={props.nextName} prevName={props.prevName}>
        {isLoading
          ? skeletons.map((e, index) => (
              <SwiperSlide key={index} virtualIndex={index}>
                {e}
              </SwiperSlide>
            ))
          : null}
        {error ? <NotFound>Response not found</NotFound> : null}
        {products !== undefined
          ? products.map((e, index) => (
              <SwiperSlide key={index} virtualIndex={index}>
                <ProductCard product={e} />
              </SwiperSlide>
            ))
          : null}
      </SwiperSettings>
    </div>
  );
};

export default ProductsSlider;
