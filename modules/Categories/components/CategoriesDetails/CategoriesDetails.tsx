"use client";
import React, { FC, useEffect, useState } from "react";
import s from "./CategoriesDetails.module.scss";
import { CategoryResponseRootObject } from "../../types";
import { CatalogFilter } from "../CatalogFilter/CatalogFilter";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs/Breadcrumbs";
import { Catalog } from "../Catalog/Catalog";
import { Pagination } from "antd";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getCategoriesById } from "../../api";
import { Preloader } from "@/components/ui/Preloader/Preloader";

interface CategoriesDetailsProps {
  data: CategoryResponseRootObject;
  breadcrumbs: { name: string; href: string }[];
}

export const CategoriesDetails: FC<CategoriesDetailsProps> = ({
  data,
  breadcrumbs,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();

  const [page, setPage] = useState<number>(1);
  const [productList, setProductList] =
    useState<CategoryResponseRootObject | null>(data);

  const { id } = params;
  const { isFetching } = useQuery(
    ["getCatalog", page],
    () => getCategoriesById(id, page, 15),
    {
      enabled: searchParams.get("page") ? true : false,
      onSuccess: (data) => {
        if (data) setProductList(data);
      },
    }
  );

  useEffect(() => {
    if (searchParams.get("page")) {
      setPage(Number(searchParams.get("page")));
    }
  }, [[searchParams]]);

  return (
    <>
      <Breadcrumbs links={breadcrumbs} />
      <div className={s.categoriesDetails}>
        <CatalogFilter filterOption={data.properties} />
        {isFetching ? (
          <Preloader />
        ) : (
          <Catalog
            products={productList ? productList.products : data.products}
          />
        )}
      </div>
      <div className={s.pagination}>
        <Pagination
          onChange={(page) => {
            setPage(page);
            router.push(pathname + `?page=${page}`);
          }}
          total={data.totalCount}
          pageSize={15}
          current={
            searchParams.get("page")
              ? Number(searchParams.get("page"))
              : data.currentPage
          }
          hideOnSinglePage={true}
        />
      </div>
    </>
  );
};
