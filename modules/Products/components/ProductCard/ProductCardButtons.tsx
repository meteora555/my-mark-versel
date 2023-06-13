"use client";
import React, { FC } from "react";
import s from "@/modules/Products/components/ProductCard/ProductCard.module.scss";
import { CheckCircleOutlined, HeartOutlined } from "@ant-design/icons";
import { IconBasket } from "@/components/ui/IconBasket";
import { useFavoritesStore } from "@/modules/Favorites/store";
import { IProductCard } from "../../types";
import { Button } from "antd";
import { IconHeart } from "@/components/ui/IconHeart";
import { IconBas } from "@/components/ui/IconBas";
import { useCartStore } from "@/modules/cart/store";
import { AnimatePresence, motion } from "framer-motion";

interface ProductCardButtonsProps {
  product: IProductCard;
}

const ProductCardButtons: FC<ProductCardButtonsProps> = ({ product }) => {
  const favorites = useFavoritesStore((store) => store.favorites);
  const toggleToFavorite = useFavoritesStore((store) => store.addToFavorites);
  const isInFavorite = (id: string) => {
    const checkFavorite = favorites.some((e) => e.id === id);
    return checkFavorite;
  };
  const cartProducts = useCartStore((store) => store.products);
  const toggleToCart = useCartStore((store) => store.addToCart);
  const isInCart = (id: string) => {
    const checkCart = cartProducts.some((e) => e.id === id);
    return checkCart;
  };
  return (
    <>
      <AnimatePresence mode="sync">
        <motion.div
          className={s.buttons}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Button
            type="text"
            onClick={() => toggleToFavorite(product)}
            className={s.btn}
          >
            <IconHeart
              className={isInFavorite(product.id) ? s.icon_active : s.icon}
            />
          </Button>
          <Button
            onClick={() => toggleToCart(product)}
            type="text"
            className={s.btn}
          >
            {!isInCart(product.id) ? (
              <IconBasket className={isInCart(product.id) ? "" : ""} />
            ) : (
              <CheckCircleOutlined rev={""} />
            )}
          </Button>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ProductCardButtons;
