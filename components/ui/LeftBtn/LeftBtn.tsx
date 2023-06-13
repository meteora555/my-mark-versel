import React, { FC, HTMLAttributes } from "react";
import s from "./LeftBtn.module.scss";
import { LeftOutlined } from "@ant-design/icons";

interface LeftBtn extends HTMLAttributes<HTMLDivElement> {}

export const LeftBtn: FC<LeftBtn> = (props) => {
  const { className } = props;
  return (
    <div className={`${s.prevE} ${className}`}>
      <LeftOutlined rev={""} className={s.icon} />
    </div>
  );
};
