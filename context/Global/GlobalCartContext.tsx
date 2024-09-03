'use client'
import { useContext } from "react";
import { CartContext } from "../CartCollectionProvider";

export const useGlobalCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      "useGlobalCartContext must be used within a CartCollectionProvider"
    );
  }
  return context;
};