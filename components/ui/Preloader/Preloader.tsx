"use client";
import React, { FC } from "react";
import s from "./Preloader.module.scss";
import Lottie from "lottie-react";
import preloader from "src/lottie/preloader.json";

export const Preloader: FC = () => {
    return (
        <div className={s.preloader}>
            <Lottie
                className={s.lottie}
                animationData={preloader}
                loop={true}
            />
        </div>
    );
};
