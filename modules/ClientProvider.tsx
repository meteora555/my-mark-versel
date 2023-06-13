"use client";
import React from "react";
import AntdThemeProvider from "@/modules/AntdThemeProvider";
import { ThemeProvider } from "next-themes";
import "swiper/css";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { UserAuthWatcher } from "./User/components/UserAuthWather";

const queryClient = new QueryClient();
function App({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider enableSystem={false} attribute="class">
        <AntdThemeProvider>
          <UserAuthWatcher>{children}</UserAuthWatcher>
        </AntdThemeProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
