"use client";
import React, { FC } from "react";
import s from "./ProductDetail.module.scss";
import { Tabs, TabsProps } from "antd";
import { IProductDetail } from "@/modules/Products/types";
import parse from "html-react-parser";

type ProductDetailTab = Pick<IProductDetail, "description" | "propertyValues">;

export const ProductDetailTab: FC<ProductDetailTab> = ({
  description,
  propertyValues,
}) => {
  const feature = propertyValues.map((e, index) => (
    <div key={index} className={s.feature}>
      <div className={s.featureTitle}>{e.propertyType.title}</div>
      <div className={s.dots}></div>
      <div className={s.featureValue}>{e.value}</div>
    </div>
  ));
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <div className={s.tabTitle}>Описание</div>,
      children: <div className={s.description}>{parse(description)}</div>,
      disabled: description === "",
    },
    {
      key: "2",
      label: <div className={s.tabTitle}>Характеристики</div>,
      children: <>{feature}</>,
      disabled: propertyValues.length <= 0,
    },
    {
      key: "3",
      label: <div className={s.tabTitle}>Отзывы</div>,
      children: `Отзывов нет`,
    },
  ];
  return (
    <Tabs
      size={"large"}
      defaultActiveKey="1"
      items={items}
      className={s.tabs}
      centered={true}
    />
  );
};
