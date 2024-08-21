"use client";
import Link from "next/link";
import React from "react";

const TopBar = () => {
  return (
    <div className="  lg:flex justify-between items-center max-w-7xl m-auto min-h-8 px-2 py-3 hidden lg:block">
      <h4 className="">Free shipping for all products</h4>
      <div className="">
        <ul className="flex gap-7">
            <li className=""><Link href="/account" className="">My Account</Link></li>
            <li className=""><Link href="/cart" className="">Cart</Link></li>
            <li className=""><Link href="/wishlist" className="">Wishlist</Link></li>
        <li className=""><Link href="/checkout" className="">Checkout</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
