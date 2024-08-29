import SingleCollectionComponent from '@/components/collectionComponents/SingleCollectionComponent'
import React from 'react'

const SingleCollection = ({params}:{params:{id:string}}) => {

  const {id}=params

  return (
    <div>
        <SingleCollectionComponent id={params.id}  />
    </div>
  )
}

export default SingleCollection
