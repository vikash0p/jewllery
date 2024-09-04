import CartShopping from '@/components/cartComponet/CartShopping'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart ",
  description:
    "Review the items in your cart and proceed to checkout to complete your purchase of our exquisite jewelry collection.",
  openGraph: {
    title: "Cart ",
    description:
      "Review your cart and proceed to checkout to buy our beautiful jewelry pieces.",
    url: "https://jewllery-eight.vercel.app/cart",
    images: "/icon-512x512.png",
    siteName: "Elegant Jewelry",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cart ",
    description:
      "Review the items in your cart and proceed to checkout to complete your purchase.",
    images: "/icon-512x512.png",
  },
};
const Cart = () => {
  return (
    <div>
      <CartShopping />
    </div>
  )
}

export default Cart
