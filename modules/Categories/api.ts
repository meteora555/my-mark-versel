import {
  CategoryResponseRootObject,
  ICategoryCard,
} from "@/modules/Categories/types";

export const getCategoriesFetcher = async (): Promise<ICategoryCard[]> => {
  const res = await fetch(
    `https://${process.env.APP_BASE_URL}/api/Categories`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  return res.json();
};
export const getPopularCategories = async (): Promise<ICategoryCard[]> => {
  const res = await fetch(
    `https://${process.env.APP_BASE_URL}/api/Categories/Populars`,
    {
      method: "get",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer`,
      },
      next: { revalidate: 120 },
    }
  );
  return res.json();
};

export const getCategoriesById = async (
  id: string,
  pageNumber: number,
  pageSize: number
): Promise<CategoryResponseRootObject | undefined> => {
  const res = await fetch(
    `https://${process.env.APP_BASE_URL}/api/Categories/${id}?PageNumber=${pageNumber}&PageSize=${pageSize}`,
    {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      cache: "no-cache",
      next: { revalidate: 120 },
    }
  );
  if (!res.ok) {
    return undefined;
  }
  return res.json();
};
