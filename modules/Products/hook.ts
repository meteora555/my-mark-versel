import { IProductCard } from "@/modules/Products/types";
import { getProducts } from "@/modules/Products/api";
import { useQuery } from "@tanstack/react-query";

export default function useProductsApi(url: string) {
  return useQuery(["products", url], () => getProducts(url));
}
