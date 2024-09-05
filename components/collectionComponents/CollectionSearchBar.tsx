"use client";

import { useGlobalFilterDataContext } from "@/context/JewelleryFilterDataProvider";

const CollectionSearchBar:React.FC = () => {
  const {filters:{searchBar},handleSearch}=useGlobalFilterDataContext();




  return (
    <form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
        event.preventDefault()
      }
      aria-label="Search for jewellery products"
    >
      <label htmlFor="searchBar" className="sr-only">
        Search Jewellery Products
      </label>
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        className="border border-orange-500 px-3 w-72  md:min-w-[450px] py-2  focus:outline-none focus:ring-2 focus:ring-orange-500"
        placeholder="Search Jewellery..."
        value={searchBar}
        onChange={handleSearch}
        aria-describedby="searchBarDesc"
      />
      <button
        type="submit"
        className="ml-2 bg-primary text-white py-2 px-4 rounded hover:bg-hoverColor focus:outline-none focus:ring-2 focus:ring-orange-500 sr-only"
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
