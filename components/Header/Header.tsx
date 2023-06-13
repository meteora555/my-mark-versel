"use client";
import React, { FC } from "react";
import s from "./Header.module.scss";
import { Logo } from "@/components/ui/Logo/Logo";
import Link from "next/link";
import { Search } from "@/components/Search/Search";
import {
  ABOUT_ROUTE,
  CATEGORIES_ROUTE,
  CONTACTS_ROUTE,
  DELIVERY_ROUTE,
  SERVICES_ROUTE,
} from "@/src/consts/routes";
import { usePathname } from "next/navigation";
import { useUserStore } from "@/modules/User/store";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const pathName = usePathname();
  const isLogin = useUserStore((store) => store.isLogin);
  const routeArrs = [
    {
      name: "Каталог",
      link: CATEGORIES_ROUTE,
    },
    {
      name: "Услуги",
      link: SERVICES_ROUTE,
    },
    {
      name: "О нас",
      link: ABOUT_ROUTE,
    },
    {
      name: "Оплата и доставка",
      link: DELIVERY_ROUTE,
    },
    {
      name: "Контакты",
      link: CONTACTS_ROUTE,
    },
  ];
  return (
    <header className={s.header}>
      <div className={s.block}>
        <div className={s.item}>
          <Logo width={100} height={60} />
          <nav className={s.nav}>
            {routeArrs.map((e, index) => (
              <Link
                key={index}
                className={
                  e.link === pathName.slice(1) ? s.link_active : s.link
                }
                href={e.link}
              >
                {e.name}
              </Link>
            ))}
          </nav>
        </div>
        <Search />
      </div>
    </header>
  );
};
