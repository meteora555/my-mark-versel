import React, { FC } from "react";
import s from "./Categories.module.scss";
import { ICategoryCard } from "@/modules/Categories/types";
import Link from "next/link";
import { rgbDataURL } from "@/src/helpers/blur";
import Image from "next/image";
import PreloaderImage from "@/components/ui/PreloaderImage/PreloaderImage";

interface CategoryProps {
  category: ICategoryCard;
}

export const CategoryCard: FC<CategoryProps> = ({ category }) => {
  return (
    <Link
      key={category.id}
      href={`categories/${category.id}`}
      className={s.item}
    >
      <PreloaderImage
        className={s.img}
        src={category.imagePath}
        alt={category.title}
        objectFit="contain"
        quality={100}
      />
      <div className={s.text}>{category.title}</div>
    </Link>
  );
};
