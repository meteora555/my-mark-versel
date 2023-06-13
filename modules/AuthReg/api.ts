import { CookieValueTypes } from "cookies-next";
import { IAuth, IAuthResponse } from "./types/IAuth";
import { IRegistration } from "./types/IReg";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const getAccessTokenFetcher = async (
  loginValues: IAuth
): Promise<IAuthResponse> => {
  const res = await fetch(
    `https://${process.env.APP_BASE_IDENTITY_URL}/api/Identity/GetTokenByEmail`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json; charser=UTF-8",
      },
      body: JSON.stringify(loginValues),
    }
  );
  if (!res.ok) {
    const error = new Error();
    error.message = await res.text();
    throw error;
  }
  return res.json();
};

export const registerAccountFetcher = async (regValue: IRegistration) => {
  const res = await fetch(
    `https://${process.env.APP_BASE_IDENTITY_URL}/api/Identity/RegistrationByEmail`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8 ",
      },
      body: JSON.stringify(regValue),
    }
  );

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.message = await res.text();
    throw error;
  }
  return res;
};

export const testAuthFetcher = async (accessToken: RequestCookie) => {
  const res = await fetch(
    `https://${process.env.APP_BASE_IDENTITY_URL}/api/TestAuth/VerifyAuthorize`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${accessToken.value}`,
      },
      // cache: "no-cache",
    }
  );
  if (!res.ok) {
    return false;
  }
  return true;
};
export const updateTokenFetcher = async (
  refreshToken: CookieValueTypes | string,
  accessToken: CookieValueTypes | string
): Promise<IAuthResponse> => {
  const res = await fetch(
    `https://${process.env.APP_BASE_IDENTITY_URL}/api/Account/RefreshToken?refreshToken=${refreshToken}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("update token fetch failed");
  }

  return res.json();
};
