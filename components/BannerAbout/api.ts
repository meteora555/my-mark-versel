import { AboutBannerRoot } from "./types";

export const getAboutFetcher = async (): Promise<AboutBannerRoot> => {
  const res = await fetch(
    `https://${process.env.APP_BASE_URL}/api/About/GetAbout`,
    {
      method: "GET",
      headers: {
        "Content-type": "aplication/json; charset=UTF-8",
      },
      cache: "no-cache",
    }
  );
  return res.json();
};
