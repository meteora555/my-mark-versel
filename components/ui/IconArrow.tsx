"use client";
import React from "react";
import Icon, { RightOutlined } from "@ant-design/icons";
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

export const IconArrow = (props: Partial<CustomIconComponentProps>) => {
  const IconArrow = () => <RightOutlined rev="" />;
  return (
    <Icon
      rev={""}
      className={props.className}
      component={IconArrow}
      {...props}
    />
  );
};
