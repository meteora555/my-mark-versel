import React, { FC } from "react";
import s from "./ProductCard.module.scss";
import { IProductCard } from "@/modules/Products/types";
import Image from "next/image";
import ProductCardButtons from "@/modules/Products/components/ProductCard/ProductCardButtons";
import { rgbDataURL } from "@/src/helpers/blur";
import Link from "next/link";
import { priceFormatter } from "@/src/helpers/currency";
import PreloaderImage from "@/components/ui/PreloaderImage/PreloaderImage";

interface ProductCard {
  product: IProductCard;
}

export const ProductCard: FC<ProductCard> = ({ product }) => {
  const checkPrice = (price: number, discountPrice: number) => {
    if (price > discountPrice) {
      return price;
    } else {
      return discountPrice;
    }
  };
  return (
    <div className={s.product}>
      <Link href={`/product/${product.id}`}>
        <Image
          className={s.img}
          src={product.imagePath}
          alt={"card"}
          width={200}
          height={200}
          quality={100}
          placeholder={"blur"}
          blurDataURL={rgbDataURL()}
        />
      </Link>

      <div className={s.block}>
        <div className={`${s.title} line-clamp-2`}>{product.title}</div>
        <div className={s.item}>
          <div className={s.price}>
            {priceFormatter(
              Number(product.discountPrice) && Number(product.discountPrice)
            )}
          </div>
          <div className={s.sales}>{priceFormatter(product.price)}</div>
        </div>
        <ProductCardButtons product={product} />
      </div>
    </div>
  );
};
