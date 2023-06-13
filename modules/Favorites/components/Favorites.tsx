"use client";
import React, { FC } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs/Breadcrumbs";
import s from "./Favorites.module.scss";
import { useFavoritesStore } from "../store";
import { ProductCard } from "@/modules/Products/components/ProductCard/ProductCard";

type FavoritesProps = {
  breadcrumbs: { name: string; href: string }[];
};

const Favorites: FC<FavoritesProps> = ({ breadcrumbs }) => {
  const favorites = useFavoritesStore((store) => store.favorites);
  return (
    <>
      <Breadcrumbs links={breadcrumbs} />
      <div className={s.favorites}>
        <div className={s.wrapper}>
          {favorites.map((e) => (
            <ProductCard key={e.id} product={e} />
          ))}
        </div>
        {favorites.length === 0 && (
          <>
            <h2 className={s.title}>Избранное</h2>
            <p className={s.text}>Добавьте товары в избранное.</p>
          </>
        )}
      </div>
    </>
  );
};
export default Favorites;
