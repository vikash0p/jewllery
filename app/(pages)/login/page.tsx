import LoginAccount from '@/components/AccountComponent/LoginAccount'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login ",
  description:
    "Log in to your Elegant Jewelry account to access your profile and continue shopping for our exquisite jewelry collection.",
  openGraph: {
    title: "Login ",
    description:
      "Access your Elegant Jewelry account to manage your profile and explore our beautiful jewelry collection.",
    url: "https://jewllery-eight.vercel.app/login",
    images: "/icon-512x512.png",
    siteName: "Elegant Jewelry",
  },
  twitter: {
    card: "summary_large_image",
    title: "Login ",
    description:
      "Log in to manage your account and discover our stunning jewelry collection.",
    images: "/icon-512x512.png",
  },
};

const Login = () => {
  return (
    <div>
      <LoginAccount />
    </div>
  )
}

export default Login
