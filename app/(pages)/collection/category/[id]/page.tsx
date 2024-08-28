import FilterCategoryByCollection from '@/components/collectionComponents/FilterCategoryByCollection'
import React from 'react'

const SingleCategoryCollection = ({params}:{params:{id:string}}) => {
    const {id}=params
  return (
    <div>
      <FilterCategoryByCollection id={id} />
    </div>
  )
}

export default SingleCategoryCollection
