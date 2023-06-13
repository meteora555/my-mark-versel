import React, { FC } from "react";
import s from "./Banner.module.scss";
import Image from "next/image";
import { IMainBanner } from "@/modules/Banner/types";
import Link from "next/link";
import PreloaderImage from "@/components/ui/PreloaderImage/PreloaderImage";

interface banner {
  banner: IMainBanner;
}

export const Banner: FC<banner> = ({ banner }) => {
  return (
    <div className={s.banner}>
      <div className={s.block}>
        <div className={s.item}>
          <div className={s.title}>{banner.title}</div>
          <div className={s.text}>{banner.subtitle}</div>
          {banner.textLink && banner.link !== undefined ? (
            <Link target="_blank" href={banner.link} className={s.button}>
              {banner.textLink}
            </Link>
          ) : null}
        </div>
        <div className={s.wrapper}>
          <PreloaderImage
            src={banner.imagePath}
            alt={banner.title}
            quality={100}
            sizes={"100%"}
          />
        </div>
      </div>
    </div>
  );
};
