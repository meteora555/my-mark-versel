"use client";
import React, { FC } from "react";
import s from "./ProductDetail.module.scss";
import { IProductDetail } from "@/modules/Products/types";
import { Image, Spin } from "antd";
import { fallback } from "@/src/fallback";
import { Spinner } from "@/components/ui/Spinner/Spinner";

type ProductDetailImages = Pick<IProductDetail, "imagePath" | "productImages">;

export const ProductDetailImages: FC<ProductDetailImages> = ({
  productImages,
  imagePath,
}) => {
  return (
    <div className={s.imagesContainer}>
      <Image.PreviewGroup>
        <div className={s.imageBlock}>
          <Image
            className={s.imagesMain}
            alt={"detailsProductImg"}
            src={imagePath}
            fallback={fallback}
            placeholder={<Spinner />}
          />
        </div>
        <div className={s.imagesFlex}>
          {productImages.map((e) => (
            <div key={e.id} className={s.imageItem}>
              <Image
                src={e.imagePath}
                alt={"detailsProductImg"}
                className={s.imagesMin}
                placeholder={<Spinner />}
                fallback={fallback}
              />
            </div>
          ))}
        </div>
      </Image.PreviewGroup>
    </div>
  );
};
