"use client";
import Link from "next/link";
import React from "react";

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: "/account", label: "My Account" },
  { href: "/cart", label: "Cart" },
  { href: "/wishlist", label: "Wishlist" },
  { href: "/checkout", label: "Checkout" },
];

const TopBar: React.FC = () => {
  return (
    <div className="items-center justify-between hidden w-full px-20 py-4 mx-auto text-sm bg-gray-100 lg:flex">
      <h4 className="font-medium">Free shipping for all products</h4>
      <div>
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-orange-600">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
