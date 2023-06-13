import React from "react";
import s from "./Btn.module.scss";
import { ComponentProps, ElementType } from "react";

type ButtonOwnProps<E extends ElementType = ElementType> = {
    children: string;
    htmlTypeButton?: string;
    tag?: E;
};
type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
    Omit<ComponentProps<E>, keyof ButtonOwnProps>;
const defaultElement = "button";
export default function Btn<E extends ElementType = typeof defaultElement>({
    children,
    tag,
    isCancel,
    htmlTypeButton,
    ...otherProps
}: ButtonProps<E>) {
    const TagName = tag || defaultElement;
    return (
        <TagName className={`${s.myButton}`} {...otherProps}>
            {children}
        </TagName>
    );
}
