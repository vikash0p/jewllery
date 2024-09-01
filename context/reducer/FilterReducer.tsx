import { JewelleryItem } from "@/utils/interface";
import { initialStateInterface } from "../JewelleryFilterDataProvider";

interface LoadFilterDataAction {
  type: "LOAD_FILTER_DATA";
  payload: JewelleryItem[] | undefined;
}

interface SetGridViewAction {
  type: "SET_GRID_VIEW";
}

interface SetListViewAction {
  type: "SET_LIST_VIEW";
}

interface SearchDataAction {
  type: "SEARCH_DATA";
  payload: string;
}

interface UpdateSearchTermAction {
  type: "UPDATE_SEARCH_TERM";
  payload: {
    userValue: string;
    name: string;
  };
}

interface SortFilterDataAction {
  type: "SORT_FILTER_DATA";
  payload: "Ascending" | "Descending" | "PriceLowToHigh" | "PriceHighToLow";
}



type FilterAction =
  | LoadFilterDataAction
  | SetGridViewAction
  | SetListViewAction
  | SearchDataAction
  | SortFilterDataAction
  | UpdateSearchTermAction

const FilterReducer = (
  state: initialStateInterface,
  action: FilterAction
): initialStateInterface => {
  switch (action.type) {
    case "LOAD_FILTER_DATA":
      return {
        ...state,
        filter_Products: action.payload ? [...action.payload] : [],
        all_Products: action.payload ? [...action.payload] : [],
      };
    case "SET_GRID_VIEW":
      return {
        ...state,
        Grid_View: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        Grid_View: false,
      };
    case "SEARCH_DATA":
      return {
        ...state,
        searchTerm: action.payload,
      };

    case "SORT_FILTER_DATA":
      let sortedData = [...(state.filter_Products || [])];

      switch (action.payload) {
        case "Ascending":
          sortedData.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "Descending":
          sortedData.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "PriceLowToHigh":
          sortedData.sort((a, b) => a.price - b.price);
          break;
        case "PriceHighToLow":
          sortedData.sort((a, b) => b.price - a.price);
          break;
        default:
          break;
      }

      return {
        ...state,
        filter_Products: sortedData,
      };
    // case "FILTER_PRODUCTS_BY_SEARCH_TERM":
    //   const filteredProducts = action.payload.data.filter((item) =>
    //     item.name
    //       .toLowerCase()
    //       .includes(action.payload.searchTerm.toLowerCase())
    //   );
    //   return {
    //     ...state,
    //     filter_Products: filteredProducts,
    //   };
    default:
      return state;
  }
};

export default FilterReducer;
