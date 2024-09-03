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

interface searchFilter {
  type: "SET_QUERY";
  payload: {
    name: string;
    value: string;
  };
}

interface searchProduct {
  type: "SEARCH_PRODUCT";
}

interface filterByRatingProduct {
  type: "FILTER_BY_RATING_COLLECTION";
}

interface filterRating {
  type: "FILTER_RATING";
  payload: number;
}
interface FILTER_BY_CATEGORY_COLLECTION {
  type: "FILTER_BY_CATEGORY_COLLECTION";
  payload: string;
}

export type FilterAction =
  | LoadFilterDataAction
  | SetGridViewAction
  | SetListViewAction
  | SearchDataAction
  | SortFilterDataAction
  | UpdateSearchTermAction
  | searchFilter
  | searchProduct
  | filterByRatingProduct
  | filterRating
  | FILTER_BY_CATEGORY_COLLECTION;

const FilterReducer = (
  state: initialStateInterface,
  action: FilterAction
): initialStateInterface => {
  const {
    filters: { rate, searchBar,  },
    all_Products,
    filter_Products,
  } = state;

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

    case "SET_QUERY":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "SEARCH_PRODUCT":
      let tempProduct = all_Products ? [...all_Products] : [];

      if (searchBar) {
        tempProduct = tempProduct.filter((item) =>
          searchBar === ""
            ? item
            : item.name.toLowerCase().includes(searchBar.toLowerCase()) ||
              item.category.toLowerCase().includes(searchBar.toLowerCase())
        );
      }

      return {
        ...state,
        filter_Products: tempProduct,
      };

    case "FILTER_RATING":
      return {
        ...state,
        filters: {
          ...state.filters,
          rate: action.payload,
        },
      };

    case "FILTER_BY_RATING_COLLECTION":
      let tempRatingCollection = all_Products ? [...all_Products] : [];
      if (rate) {
        tempRatingCollection = tempRatingCollection.filter(
          (value) => Math.trunc(value.rating) === rate
        );
      }

      return {
        ...state,
        filter_Products: tempRatingCollection,
      };

    case "FILTER_BY_CATEGORY_COLLECTION":
      let tempCategoryCollection = all_Products ? [...all_Products] : [];
      if (action.payload) {
        tempCategoryCollection = tempCategoryCollection.filter(
          (item) => item.category.toLowerCase() === action.payload.toLowerCase()
        );
      }

      return {
        ...state,
        filter_Products: tempCategoryCollection,

      };

    default:
      return state;
  }
};

export default FilterReducer;
