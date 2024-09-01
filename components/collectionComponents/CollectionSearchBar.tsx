"use client";

const CollectionSearchBar = () => {





  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };



  return (
    <form
      onSubmit={handleFormSubmit}
      aria-label="Search for jewellery products"
    >
      <label htmlFor="searchBar" className="sr-only">
        Search Jewellery Products
      </label>
      <input
        type="text"
        name="searchbar"
        id="searchBar"
        className="border border-orange-500 px-3 max-w-sm md:w-96 py-2 placeholder:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
        placeholder="Jewellery Products..."
        value={""}
        // onChange={}
        aria-describedby="searchBarDesc"
      />
      <button
        type="submit"
        className="ml-2 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 sr-only"
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
