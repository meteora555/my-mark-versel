"use client";
import React, {FC} from "react";
import {ISwiperTop} from "@/modules/Products/types";
import {SwiperSlide} from "swiper/react";
import s from "./ProductSlider.module.scss";
import {ProductCard} from "@/modules/Products/components/ProductCard/ProductCard";
import SwiperSettings from "@/modules/Products/components/ProductSlider/SwiperSettings";
import SwiperTop from "@/modules/Products/components/ProductSlider/SwiperTop";
import {useProductStore} from "@/modules/Products/store";


const ProductsReviewed: FC<ISwiperTop> = (props) => {
    const reviewed = useProductStore(state => (state.reviewed))
    const clear = useProductStore(state => (state.clearReviewed))
    return (
        <>
            {
                reviewed.length > 0
                    ? <div className={s.swiperCard}>
                        <div className={s.item}>
                            <SwiperTop title={props.title} nextName={props.nextName} prevName={props.prevName}/>
                            <div onClick={clear} className={s.link}>Очистить</div>
                        </div>
                        <SwiperSettings nextName={props.nextName} prevName={props.prevName}>
                            {
                                reviewed.map((e, index) => (
                                    <SwiperSlide key={index}>
                                        <ProductCard product={e}/>
                                    </SwiperSlide>
                                ))
                            }
                        </SwiperSettings>
                    </div>
                    : null

            }
        </>
    )
}
export default ProductsReviewed
