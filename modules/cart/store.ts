import { message } from "antd";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { IProductCard } from "../Products/types";

interface ICartStore {
  products: IProductCard[];
  addToCart: (productCard: IProductCard) => void;
  setProducts: (values: IProductCard[]) => void;
}

export const useCartStore = create<ICartStore>()(
  persist(
    devtools(
      immer((setState) => ({
        products: [],
        addToCart: (productCard: IProductCard) =>
          setState((store) => {
            if (!store.products.find((e) => e.id === productCard.id)) {
              message.success(
                `Товар ${productCard.title} успешно добавлен в корзину`
              );
              store.products.push(productCard);
            } else {
              message.warning(
                `Товар ${productCard.title} успешно удален из корзины`
              );
              store.products = store.products.filter(
                (e) => e.id !== productCard.id
              );
            }
          }),
        setProducts: (productCards: IProductCard[]) => {
          setState((store) => {
            store.products = productCards;
          });
        },
      }))
    ),
    {
      name: "CardProducts",
      version: 1,
    }
  )
);
