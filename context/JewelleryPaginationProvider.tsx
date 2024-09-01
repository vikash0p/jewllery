"use client";

import { getJewelleryPaginationData } from "@/utils/FetchDataFromBackend";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React, { createContext, useContext, ReactNode, useState, useReducer } from "react";
import { JewelleryItem, PaginatedResponse } from "@/utils/interface";
import JewelleryReducer from "./reducer/JewelleryReducer";

interface JewelleryContextType {
  isLoading: boolean;
  isError: boolean;
  data: PaginatedResponse | undefined;
  error: unknown;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  isPending:boolean;
  isFetching:boolean;
}

const JewelleryPaginationContext = createContext<JewelleryContextType | undefined>( undefined);


export const JewelleryPaginationProvider = ({ children }: { children: ReactNode }) => {
    const[page,setPage]=useState(1);
    const limit=12;

  const { isLoading, isError, data, error,isPending,isFetching, isPlaceholderData } = useQuery<PaginatedResponse>({
    queryKey: ["jewelleryPagination",page],
    queryFn: ()=>getJewelleryPaginationData({page, limit}),
    placeholderData:keepPreviousData
  });

  return (
    <JewelleryPaginationContext.Provider value={{ isLoading, isError, data, error,page,setPage,isFetching,isPending  }}>
      {children}
    </JewelleryPaginationContext.Provider>
  );
};

export const useGlobalJewelleryPaginationContext = () => {
  const context = useContext(JewelleryPaginationContext);
  if (context === undefined) {
    throw new Error(
      "useGlobalJewelleryContext must be used within a JewelleryProvider"
    );
  }
  return context;
};
