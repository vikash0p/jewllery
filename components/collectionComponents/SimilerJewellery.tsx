"use client";
import { useGlobalJewelleryContext } from "@/context/JewelleryProvider";
import React, { useEffect, useState } from "react";
import { JewelleryItem } from "@/utils/interface";
import LoadingProductCollection from "../loadingdata/LoadingProductCollection";
import ProductCard from "../reusableComponents/ProductCard";
import SubHeading from "../reusableComponents/SubHeading";
import { usePathname } from "next/navigation";


const SimilerJewellery = () => {
  const { data, error, isError, isLoading } = useGlobalJewelleryContext();
  const [jewellery, setJewellery] = useState<JewelleryItem[] | undefined>(
    undefined
  );

    const pathname = usePathname();

  useEffect(() => {
    if (data?.jewelleryList) {
      // Shuffle the jewelleryList array
      const shuffledJewellery = [...data.jewelleryList].sort(
        () => Math.random() - 0.5
      );
      setJewellery(shuffledJewellery);
    }
  }, [data]);

  if (isError) return <div>Error: {String(error)}</div>;

  return (
    <div>
      {isLoading ? (
        <LoadingProductCollection />
      ) : (
        <div className="py-10">
          <SubHeading sub="Choose New Product" />
          <div
            className={`container grid grid-cols-1  py-10 m-auto md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-3':" xl:grid-cols-4 gap-5`}
          >
            {jewellery?.slice(0, 4)?.map((value: JewelleryItem) => (value.inStock=== true && <ProductCard value={value} key={value._id} />
))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SimilerJewellery;
