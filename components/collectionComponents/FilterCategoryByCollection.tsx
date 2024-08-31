'use client'
import React from 'react'
import { JewelleryItem } from '@/utils/interface';
import LoadingProductCollection from '../loadingdata/LoadingProductCollection';
import ProductCard from '../reusableComponents/ProductCard';
import { MdArrowForwardIos } from "react-icons/md";
import { useGlobalJewelleryPaginationContext } from '@/context/JewelleryPaginationProvider';

const FilterCategoryByCollection = ({id}:{id:string}) => {

  const { isLoading, isError, data, error,isFetching } = useGlobalJewelleryPaginationContext();


      if (isError) return <div>An error has occurred: </div>;

  return (
    <div>
      {isFetching ? (
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
            {data?.jewelleryList
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
