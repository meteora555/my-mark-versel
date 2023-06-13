"use client";
import React, { FC } from "react";
import s from "./ProductDetail.module.scss";
import { IProductCard, IProductDetail } from "@/modules/Products/types";
import { ProductDetailImages } from "@/modules/Products/components/ProductDetail/ProductDetailImages";
import { IconCode } from "@/components/ui/IconCode";
import Btn from "@/components/ui/Btn/Btn";
import { Wholesale } from "@/components/Wholesale/Wholesale";
import { ProductDetailTab } from "@/modules/Products/components/ProductDetail/ProductDetailTab";
import { useProductStore } from "@/modules/Products/store";
import { Button } from "antd";

interface ProductDetailProps {
  product: IProductDetail;
}

export const ProductDetail: FC<ProductDetailProps> = ({ product }) => {
  const addProduct = useProductStore((state) => state.addProduct);
  const productDetail: IProductCard = {
    id: product.id,
    title: product.title,
    imagePath: product.imagePath,
    price: product.price,
    discountPrice: product.discountPrice,
    isOrder: product.isOrder,
    isFavorite: product.isFavorite,
  };
  addProduct(productDetail);
  return (
    <div className={s.productDetail}>
      <ProductDetailImages
        key={product.id}
        productImages={product.productImages}
        imagePath={product.imagePath}
      />
      <div className={s.block}>
        <div className={s.code}>
          <IconCode />
          <div className={s.codeText}>{`Код продукта: ${product.code}`}</div>
        </div>
        <h1 className={s.title}>{product.title}</h1>
        <div className={s.item}>
          <div className={s.text}>Цена :</div>
          <p className={s.price}>{product.price} ₽</p>
          {product.discountPrice && product.discountPrice === product.price ? (
            "1"
          ) : "2" !== null ? (
            <p className={s.discount}>{product.discountPrice} ₽</p>
          ) : null}
        </div>
        <div className={s.item}>
          <div className={s.text}>Цвет :</div>
          <div className={s.color} style={{ background: product.color }}></div>
        </div>
        <div className={s.buttons}>
          <Button
            className={!product.isFavorite ? s.btn_active : s.btn}
            type="primary"
          >
            В избранное
          </Button>
          <Button
            className={!product.isFavorite ? s.btn_active : s.btn}
            type="primary"
          >
            В корзину
          </Button>
        </div>
        <Wholesale wholesale={product.priceColumns} />
        <ProductDetailTab
          description={product.description}
          propertyValues={product.propertyValues}
        />
      </div>
    </div>
  );
};
