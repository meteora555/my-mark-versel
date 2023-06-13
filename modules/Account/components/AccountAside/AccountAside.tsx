"use client";
import {
  ACCOUNT_ROUTE,
  CALLBACK_ROUTE,
  FAVORITES_ROUTE,
  MAIN_ROUTE,
  MY_DELIVERY_ROUTE,
  MY_ORDERS_ROUTE,
} from "@/src/consts/routes";
import Link from "next/link";
import React, { FC } from "react";
import s from "./AccountAside.module.scss";
import { usePathname } from "next/navigation";
import { Button, message } from "antd";
import { useUserStore } from "@/modules/User/store";
import { useRouter } from "next/navigation";

interface AccountAsideProps {}

export const AccountAside: FC<AccountAsideProps> = (props) => {
  const setAuth = useUserStore((store) => store.setAuthStatus);
  const router = useRouter();
  const logoutHandle = () => {
    setAuth(false);
    router.push(MAIN_ROUTE);
    message.info("Вы вышли из аккаунта");
  };
  const pathName = usePathname();
  const routeArrs = [
    {
      name: "Покупки",
      link: MY_ORDERS_ROUTE,
    },
    {
      name: "Мои данные",
      link: ACCOUNT_ROUTE,
    },
    {
      name: "Доставки",
      link: MY_DELIVERY_ROUTE,
    },
    {
      name: "Избранное",
      link: FAVORITES_ROUTE,
    },
    {
      name: "Связаться с поддержкой",
      link: CALLBACK_ROUTE,
    },
  ];
  return (
    <div className={s.accountAside}>
      <ul className={s.list}>
        {routeArrs.map((e, index) => (
          <li
            key={index}
            className={e.link === pathName.slice(1) ? s.item_active : s.item}
          >
            <Link href={"/" + e.link} className={s.link}>
              {e.name}
            </Link>
          </li>
        ))}
      </ul>

      <Button onClick={logoutHandle} className={s.logout} type="text">
        Выйти
      </Button>
    </div>
  );
};
