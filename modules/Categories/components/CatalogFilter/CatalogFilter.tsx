"use client";
import React, { FC, useEffect, useState } from "react";
import s from "./CatalogFilter.module.scss";
import { useMedia } from "react-use";
import { Button, Checkbox, Drawer, Form, Input, Radio, Slider } from "antd";
import { useForm } from "antd/lib/form/Form";
import { Collapse } from "antd";
const { Panel } = Collapse;

import { IProperty } from "../../types";
import { IconLine } from "@/components/ui/IconLine";

interface CatalogFilterProps {
  filterOption: IProperty[][];
}

export const CatalogFilter: FC<CatalogFilterProps> = ({ filterOption }) => {
  const isDesktop = useMedia("(min-width: 830px)");
  const [form] = Form.useForm();
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [sort, setSort] = useState(0);
  const sortBy = [
    "Популярность",
    "Новизна",
    "Цена по возростанию",
    "Цена по убыванию",
  ];
  useEffect(() => {
    console.log(filterOption);
  }, []);

  const onChange = (value: [number, number]) => {
    console.log("onChange: ", value);
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  };
  const onChangeCollapse = (key: string | string[]) => {
    console.log(key);
  };

  const handleFilter = () => {
    console.log("handleFilter");
  };

  const formFilter = (
    <Form form={form} className={s.filterCatalog} layout={"vertical"}>
      <div className={s.head}>
        <h3 className={s.head__title}>Фильтр</h3>
        <button
          className={s.head__button}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          очистить
        </button>
      </div>
      <span className={s.span}>Цена</span>
      <Slider
        range
        step={10}
        min={10}
        max={1000}
        defaultValue={[10, 500]}
        onChange={onChange}
      />
      <div className={s.price}>
        <Input
          min={0}
          max={maxPrice}
          step={100}
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
        <IconLine className={s.line} />
        <Input
          min={0}
          max={maxPrice}
          step={100}
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>

      <Collapse
        className={s.collapse}
        defaultActiveKey={["1"]}
        onChange={onChangeCollapse}
        expandIconPosition={"end"}
      >
        <Panel header="Сортировка" key="1">
          <Radio.Group
            className={s.sortRadio}
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            {sortBy.map((e, index) => (
              <Radio key={index} value={index} className={s.sortRadioValue}>
                {e}
              </Radio>
            ))}
          </Radio.Group>
        </Panel>

        {filterOption.map((e) =>
          e.map((value) => (
            <>
              <Panel key={value.propertyTypeId} header={value.propertyTypeName}>
                <div className={s.option}>
                  <Checkbox />
                  <p className={s.option__text}>{value.value}</p>
                </div>
              </Panel>
            </>
          ))
        )}
      </Collapse>

      <Button
        // loading={isFiltering}
        type="primary"
        className={s.button}
        onClick={(e) => {
          // e.preventDefault();
          handleFilter();
        }}
      >
        Применить
      </Button>
    </Form>
  );
  return (
    <>
      {isDesktop ? (
        formFilter
      ) : (
        <Drawer
          open={filterOpen}
          onClose={() => setFilterOpen(false)}
          width={"100%"}
        >
          {formFilter}
        </Drawer>
      )}
    </>
  );
};
