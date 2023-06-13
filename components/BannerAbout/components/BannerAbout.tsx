import React, { FC } from "react";
import s from "./BannerAbout.module.scss";
import Image from "next/image";
import PreloaderImage from "@/components/ui/PreloaderImage/PreloaderImage";
import { AboutBannerRoot } from "../types";

interface BannerAboutProps {
  data: AboutBannerRoot;
}

export const BannerAbout: FC<BannerAboutProps> = ({ data }) => {
  const items = [
    {
      text: "Медиапланирование синхронизирует медийный канал",
      svg: "/image/about/1.svg",
    },
    {
      text: "Повышение жизненных стандартов",
      svg: "/image/about/2.svg",
    },
    {
      text: " Целевой сегмент рынка",
      svg: "/image/about/3.svg",
    },
    {
      text: "ретроконверсия национального наследия",
      svg: "/image/about/4.svg",
    },
  ];
  const conviceData = [
    {
      title: "Удобный самовывоз",
      imagePath: "/image/about/bannerConvince1.png",
    },
    {
      title: "Быстрая доставка",
      imagePath: "/image/about/bannerConvince2.png",
    },
    {
      title: "Широкий ассортимент",
      imagePath: "/image/about/bannerConvince3.png",
    },
  ];
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.bannerMain}>
          <div className={s.info}>
            <h2 className={s.info__title}>{data.bannerTitle}</h2>
            <p className={s.info__text}>{data.bannerContent}</p>
          </div>
          <PreloaderImage
            className={s.imgWrapper}
            src={data.bannerImagePath}
            alt={data.bannerTitle}
            objectFit="contain"
            quality={100}
          />
        </div>
        <div className={s.bannerConvince}>
          {conviceData.map((e, index) => (
            <div key={index} className={s.bannerConvince__block}>
              <h2 className={s.bannerConvince__title}>{e.title}</h2>
              <PreloaderImage
                className={s.bannerConvince__imgWrapper}
                src={e.imagePath}
                alt={e.title}
                objectFit="cover"
                quality={100}
                sizes={"100%"}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={s.bannerAbout}>
        <Image
          width={1200}
          height={800}
          quality={100}
          src={"/image/about/about.png"}
          className={s.img}
          alt={"banner"}
        />
        <div className={s.container}>
          <div className={s.title}>Почему мы</div>
          <div className={s.block}>
            {items.map((e) => (
              <div key={e.text} className={s.item}>
                <Image
                  width={50}
                  height={50}
                  quality={100}
                  className={s.svg}
                  src={e.svg}
                  alt={"icon"}
                />
                <div className={s.text}>{e.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
