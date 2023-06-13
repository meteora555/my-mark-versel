import React, { FC } from "react";
import s from "./NotFound.module.scss";

interface NotFoundProps {
  children: string;
}

export const NotFound: FC<NotFoundProps> = ({ children }) => {
  return <div className={s.notFound}>{children}</div>;
};
