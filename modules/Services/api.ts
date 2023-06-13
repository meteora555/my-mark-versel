import { IService } from "@/modules/Services/types";

export const getServices = async (): Promise<IService[]> => {
  const res = await fetch(
    `https://${process.env.APP_BASE_URL}/api/services/index`,
    {
      method: "get",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer`,
      },
      cache: "no-cache",
    }
  );
  return res.json();
};
