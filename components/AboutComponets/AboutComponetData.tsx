"use client";
import Image from "next/image";

import {
  FaGem,
  FaCrown,
  FaHeart,
  FaTrophy,
  FaHandsHelping,
  FaStar,
} from "react-icons/fa";
import React from "react";
import BreadcumbHeading from "@/components/reusableComponents/BreadcumbHeading";
import SubHeading from "../reusableComponents/SubHeading";
import { featuresData, sections } from "@/utils/data";
import AboutAccordion from "./AboutAccordion";
import TestimonialsHome from "../HomeComponents/TestimonialsHome";
import SwiperTestimonialHome from "../HomeComponents/SwiperTestimonialHome";

const AboutComponetData = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <BreadcumbHeading heading="About Us" subHeading="Home / About Us" />
      <div className="container mx-auto p-6 md:p-12">
        <div className="space-y-6">
          <div className="relative max-w-6xl h-80 md:h-96 lg:h-[500px] m-auto ">
            <Image
              src={"/about-us-banner1.jpg"}
              alt="aboutImage"
              className="object-cover w-full h-full"
              fill
              priority
            />
          </div>
          <h4 className="text-center text-3xl font-semibold md:w-3/4  m-auto ">
            We are a digital agency focused on delivering content and utility
            user-experiences.
          </h4>
          <p className="text-sm  md:w-3/4 text-gray-600 m-auto">
            Adipiscing lacus ut elementum, nec duis, tempor litora turpis
            dapibus. Imperdiet cursus odio tortor in elementum. Egestas nunc
            eleifend feugiat lectus laoreet, vel nunc taciti integer cras. Hac
            pede dis, praesent nibh ac dui mauris sit. Pellentesque mi, facilisi
            mauris, elit sociis leo sodales accumsan. Iaculis ac fringilla
            torquent lorem consectetuer, sociosqu phasellus risus urna aliquam,
            ornare.
          </p>
          <div className="relative w-56 h-56 m-auto ">
            <Image
              src={"/about-us-signature.png"}
              alt="aboutImage"
              className="object-contain w-full h-full"
              fill
              priority
            />
          </div>
        </div>

        {/* Brand Story Section */}
        <SubHeading sub="Our Story" />
        <section className="flex flex-col md:flex-row items-center mb-12 max-w-5xl m-auto py-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src="https://image.lexica.art/full_webp/6c4b1af0-3c5e-4ebb-8b9d-09e0de81e5be"
              alt="Jewelry Story"
              width={600}
              height={400}
              className="max-w-sm md:max-w-md:  object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-gray-700">
              At Elegant Gems, we merge traditional craftsmanship with modern
              aesthetics to create stunning jewelry that tells a story. From our
              beginnings as a small workshop to becoming a renowned name in the
              industry, our commitment to quality and elegance remains
              unwavering.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 ">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg  "
            >
              <feature.icon className="text-6xl text-gray-700 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        {/*  */}

        {/* Key Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <FaGem className="text-5xl text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Exceptional Quality
            </h3>
            <p className="text-gray-600">
              Each piece is meticulously crafted using the finest materials,
              ensuring durability and timeless beauty.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <FaCrown className="text-5xl text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Elegant Designs
            </h3>
            <p className="text-gray-600">
              Our designs combine classic and contemporary styles, making every
              piece a unique statement of elegance.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <FaHeart className="text-5xl text-gray-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Passionate Craftsmanship
            </h3>
            <p className="text-gray-600">
              Our artisans infuse their passion and skill into each creation,
              ensuring exceptional craftsmanship and attention to detail.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 py-14 ">
          {sections.map((section, index) => (
            <div
              key={index}
              className="max-w-lg bg-white p-8 rounded-lg shadow-lg"
            >
              <Image
                src={section.imageUrl}
                alt={section.title}
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {section.title}
              </h3>
              <p className="text-gray-600">{section.description}</p>
            </div>
          ))}
        </div>
        {/* Awards and Recognition Section */}
        <section className="text-center mb-12">
          <SubHeading sub="Awards & Recognition" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 py-8">
            {/* Award 1 */}
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg max-w-xs transform transition duration-500 hover:scale-105">
              <FaTrophy className="text-6xl text-yellow-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Best Jewelry Design 2024
              </h3>
              <p className="text-gray-600">
                Awarded for our innovative and elegant jewelry designs that set
                trends and captivate hearts.
              </p>
            </div>
            {/* Award 2 */}
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg max-w-xs transform transition duration-500 hover:scale-105">
              <FaHandsHelping className="text-6xl text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Outstanding Customer Service
              </h3>
              <p className="text-gray-600">
                Recognized for our commitment to providing exceptional service
                and a personalized shopping experience.
              </p>
            </div>
            {/* Award 3 */}
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg max-w-xs transform transition duration-500 hover:scale-105">
              <FaStar className="text-6xl text-gray-700 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Excellence in Craftsmanship
              </h3>
              <p className="text-gray-600">
                Honored for our dedication to meticulous craftsmanship and
                attention to detail in every piece.
              </p>
            </div>
            {/* Award 4 */}
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg max-w-xs transform transition duration-500 hover:scale-105">
              <FaGem className="text-6xl text-purple-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Premium Quality Materials
              </h3>
              <p className="text-gray-600">
                Acknowledged for using only the finest materials in creating
                timeless jewelry that lasts a lifetime.
              </p>
            </div>
          </div>
        </section>
        <div className="container mr-auto grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 ">
          <div className="space-y-10">
            <SubHeading sub="Why You Choose Us ?" />
            <AboutAccordion />
          </div>
          <div className="space-y-10">
            <SubHeading sub="What Clients Say" />
            <SwiperTestimonialHome />
          </div>
        </div>
        {/* Contact Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-4">
            We’d love to hear from you. For inquiries or more information about
            our collections,{" "}
            <a href="/contact" className="text-blue-700 hover:underline">
              contact us
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutComponetData;
