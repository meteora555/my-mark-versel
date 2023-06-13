import React from "react";
import { redirect } from "next/navigation";
import { MAIN_ROUTE } from "@/src/consts/routes";
import { testAuthFetcher } from "@/modules/AuthReg/api";
import { cookies } from "next/dist/client/components/headers";

export async function generateMetadata(): Promise<any> {
  return {
    title: `Личный кабинет`,
  };
}

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");
  const refreshToken = cookieStore.get("refreshToken");

  if (!accessToken) redirect(`/${MAIN_ROUTE}`);
  const isAuth = await testAuthFetcher(accessToken);
  if (!isAuth && !accessToken && !refreshToken) redirect(`/${MAIN_ROUTE}`);

  return <>{children}</>;
}
