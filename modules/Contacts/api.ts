import { ContactsRoot } from "./types";

export const getContactFetcher = async (): Promise<ContactsRoot[]> => {
  const res = await fetch(
    `https://${process.env.APP_BASE_URL}/api/delivery/Get`,
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
