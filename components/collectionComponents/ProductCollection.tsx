"use client";
import React, { useEffect, useState } from "react";
import { JewelleryItem } from "@/utils/interface";
import ProductCard from "../reusableComponents/ProductCard";
import LoadingProductCollection from "../loadingdata/LoadingProductCollection";
import { useGlobalJewelleryContext } from "@/context/JewelleryProvider";

const ProductCollection = () => {


  const { isLoading, isError, data, error } =useGlobalJewelleryContext();
  const [currentJewellery, setCurrentJewellery] = useState<JewelleryItem[]>([]);




  if (isError) return <div>An error has occurred {String(error)}</div>;

  return (
    <div className="container m-auto  flex flex-row h-full py-10">
      <div className="basis-1/4 h-full border bg-gray-100  border-red-700">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
        quibusdam sapiente iste dignissimos illum incidunt, dolores eveniet sunt
        animi minus quod architecto velit, voluptas aut praesentium. Esse
        numquam dolor explicabo architecto possimus perferendis omnis sed earum
        mollitia facilis sapiente quasi ipsum hic quia minus accusantium
        voluptatem accusamus, asperiores reiciendis, velit illo officia rem
        dolore? Voluptatibus tenetur provident adipisci earum quaerat
        consectetur itaque odit inventore reprehenderit debitis. Repellat,
        laudantium! Cupiditate placeat amet optio nobis porro, aspernatur sed
        saepe quisquam, perspiciatis quos magnam. Illum itaque vitae, recusandae
        quasi nisi facere similique odit consectetur mollitia! Optio facilis
        sint commodi in saepe hic eveniet.
      </div>
      <div className="basis-3/4">
        {isLoading ? (
          <LoadingProductCollection />
        ) : (
          <div>
            <div className="container grid grid-cols-1 gap-5  pb-10 m-auto md:grid-cols-2 lg:grid-cols-3 ">
              {data?.jewelleryList?.map((value: JewelleryItem) => (
                <ProductCard value={value} key={value._id} />
              ))}
            </div>


          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCollection;
