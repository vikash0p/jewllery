import SimilerJewellery from '@/components/collectionComponents/SimilerJewellery'
import SingleCollectionComponent from '@/components/collectionComponents/SingleCollectionComponent'
import React from 'react'
import { Metadata } from "next";
import { getSingleJewelleryData } from '@/utils/FetchDataFromBackend';

export async function generateMetadata({ params }:{params:{id:string}}): Promise<Metadata> {
  const { id } = params;

  // Fetch collection details based on the ID
  const collection = await getSingleJewelleryData(id);
  // console.log("🚀 ~ file: page.tsx:12 ~ collection:", collection);

  if (!collection) {
    return {
      title: "Collection Not Found | Elegant Jewelry",
      description: "The collection you are looking for does not exist.",
      openGraph: {
        title: "Collection Not Found | Elegant Jewelry",
        description: "The collection you are looking for does not exist.",
        url: `https://jewllery-eight.vercel.app/collection/${id}`,
        images: "/icon-512x512.png",
        siteName: "Elegant Jewelry",
      },
      twitter: {
        card: "summary_large_image",
        title: "Collection Not Found | Elegant Jewelry",
        description: "The collection you are looking for does not exist.",
        images: "/icon-512x512.png",
      },
    };
  }

  return {
    title: `${collection.name} | Elegant Jewelry`,
    description: `${collection.description} | Discover the exquisite pieces in the  collection at Elegant Jewelry.`,
    openGraph: {
      title: `${collection.name} | Elegant Jewelry`,
      description: `${collection.description} | Discover the exquisite pieces in the  collection at Elegant Jewelry.`,
      url: `https://jewllery-eight.vercel.app/collection/${id}`,
      images: collection.imageUrl || "/icon-512x512.png",
      siteName: "Elegant Jewelry",
    },
    twitter: {
      card: "summary_large_image",
      title: `${collection.name} | Elegant Jewelry`,
      description: `Explore the ${collection.name} collection, featuring stunning and timeless jewelry pieces.`,
      images: collection.imageUrl || "/icon-512x512.png",
    },
  };
}
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
