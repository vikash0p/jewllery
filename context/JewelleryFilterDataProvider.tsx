"use client";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import FilterReducer from "./reducer/FilterReducer";
import { useGlobalJewelleryPaginationContext } from "./JewelleryPaginationProvider";
import { JewelleryItem } from "@/utils/interface";

interface FilterDataInterface {
  filter_Products: JewelleryItem[] | undefined;
  all_Products: JewelleryItem[] | undefined;
  Grid_View: boolean;
  setGridView: () => void;
  setListView: () => void;
  handleSelectionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  searchTerm: string;

}

export interface initialStateInterface {
  filter_Products: JewelleryItem[] | undefined;
  all_Products: JewelleryItem[] | undefined;
  Grid_View: boolean;
  searchTerm: string;
}

const initialState: initialStateInterface = {
  filter_Products: [],
  all_Products: [],
  Grid_View: true,
  searchTerm: "",
};

const FilterDataContext = createContext<FilterDataInterface | undefined>(
  undefined
);

const JewelleryFilterDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data } = useGlobalJewelleryPaginationContext();
  const myJewelleryData: JewelleryItem[] | undefined =
    data?.jewelleryList || [];

  const [state, dispatch] = useReducer(FilterReducer, initialState);

  const setGridView = () => {
    dispatch({ type: "SET_GRID_VIEW" });
  };

  const setListView = () => {
    dispatch({ type: "SET_LIST_VIEW" });
  };



  const handleSelectionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const userValue = event.target.value;
    dispatch({ type: "SEARCH_DATA", payload: userValue });
    dispatch({ type: "SORT_FILTER_DATA", payload: userValue as any });
  };

  // useEffect(() => {
  //   if (state.searchTerm && myJewelleryData && myJewelleryData.length > 0) {
  //     dispatch({
  //       type: "FILTER_PRODUCTS_BY_SEARCH_TERM",
  //       payload: { searchTerm: state.searchTerm, data: myJewelleryData },
  //     });
  //   }
  // }, [state.searchTerm, myJewelleryData]);

  useEffect(() => {
    if (myJewelleryData && myJewelleryData.length > 0) {
      dispatch({ type: "LOAD_FILTER_DATA", payload: myJewelleryData });
    }
  }, [myJewelleryData]);

  return (
    <FilterDataContext.Provider
      value={{
        filter_Products: state.filter_Products,
        all_Products: state.all_Products,
        Grid_View: state.Grid_View,
        setGridView,
        setListView,
        handleSelectionChange,
        searchTerm: state.searchTerm,

      }}
    >
      {children}
    </FilterDataContext.Provider>
  );
};

export const useGlobalFilterDataContext = () => {
  const context = useContext(FilterDataContext);
  if (context === undefined) {
    throw new Error(
      "useGlobalFilterDataContext must be used within a JewelleryFilterDataProvider"
    );
  }
  return context;
};

export default JewelleryFilterDataProvider;
