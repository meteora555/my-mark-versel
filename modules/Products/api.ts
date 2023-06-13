import { IProductDetail, IProductCard } from "@/modules/Products/types";

export const getProducts = async (url: string): Promise<IProductCard[]> => {
  const res = await fetch(
    `https://${process.env.APP_BASE_URL}/api/Products/${url}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      cache: "no-cache",
      next: { revalidate: 120 },
    }
  );

  return res.json();
};

export const getProductById = async (id: number): Promise<IProductDetail> => {
  const res = await fetch(
    `https://${process.env.APP_BASE_URL}/api/Products/${id}`,
    {
      method: "post",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer`,
      },
      body: JSON.stringify({
        favoriteIds: [0],
      }),
    }
  );
  return res.json();
};
