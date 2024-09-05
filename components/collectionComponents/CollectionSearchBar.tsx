"use client";

import { useGlobalFilterDataContext } from "@/context/JewelleryFilterDataProvider";

const CollectionSearchBar: React.FC = () => {
  const {
    filters: { searchBar },
    handleSearch,
  } = useGlobalFilterDataContext();

  return (
    <form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
        event.preventDefault()
      }
      aria-label="Search for jewellery products"
      className="flex flex-col sm:flex-row items-center"
    >
      <label htmlFor="searchBar" className="sr-only">
        Search Jewellery Products
      </label>
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        className=" px-3 border border-primary  py-2 w-full sm:w-52 md:min-w-[450px] mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-orange-500"
        placeholder="Search Jewellery..."
        value={searchBar}
        onChange={handleSearch}
        aria-describedby="searchBarDesc"
      />
      <button
        type="submit"

        className="bg-primary sr-only text-white py-2 px-4 rounded hover:bg-hoverColor focus:outline-none focus:ring-2 focus:ring-orange-500 sm:ml-2"
      >
        Search
      </button>
      <p id="searchBarDesc" className="sr-only">
        Enter a search term and press Search to find jewellery products.
      </p>
    </form>
  );
};

export default CollectionSearchBar;
