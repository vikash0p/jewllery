"use client";
import Footer from "@/components/reusableComponents/Footer";
import Navbar from "@/components/reusableComponents/Navbar";
import TopBar from "@/components/reusableComponents/TopBar";
import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <TopBar />
      <Navbar />
      <main>{children} </main>
      <Footer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default GlobalLayout;
