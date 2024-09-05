"use client";
import { useGlobalCartContext } from "@/context/Global/GlobalCartContext";
import Image from "next/image";
import React from "react";
import SimilerJewellery from "../collectionComponents/SimilerJewellery";
import { GrAdd, GrSubtract } from "react-icons/gr";
import { addItemPayload } from "@/context/types/types";
import { IoTrashBinSharp } from "react-icons/io5";
import { toastSuccess } from "@/utils/React-toastify";
import Link from "next/link";

const CartShopping = () => {
  const { state, dispatch } = useGlobalCartContext();

  if (state.cart.length === 0) {
    return (
      <div className="centerdiv text-xl md:text-2xl font-bold flex-col gap-8">
        <h5>Your cart is empty</h5>
        <Link
          href={"/collection"}
          className="px-6 py-2 bg-primary text-white rounded"
        >
          Collection
        </Link>
      </div>
    );
  }

  return (
    <section>
      <div className="bg-gray-100 min-h-screen py-6 md:py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-2xl font-semibold mb-4">
            Shopping Cart
          </h1>
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Cart Items Section */}
            <div className="w-full lg:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-4">
                <table className="w-full">
                  <tbody className="text-sm md:text-base">
                    {state.cart
                      .slice()
                      .reverse()
                      .map((item: addItemPayload) => (
                        <tr
                          key={item.id}
                          className="border-b border-gray-300 flex flex-col md:flex-row md:justify-between md:items-center gap-4 py-4"
                        >
                          {/* Product Details */}
                          <div className="flex w-full   items-center justify-between md:justify-around gap-8">
                            <td className="flex flex-col  md:flex-row items-center gap-4">
                              <Image
                                src={item.imageUrl}
                                alt={item.name}
                                width={64}
                                height={64}
                                className="w-16 h-16 object-cover rounded"
                              />
                              <div>
                                <span className="font-semibold block">
                                  {item.name}
                                </span>
                                <span className="block text-gray-500">
                                  Size: {item.size}
                                </span>
                              </div>
                            </td>

                            {/* Price */}
                            <td className="text-center md:text-left py-2">
                              ${item.price.toFixed(2)}
                            </td>
                          </div>

                          {/* Quantity Control */}
                          <div className="flex flex-row gap-8 justify-between md:justify-around items-center w-full">
                            <td className="flex justify-center md:justify-start items-center gap-2">
                              <button
                                className="border rounded-md p-2 hover:border-primary hover:text-primary"
                                onClick={() =>
                                  dispatch({
                                    type: "DECREMENT_QTY",
                                    payload: item,
                                  })
                                }
                              >
                                <GrSubtract />
                              </button>
                              <span className="w-8 text-center">
                                {item.quantity}
                              </span>
                              <button
                                className="border rounded-md p-2 hover:border-primary hover:text-primary"
                                onClick={() =>
                                  dispatch({
                                    type: "INCREMENT_QTY",
                                    payload: item,
                                  })
                                }
                              >
                                <GrAdd />
                              </button>
                            </td>

                            {/* Total Price */}
                            <td className="text-center md:text-right py-2 hidden md:block">
                              ${(item.price * item.quantity).toFixed(2)}
                            </td>

                            {/* Remove Item */}
                            <td className="text-center md:text-right py-2">
                              <button
                                type="button"
                                className="text-red-600 hover:text-red-700"
                                onClick={() => {
                                  dispatch({
                                    type: "REMOVE_ITEM",
                                    payload: item,
                                  });
                                  toastSuccess("Item removed successfully");
                                }}
                              >
                                <IoTrashBinSharp size={24} />
                              </button>
                            </td>
                          </div>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Summary Section */}
            <div className="w-full lg:w-1/4 md:w-96">
              <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
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
                <div className="flex justify-between mb-2 font-semibold">
                  <span>Total</span>
                  <span>
                    $
                    {(
                      state.cart.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      ) + 1.99
                    ).toFixed(2)}
                  </span>
                </div>
                <button className="bg-primary text-white py-2 px-4 rounded-lg mt-4 w-full hover:bg-hoverColor transition-colors">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Jewellery Section */}
      <div>
        <SimilerJewellery />
      </div>
    </section>
  );
};

export default CartShopping;
