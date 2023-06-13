import React, {FC} from 'react';
import s from './Spinner.module.scss';
import {Spin} from "antd";

interface SpinnerProps {

}

export const Spinner: FC<SpinnerProps> = (props) => {
    return (
        <div className={s.wrapper}>
            <Spin size={'large'}/>
        </div>
    );
};
