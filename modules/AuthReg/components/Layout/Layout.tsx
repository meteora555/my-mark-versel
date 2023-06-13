import React, {FC} from 'react';
import s from './Layout.module.scss';


interface Layout {
    children:React.ReactNode
}
export const Layout:FC<Layout> = ({children}) => {
    return (
        <div className={s.layout}>
            <div className={`${s.light}`}></div>
            {children}
        </div>
    );
};
