import React, { FC } from "react";
import Link from "next/link";

import s from "./Breadcrumbs.module.scss";
import { IconArrow } from "../IconArrow";

interface BreadcrumbsProps {
  links: {
    name: string;
    href: string;
  }[];
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ links }) => {
  return (
    <div className={s.breadcrumbs}>
      {links.map((_, index) => (
        <div className={s.item} key={_.name}>
          <Link
            className={`${s.link} ${
              index === links.length - 1 && s.inactiveLink
            }`}
            href={_.href}
          >
            {_.name}
          </Link>
          {index < links.length && (
            <span>
              <IconArrow className={s.svg} />
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
