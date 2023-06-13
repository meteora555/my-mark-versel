import React, { FC } from "react";
import s from "./Footer.module.scss";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo/Logo";
import { JoyTech } from "@/components/ui/JoyTech/JoyTech";

interface FooterProps {}

export const Footer: FC<FooterProps> = (props) => {
  return (
    <footer className={s.footer}>
      <div className={s.block}>
        <div className={s.item}>
          <Logo width={100} height={60} />
          <div className={s.copyright}>© 2022 MyMark. Все права защищены.</div>
        </div>
        <div className={s.flex}>
          <div className={s.wrapper}>
            <Link className={s.link} href="/categories">
              Каталог
            </Link>
            <Link className={s.link} href="/services">
              Услуги
            </Link>
            <Link className={s.link} href="/about">
              О нас
            </Link>
          </div>
          <div className={s.wrapper}>
            <Link className={s.link} href="/delivery">
              Оплата и доставка
            </Link>
            <Link className={s.link} href="/contacts">
              Контакты
            </Link>
            <Link className={s.link} href="/lawyer">
              Юридическая информация
            </Link>
          </div>
        </div>
        <div className={s.wrapper}>
          <Link className={s.link} href="tel:+74958186107">
            +74958186107
          </Link>
          <Link className={s.link} href="mailto:info@my-mark.ru">
            info@my-mark.ru
          </Link>
          <JoyTech />
        </div>
      </div>
    </footer>
  );
};
