"use client";
import React from "react";
import Icon from "@ant-design/icons";
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

export const IconLine = (props: Partial<CustomIconComponentProps>) => {
  const icon = () => (
    <svg
      width="1em"
      height="1"
      viewBox="0 0 24 1"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="1" fill="currentColor" />
    </svg>
  );
  return <Icon rev={""} component={icon} {...props} />;
};
