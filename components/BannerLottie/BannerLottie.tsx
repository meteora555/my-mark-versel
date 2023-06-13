'use client'
import React, {FC} from 'react';
import s from './BannerLottie.module.scss';
import {Title} from "@/components/ui/Title/Title";
import Lottie from "lottie-react";
import Link from "next/link";

interface BannerClientProps {
    json: any
    background: string
    title: string
    link?: string
    linkName?: string
    isMargin?: boolean
}

export const BannerLottie: FC<BannerClientProps> = ({json, background, title, linkName, link, isMargin}) => {
    return (
        <div className={isMargin ? s.banner : ''}>
            <div className="container">
                <div className={s.item}>
                    <Title>{title}</Title>
                    {
                        link ? <Link className={s.link} href={link}>{linkName}</Link> : null
                    }
                </div>

            </div>
            <div className={s.block} style={{background: background}}>
                <Lottie className={s.lottie} animationData={json} loop={true}/>
            </div>
        </div>
    );
};
