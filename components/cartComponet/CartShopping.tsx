"use client";
import { useGlobalCartContext } from "@/context/Global/GlobalCartContext";
import Image from "next/image";
import React from "react";
import SimilerJewellery from "../collectionComponents/SimilerJewellery";
import { GrAdd, GrSubtract } from "react-icons/gr";
import { addItemPayload } from "@/context/types/types";
import { IoTrashBinSharp } from "react-icons/io5";
import { toastSuccess } from "@/utils/React-toastify";

const CartShopping = () => {
  const { state, dispatch } = useGlobalCartContext();

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4 ">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Size</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                    <th className="text-left font-semibold">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {state.cart.map((item: addItemPayload) => (
                    <tr key={item.id}>
                      <td className="py-4">
                        <div className="flex flex-col  gap-2">
                          <Image
                            src={item.imageUrl}
                            alt={item.name}
                            width={64}
                            height={64}
                            className="h-16 w-16 mr-4 object-cover"
                          />
                          <span className="font-semibold">{item.name}</span>
                        </div>
                      </td>
                      <td className="py-4">{item.size} </td>
                      <td className="py-4">${item.price.toFixed(2)}</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button className="border rounded-md py-2 px-4 mr-2">
                            <GrSubtract />
                          </button>
                          <span className="text-center w-8">
                            {item.quantity}
                          </span>
                          <button className="border rounded-md py-2 px-4 ml-2">
                            <GrAdd />
                          </button>
                        </div>
                      </td>
                      <td className="py-4">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="py-4"><button type="button" className="text-red-600" onClick={()=>{
                        dispatch({ type: "REMOVE_ITEM", payload: item.id });
                        toastSuccess("successfully remove item")
                      }}><IoTrashBinSharp size={30} /></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>
                  $
                  {state.cart
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>$1.99</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">
                  $
                  {(
                    state.cart.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    ) + 1.99
                  ).toFixed(2)}
                </span>
              </div>
              <button className="bg-primary  py-2 px-4 rounded-lg mt-4 w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartShopping;
