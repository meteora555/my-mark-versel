"use client";
import React, { FC } from "react";
import s from "./Logo.module.scss";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";

interface LogoProps {
  width: number;
  height: number;
}

export const Logo: FC<LogoProps> = ({ width, height }) => {
  const { theme } = useTheme();
  return (
    <Link href={"/"}>
      <Image
        width={100}
        height={60}
        style={{ width: `${width}px`, height: `${height}px` }}
        className={s.logo}
        src={theme === "light" ? "/image/logo.svg" : "/image/logo-dark.svg"}
        alt={""}
        priority={true}
      />
    </Link>
  );
};
