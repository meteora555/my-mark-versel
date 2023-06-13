import React from 'react';
import s from './JoyTech.module.scss';
import Link from "next/link";


export const JoyTech = () => {
    return (
        <Link target={'_blank'} className={s.joyTech}
              href="https://mail.google.com/">Разработано <span>JoyTech</span></Link>
    );
};
