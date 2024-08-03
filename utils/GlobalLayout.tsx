"use client";
import Footer from "@/components/reusableComponents/Footer";
import Navbar from "@/components/reusableComponents/Navbar";
import React from "react";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main>{children} </main>
      <Footer />
    </div>
  );
};

export default GlobalLayout;
