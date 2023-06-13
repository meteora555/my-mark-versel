"use client";
import React, { FC } from "react";
import s from "./Search.module.scss";
import { AutoComplete, Input } from "antd";
import Link from "next/link";

interface SearchProps {}

export const Search: FC<SearchProps> = () => {
  const renderTitle = (title: string) => (
    <Link href={`/${title}`}>{title}</Link>
  );

  const renderItem = (title: string, id: number) => ({
    value: title,
    label: (
      <Link className={s.text} href={`/${id}`}>
        {title}
      </Link>
    ),
  });
  const options = [
    {
      label: renderTitle("Курьерские пакеты"),
      options: [
        renderItem(
          "Курьерский пакет 110х210+40 ,без кармана, Толщина 50 мкм",
          1
        ),
      ],
    },
    {
      label: renderTitle("Термоэтикетки"),
      options: [
        renderItem("Термоэтикетки 75*120 мм ЭКО, 300 шт в ролике", 2),
        renderItem(
          "Курьерский пакет 110х210+40 ,без кармана, Толщина 50 мкм",
          3
        ),
      ],
    },
    {
      label: renderTitle("Стрейч пленка"),
      options: [
        renderItem(
          "Стрейч пленка упаковочная, белая 23мкм*2.2кг, высший сорт",
          4
        ),
      ],
    },
  ];
  return (
    <AutoComplete
      className={s.mySearch}
      popupClassName="certain-category-search-dropdown"
      // dropdownMatchSelectWidth={500}
      options={options}
      filterOption
      backfill
    >
      <Input.Search
        className={s.input}
        size="large"
        placeholder="Найти товар"
        enterButton
      />
    </AutoComplete>
  );
};
