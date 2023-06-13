import React, { FC, HTMLAttributes } from "react";
import s from "./RightBtn.module.scss";
import { RightOutlined } from "@ant-design/icons";

interface RightBtn extends HTMLAttributes<HTMLDivElement> {}

export const RightBtn: FC<RightBtn> = (props) => {
  const { className } = props;
  return (
    <div className={`${s.nextE} ${className}`}>
      <RightOutlined rev={""} className={s.icon} />
    </div>
  );
};
