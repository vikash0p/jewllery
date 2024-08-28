'use client'
import { getJewelleryData } from '@/utils/FetchDataFromBackend';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { JewelleryItem } from '@/utils/interface';
import LoadingProductCollection from '../loadingdata/LoadingProductCollection';
import ProductCard from '../reusableComponents/ProductCard';
import { MdArrowForwardIos } from "react-icons/md";
const FilterCategoryByCollection = ({id}:{id:string}) => {
    const { isLoading, isError, data, error } = useQuery<JewelleryItem[]>({
      queryKey: ["jewellery"],
      queryFn: getJewelleryData,
    });
      if (isError) return <div>An error has occurred: {error.message}</div>;

  return (
    <div>
      {isLoading ? (
        <LoadingProductCollection />
      ) : (
        <div>
          <div  className='container flex flex-row items-center gap-3 py-10' >
            <h5>Home</h5>
            <MdArrowForwardIos />
            <h5>Collection</h5>
            <MdArrowForwardIos />
            <h5>Category</h5>
            <MdArrowForwardIos />
            <h5 className='text-orange-600'>{id} </h5>
          </div>
          <div className="container grid grid-cols-1 gap-5 py-10 m-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data
              ?.filter((filterValue) => filterValue.category === id)
              .map((value: JewelleryItem) => (
                <ProductCard value={value} key={value._id} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterCategoryByCollection
