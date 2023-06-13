import { devtools } from "zustand/middleware";
import { IUserRootObject } from "./types";
import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { deleteCookie } from "cookies-next";
interface IUserStore {
  isLogin: boolean;
  isUserLoggedOut: boolean;
  user: IUserRootObject;
  setAuthStatus: (value: boolean) => void;
  setUser: (value: IUserRootObject) => void;
}

export const useUserStore = create<IUserStore>()(
  devtools(
    immer((setState) => ({
      isLogin: false,
      isUserLoggedOut: false,
      user: {
        name: "",
        email: "",
        favoriteProducts: [],
        feedbackReactions: [],
        id: "",
        imagePath: "",
        orders: [],
        phoneNumber: "",
        productFeedbacks: [],
        registrationDate: "",
        userName: "",
      },
      setAuthStatus: (loggedStatus) =>
        setState((store) => {
          store.isLogin = loggedStatus;
          if (loggedStatus) {
            store.isUserLoggedOut = false;
          } else {
            deleteCookie("accessToken");
            deleteCookie("refreshToken");
            store.isUserLoggedOut = true;
          }
        }),
      setUser: (value) =>
        setState((store) => {
          store.user = value;
        }),
    }))
  )
);
