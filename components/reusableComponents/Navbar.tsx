'use client'
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, UserRound, ShoppingCart } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
   const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "Collection", path: "/collection" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const containerVariants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const linkVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <nav className="text-black shadow-md bg-myColor py-3 sticky top-0 z-40">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold ">
           Elegant Gems
          </Link>

          {/* Links for larger screens */}
          <div className="items-center hidden space-x-4 md:flex">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className={`hover:bg-myColorHoverOne px-5 py-2  uppercase ${
                  pathname === link.path ? "bg-myColorOne" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-row gap-4">
            <div className="">
             <Link href={"/collection"} className="hover:text-orange-600">  <Search size={25} /></Link>
            </div>
            <div className="">
              <UserRound size={25} />
            </div>
            <div className="">
              <Link href="/cart" className="relative flex items-center hover:text-orange-600">
                <ShoppingCart size={25} />
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white rounded-full -top-2 -right-2 bg-myColorHoverOne">
                  3
                </span>
              </Link>
            </div>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Animated Menu for Mobile View */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={containerVariants}
        className="overflow-hidden md:hidden bg-myColor"
      >
        <motion.div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {links.map((link, index) => (
            <motion.div key={index} variants={linkVariants}>
              <Link
                href={link.path}
                className="block px-3 py-2 text-base font-medium rounded-md hover:bg-myColorHover"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
