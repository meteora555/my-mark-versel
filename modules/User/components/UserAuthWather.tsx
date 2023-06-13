"use client";
import React, { FC, useEffect } from "react";
import { getCookie, setCookie } from "cookies-next";
import { useUserStore } from "../store";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getUserFetcher } from "../api";
import { updateTokenFetcher } from "@/modules/AuthReg/api";

interface UserAuthWatherProps {}

export function UserAuthWatcher({ children }: { children: React.ReactNode }) {
  const accessToken = getCookie("accessToken");
  const refreshToken = getCookie("refreshToken");

  const setUser = useUserStore((store) => store.setUser);
  const isLogged = useUserStore((store) => store.isLogin);
  const isLoggedOut = useUserStore((store) => store.isUserLoggedOut);
  const setAuth = useUserStore((store) => store.setAuthStatus);

  const { refetch: getUserTriger } = useQuery(
    ["getUser"],
    () => getUserFetcher(accessToken),
    {
      enabled: isLogged ? true : false,
      onSuccess: (data) => setUser(data),
    }
  );

  const { refetch: updateTokenTrigger } = useQuery(
    ["updateToken"],
    () => updateTokenFetcher(refreshToken, accessToken),
    {
      enabled: refreshToken ? true : false,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setCookie("accessToken", data.accessToken);
        setCookie("refreshToken", data.refreshToken);
        setAuth(true);
      },
      onError: () => {
        setAuth(false);
      },
    }
  );

  useEffect(() => {
    if (isLoggedOut) {
      setAuth(false);
    }
  }, [isLoggedOut]);

  return <>{children}</>;
}
