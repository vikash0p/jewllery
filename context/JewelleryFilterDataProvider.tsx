"use client";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import FilterReducer from "./reducer/FilterReducer";
import { useGlobalJewelleryPaginationContext } from "./JewelleryPaginationProvider";
import { JewelleryItem } from "@/utils/interface";
import { FilterAction } from "./reducer/FilterReducer";
interface FilterDataInterface {
  filter_Products: JewelleryItem[] | undefined;
  all_Products: JewelleryItem[] | undefined;
  Grid_View: boolean;
  setGridView: () => void;
  setListView: () => void;
  handleSelectionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  searchTerm: string;
  dispatch: React.Dispatch<FilterAction>;
  filters: {
    searchBar: string;
    rate: number;
  };
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRatingCollectionFun: (i: number) => void;
  hadleFilterCategoryFunction:(cat:string)=>void;
}

export interface initialStateInterface {
  filter_Products: JewelleryItem[] | undefined;
  all_Products: JewelleryItem[] | undefined;
  Grid_View: boolean;
  searchTerm: string;
  filters: {
    searchBar: string;
    rate: number;

  };
}

const initialState: initialStateInterface = {
  filter_Products: [],
  all_Products: [],
  Grid_View: true,
  searchTerm: "",
  filters: {
    searchBar: "",
    rate: 0,

  },
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

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch({ type: "SET_QUERY", payload: { name, value } });
  };

  const hadleFilterCategoryFunction=(cat:string)=>{
        dispatch({type:"FILTER_BY_CATEGORY_COLLECTION",payload:cat  })
  }
  const handleRatingCollectionFun = (i: number) => {
    dispatch({ type: "FILTER_RATING", payload: i });
  };
  useEffect(() => {
    dispatch({ type: "FILTER_BY_RATING_COLLECTION" });
  }, [myJewelleryData, state.filters]);

  
useEffect(() => {
    dispatch({ type: "SEARCH_PRODUCT" });

}, [myJewelleryData,state.filters.searchBar]);

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
        dispatch,
        filters: state.filters,
        handleSearch,
        handleRatingCollectionFun,
        hadleFilterCategoryFunction,
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
