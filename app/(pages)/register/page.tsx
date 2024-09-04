import RegisterAccount from "@/components/AccountComponent/RegisterAccount";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register ",
  description:
    "Create a new account to explore and purchase our exquisite jewelry collection. Register now to enjoy exclusive offers and updates.",
  openGraph: {
    title: "Register ",
    description:
      "Sign up to join Elegant Jewelry and start exploring our beautiful collection of timeless jewelry pieces.",
    url: "https://jewllery-eight.vercel.app/register",
    images: "/icon-512x512.png",
    siteName: "Elegant Jewelry",
  },
  twitter: {
    card: "summary_large_image",
    title: "Register ",
    description:
      "Create a new account to access our exclusive jewelry collection and offers.",
    images: "/icon-512x512.png",
  },
};

const Register = () => {
  return (
    <div className="">
      <RegisterAccount />
    </div>
  );
};

export default Register;
