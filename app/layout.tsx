import localFont from "next/font/local";
import "@/src/styles/global.scss";
import ClientProvider from "@/modules/ClientProvider";
import { Metadata } from "next";

const montserrat = localFont({
  src: [
    {
      path: "./../public/fonts/Montserrat-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./../public/fonts/Montserrat-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../public/fonts/Montserrat-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../public/fonts/Montserrat-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./../public/fonts/Montserrat-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--montserrat-font",
});

export const metadata: Metadata = {
  title: "My-Mark Root title",
  description: "My-Mark Root Description",
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "My-Mark Root title",
    description: "Phoenix Root Description",
    // url: 'https://nextjs.org',
    siteName: "Phoenix",
    // images: [
    //     {
    //         url: 'https://nextjs.org/og.png',
    //         width: 800,
    //         height: 600,
    //     },
    // ],
    locale: "ru-RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={montserrat.variable} lang="ru">
      <body>
        <main>
          <ClientProvider>{children}</ClientProvider>
        </main>
      </body>
    </html>
  );
}
