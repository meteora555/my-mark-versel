import { devtools, persist } from "zustand/middleware";
import { IProductCard } from "../Products/types";
import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { message } from "antd";

interface IFavoritesStore {
  favorites: IProductCard[];
  setFavorites: (values: IProductCard[]) => void;
  addToFavorites: (productCard: IProductCard) => void;
}

export const useFavoritesStore = create<IFavoritesStore>()(
  persist(
    devtools(
      immer((setState) => ({
        favorites: [],
        addToFavorites: (productCard: IProductCard) =>
          setState((store) => {
            if (!store.favorites.find((e) => e.id === productCard.id)) {
              message.success(
                `Товар ${productCard.title} успешно добавлен в избранное`
              );
              store.favorites.push(productCard);
            } else {
              message.warning(
                `Товар ${productCard.title} успешно удален из списка избранного`
              );
              store.favorites = store.favorites.filter(
                (e) => e.id !== productCard.id
              );
            }
          }),
        setFavorites: (productCards: IProductCard[]) =>
          setState((store) => {
            store.favorites = productCards;
          }),
      }))
    ),
    {
      name: "Favorites",
      version: 1,
    }
  )
);
