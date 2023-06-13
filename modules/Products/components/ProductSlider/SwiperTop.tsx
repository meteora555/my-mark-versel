import React, {FC} from "react";
import {ISwiperTop} from "@/modules/Products/types";
import s from "./ProductSlider.module.scss";
import {Title} from "@/components/ui/Title/Title";
import {LeftBtn} from "@/components/ui/LeftBtn/LeftBtn";
import {RightBtn} from "@/components/ui/RightBtn/RightBtn";


const SwiperTop: FC<ISwiperTop> = ({title, nextName, prevName}) => {
    return (
        <div className={s.wrapper}>
            <Title>{title}</Title>
            <LeftBtn className={prevName}/>
            <RightBtn className={nextName}/>
        </div>
    );
};

export default SwiperTop;
