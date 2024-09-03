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
import CartCollectionProvider from "@/context/CartCollectionProvider";
const queryClient = new QueryClient();

  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <JewelleryProvider>
        <JewelleryPaginationProvider>
          <JewelleryFilterDataProvider>
            <CartCollectionProvider>
              <Navbar />
              <main>{children} </main>
              <Footer />
            </CartCollectionProvider>
          </JewelleryFilterDataProvider>
        </JewelleryPaginationProvider>
      </JewelleryProvider>
<ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default GlobalLayout;
