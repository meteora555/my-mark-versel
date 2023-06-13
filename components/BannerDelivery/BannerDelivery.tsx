import React, {FC} from 'react';
import s from './BannerDelivery.module.scss';
import Image from "next/image";

interface BannerDeliveryProps {

}

export const BannerDelivery: FC<BannerDeliveryProps> = () => {
    const images = [
        {
            src: '/image/bank/maestro.png'
        },
        {
            src: '/image/bank/mastercard.png'
        },
        {
            src: '/image/bank/visa.png'
        },
        {
            src: '/image/bank/mir.png'
        },
        {
            src: '/image/bank/qron.png'
        },
    ]
    return (
        <div className={s.bannerDelivery}>
            <div className={s.flex}>
                {images.map(e => (
                    <Image key={e.src} width={200} height={200} quality={100} className={s.img} src={e.src}
                           alt={'bank'}/>
                ))}
            </div>
        </div>
    );
};
