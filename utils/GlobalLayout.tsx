"use client";
import Footer from "@/components/reusableComponents/Footer";
import Navbar from "@/components/reusableComponents/Navbar";
import TopBar from "@/components/reusableComponents/TopBar";
import React from "react";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <main>{children} </main>
      <Footer />
    </div>
  );
};

export default GlobalLayout;
