"use client";

import { getJewelleryData } from "@/utils/FetchDataFromBackend";
import { useQuery } from "@tanstack/react-query";
import React, { createContext, useContext, ReactNode } from "react";
import { JewelleryItem, PaginatedResponse } from "@/utils/interface";

interface JewelleryContextType {
  isLoading: boolean;
  isError: boolean;
  data: PaginatedResponse | undefined;
  error: unknown;
}

const JewelleryContext = createContext<JewelleryContextType | undefined>(undefined);

export const JewelleryProvider = ({ children }: { children: ReactNode }) => {
  // Type the query correctly with PaginatedResponse
  const { isLoading, isError, data, error } = useQuery<PaginatedResponse>({
    queryKey: ["jewellery"],
    queryFn: getJewelleryData,
  });

  console.log("🚀 ~ file: JewelleryProvider.tsx:24 ~ data:", data);

  return (
    <JewelleryContext.Provider value={{ isLoading, isError, data, error }}>
      {children}
    </JewelleryContext.Provider>
  );
};

export const useGlobalJewelleryContext = () => {
  const context = useContext(JewelleryContext);
  if (context === undefined) {
    throw new Error(
      "useGlobalJewelleryContext must be used within a JewelleryProvider"
    );
  }
  return context;
};
