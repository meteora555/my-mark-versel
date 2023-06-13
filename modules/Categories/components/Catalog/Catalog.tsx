import React, { FC } from "react";
import s from "./Catalog.module.scss";
import { IProductCard } from "@/modules/Products/types";
import { ProductCard } from "@/modules/Products/components/ProductCard/ProductCard";

interface CatalogProps {
  products: IProductCard[];
}

export const Catalog: FC<CatalogProps> = ({ products }) => {
  return (
    <div className={s.catalog}>
      {products.map((e) => (
        <ProductCard key={e.id} product={e} />
      ))}
    </div>
  );
};
