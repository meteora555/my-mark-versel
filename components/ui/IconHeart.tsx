"use client";
import React from "react";
import Icon from "@ant-design/icons";
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

export const IconHeart = (props: Partial<CustomIconComponentProps>) => {
  const icon = () => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 28 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.05 2.76258C24.4116 2.12384 23.6535 1.61714 22.8192 1.27144C21.9849 0.925737 21.0906 0.747803 20.1875 0.747803C19.2844 0.747803 18.3902 0.925737 17.5558 1.27144C16.7215 1.61714 15.9635 2.12384 15.325 2.76258L14 4.08758L12.675 2.76258C11.3854 1.47297 9.63632 0.748471 7.81253 0.748471C5.98874 0.748471 4.23964 1.47297 2.95003 2.76258C1.66041 4.0522 0.935913 5.80129 0.935913 7.62508C0.935913 9.44888 1.66041 11.198 2.95003 12.4876L4.27503 13.8126L14 23.5376L23.725 13.8126L25.05 12.4876C25.6888 11.8491 26.1955 11.0911 26.5412 10.2568C26.8869 9.42245 27.0648 8.52819 27.0648 7.62508C27.0648 6.72197 26.8869 5.82771 26.5412 4.99339C26.1955 4.15907 25.6888 3.40103 25.05 2.76258Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return <Icon rev={""} component={icon} {...props} />;
};
