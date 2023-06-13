import React, {FC} from 'react';
import s from './TextWrapper.module.scss';

interface TextWrapperProps {
    children: React.ReactNode
}

export const TextWrapper: FC<TextWrapperProps> = ({children}) => {
    return (
        <div className={s.textWrapper}>
            {children}
        </div>
    );
};
