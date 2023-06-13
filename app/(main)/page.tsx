import React from "react";
import { getBanners } from "@/modules/Banner/api";
import { BannersSlider } from "@/modules/Banner/components/BannersSlider";
import ProductsSlider from "@/modules/Products/components/ProductSlider/ProductsSlider";
import { Services } from "@/modules/Services/components/Services";
import { BannerLottie } from "@/components/BannerLottie/BannerLottie";
import { getPopularCategories } from "@/modules/Categories/api";
import { CategoriesSlider } from "@/modules/Categories/components/CategoriesSlider";
import client from "@/src/lottie/client.json";

export default async function Page() {
  const main = await getBanners();
  const popularCategory = await getPopularCategories();

  return (
    <>
      <BannersSlider banner={main.mainBanners} />
      <Services services={main.services} />
      <CategoriesSlider
        gridRows={0}
        title={"Популярные категории"}
        categories={popularCategory}
      />
      <ProductsSlider
        nextName={"productNext"}
        prevName={"productPrev"}
        title={"Популярные товары"}
        url={"Populars"}
      />
      <BannerLottie
        json={client}
        background={"var(--client)"}
        title="Более 1500 новых клиентов"
      />
    </>
  );
}
