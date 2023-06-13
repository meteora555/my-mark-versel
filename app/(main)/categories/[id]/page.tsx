import {
  getCategoriesById,
  getCategoriesFetcher,
} from "@/modules/Categories/api";
import { CategoriesDetails } from "@/modules/Categories/components/CategoriesDetails/CategoriesDetails";
import { CATEGORIES_ROUTE, MAIN_ROUTE } from "@/src/consts/routes";
import { useSearchParams } from "next/navigation";

export async function generateStaticParams() {
  const categories = await getCategoriesFetcher();

  return categories.map((e) => {
    return { id: e.id };
  });
}
export default async function Page({ params }: any) {
  const linksData = [
    {
      name: "Главная",
      href: `${MAIN_ROUTE}`,
    },
    {
      name: "Категории товаров",
      href: `${CATEGORIES_ROUTE}`,
    },
  ];
  const { id } = params;
  const categoryData = await getCategoriesById(id, 1, 15);

  return (
    <>
      {categoryData && (
        <CategoriesDetails breadcrumbs={linksData} data={categoryData} />
      )}
    </>
  );
}
