"use client";
import Footer from "@/components/reusableComponents/Footer";
import Navbar from "@/components/reusableComponents/Navbar";
import TopBar from "@/components/reusableComponents/TopBar";
import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { JewelleryProvider } from "@/context/JewelleryProvider";
import { JewelleryPaginationProvider } from "@/context/JewelleryPaginationProvider";
import JewelleryFilterDataProvider from "@/context/JewelleryFilterDataProvider";
const queryClient = new QueryClient();

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <JewelleryProvider>
        <JewelleryPaginationProvider>
          <JewelleryFilterDataProvider>
            <Navbar />
            <main>{children} </main>
            <Footer />
          </JewelleryFilterDataProvider>
        </JewelleryPaginationProvider>
      </JewelleryProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default GlobalLayout;
