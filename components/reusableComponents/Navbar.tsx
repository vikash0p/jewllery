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
    <nav className="bg-myColor text-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold ">
           Elegant Gems
          </Link>

          {/* Links for larger screens */}
          <div className="hidden md:flex items-center space-x-4">
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
              <Search size={25} />{" "}
            </div>
            <div className="">
              <UserRound size={25} />
            </div>
            <div className="">
              <a href="/cart" className="relative flex items-center">
                <ShoppingCart size={25} />
                <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-myColorHoverOne text-white text-xs font-bold flex items-center justify-center">
                  3
                </span>
              </a>
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
        className="md:hidden overflow-hidden bg-myColor"
      >
        <motion.div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {links.map((link, index) => (
            <motion.div key={index} variants={linkVariants}>
              <Link
                href={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-myColorHover"
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
