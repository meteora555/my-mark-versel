"use client";
import React, { useEffect, useState } from "react";
import s from "./Dock.module.scss";
import Link from "next/link";
import { Badge, FloatButton, Modal } from "antd";
import Icon, {
  HeartOutlined,
  LoginOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { DockItem } from "@/modules/FixedBtn/components/DockItem";
import { Dock } from "@/modules/FixedBtn/components/index";
import { IconBasket } from "@/components/ui/IconBasket";
import { IconCar } from "@/components/ui/IconCar";
import { ThemeSwitch } from "@/components/ui/ThemeSwitch/ThemeSwitch";
import {
  AUTH_ROUTE,
  CART_ROUTE,
  FAVORITES_ROUTE,
  MY_ORDERS_ROUTE,
} from "@/src/consts/routes";
import { AuthForm } from "@/modules/AuthReg/components/AuthForm/AuthForm";
import { RegForm } from "@/modules/AuthReg/components/RegForm/RegForm";
import { useUserStore } from "@/modules/User/store";
import { ACCOUNT_ROUTE } from "@/src/consts/routes";
import { useFavoritesStore } from "@/modules/Favorites/store";
import { useCartStore } from "@/modules/cart/store";

export const FixedButtons = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);
  const [] = useState<boolean>(false);
  const isLogin = useUserStore((store) => store.isLogin);
  const favoritesCount = useFavoritesStore((store) => store.favorites);
  const productsCount = useCartStore((store) => store.products);

  return (
    <>
      <FloatButton.BackTop
        className={"bottom-[80px]"}
        visibilityHeight={2000}
      />
      <Dock>
        <DockItem>
          {isLogin ? (
            <Link className={s.link} href={`${ACCOUNT_ROUTE}`}>
              <Badge count={0}>
                <UserOutlined rev={""} className={s.icon} />
              </Badge>
            </Link>
          ) : (
            <div onClick={() => setModal(true)} className={s.link}>
              <LoginOutlined rev={""} className={s.buttonLogin} />
            </div>
          )}
        </DockItem>
        <DockItem>
          <Link className={s.link} href={`${CART_ROUTE}`}>
            <Badge count={productsCount.length}>
              <Icon rev={""} component={IconBasket} className={s.icon} />
            </Badge>
          </Link>
        </DockItem>
        <DockItem>
          <Link className={s.link} href={`${FAVORITES_ROUTE}`}>
            <Badge count={favoritesCount.length}>
              <HeartOutlined rev={""} className={s.icon} />
            </Badge>
          </Link>
        </DockItem>
        <DockItem>
          <Link className={s.link} href={`${MY_ORDERS_ROUTE}`}>
            <Badge count={1}>
              <Icon rev={""} component={IconCar} className={s.icon} />
            </Badge>
          </Link>
        </DockItem>
        <DockItem>
          <ThemeSwitch />
        </DockItem>
      </Dock>
      <Modal
        centered
        open={modal}
        onOk={() => setModal(false)}
        onCancel={() => setModal(false)}
      >
        {login ? (
          <RegForm modalHandle={setModal} setLogin={setLogin} />
        ) : (
          <AuthForm modalHandle={setModal} setLogin={setLogin} />
        )}
      </Modal>
    </>
  );
};
