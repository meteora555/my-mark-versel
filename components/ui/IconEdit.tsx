"use client";
import React from "react";
import Icon from "@ant-design/icons";
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

export const IconEdit = (props: Partial<CustomIconComponentProps>) => {
  const icon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1326_25392)">
        <path
          d="M2.66406 13.3332H5.33073L12.3307 6.33321C12.6844 5.97959 12.883 5.49997 12.883 4.99988C12.883 4.49978 12.6844 4.02016 12.3307 3.66654C11.9771 3.31292 11.4975 3.11426 10.9974 3.11426C10.4973 3.11426 10.0177 3.31292 9.66406 3.66654L2.66406 10.6665V13.3332Z"
          stroke="#828282"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 4.33301L11.6667 6.99967"
          stroke="#828282"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1326_25392">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  return <Icon rev={""} component={icon} {...props} />;
};
