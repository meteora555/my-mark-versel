import React, {FC} from 'react';
import s from './Wholesale.module.scss';
import {wholesale} from "@/modules/Products/types";

interface WholesaleProps {
    wholesale: wholesale[]
}

export const Wholesale: FC<WholesaleProps> = ({wholesale}) => {
    return (
        <>
            {
                wholesale === undefined || wholesale.length === 0 ? null
                    : <div className={s.wholesale}>
                        <div className={s.title}>Оптовые скидки</div>
                        <div className={s.block}>
                            {wholesale.sort((a, b) => a.initialAmount - b.initialAmount).map(e => (
                                <div key={e.id} className={s.item}>
                                    {e.initialAmount} шт от {e.price} рублей
                                </div>
                            ))}
                        </div>
                    </div>
            }
        </>
    )
};
