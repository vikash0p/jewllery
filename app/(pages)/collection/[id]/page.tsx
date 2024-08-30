import SimilerJewellery from '@/components/collectionComponents/SimilerJewellery'
import SingleCollectionComponent from '@/components/collectionComponents/SingleCollectionComponent'
import React from 'react'

const SingleCollection = ({params}:{params:{id:string}}) => {

  const {id}=params

  return (
    <div>
        <SingleCollectionComponent id={params.id}  />
        <SimilerJewellery />
    </div>
  )
}

export default SingleCollection
