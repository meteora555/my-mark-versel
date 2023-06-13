import React, { FC } from "react";
import s from "./Services.module.scss";
import { IService } from "@/modules/Services/types";
import { rgbDataURL } from "@/src/helpers/blur";
import Image from "next/image";
import Link from "next/link";
import Btn from "@/components/ui/Btn/Btn";
import PreloaderImage from "@/components/ui/PreloaderImage/PreloaderImage";

interface ServicesProps {
  services: IService[];
}

export const Services: FC<ServicesProps> = ({ services }) => {
  return (
    <>
      <div className={s.services}>
        {services.map((e) => (
          <div key={e.id} className={s.block}>
            <PreloaderImage
              src={e.imagePath}
              alt={e.title}
              quality={100}
              sizes={"100%"}
            />
            <div className={s.item}>
              <span>
                <div className={s.title}>{e.title}</div>
                <div className={s.text}>{e.text}</div>
              </span>
              {e.link ? (
                <Link href={e.link} target={"_blank"}>
                  <Btn>Подробнее</Btn>
                </Link>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
