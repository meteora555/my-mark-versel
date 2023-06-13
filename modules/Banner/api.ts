import { MainRootObject } from "@/modules/Banner/types";

export const getBanners = async (): Promise<MainRootObject> => {
  const res = await fetch(`https://${process.env.APP_BASE_URL}/api/Main`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    next: { revalidate: 120 },
  });

  return res.json();
};
