import { CookieValueTypes, getCookie } from "cookies-next";
import { IPassword, IUpdateUser, IUserRootObject } from "./types";

export const getUserFetcher = async (
  token: CookieValueTypes | string
): Promise<IUserRootObject> => {
  const res = await fetch(
    `https://${process.env.APP_BASE_IDENTITY_URL}/api/Cabinet/GetCabinet`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
      next: { revalidate: 120 },
    }
  );
  if (!res.ok) {
    const error = new Error("fail to fetch getUserInfo");
    throw error;
  }
  return res.json();
};

export const changePasswordFetcher = async (passwordValue: IPassword) => {
  const accessToken = getCookie("accessToken");
  const res = await fetch(
    `https://${process.env.APP_BASE_IDENTITY_URL}/api/Account/ChangePassword`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(passwordValue),
    }
  );
  if (!res.ok) {
    const error = new Error();
    error.message = await res.text();
    throw error;
  }
  return res;
};
export const updateUserFetcher = async (updateValues: IUpdateUser) => {
  const accessToken = getCookie("accessToken");
  const res = await fetch(
    `https://${process.env.APP_BASE_IDENTITY_URL}/api/Cabinet/ChangeInfo`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(updateValues),
    }
  );
  if (!res.ok) {
    const error = new Error("failed to fetch");
    error.message = await res.text();
    throw error;
  }
  return res;
};
