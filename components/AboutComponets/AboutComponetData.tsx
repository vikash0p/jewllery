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
    <div className="min-h-screen bg-gray-50">
      <BreadcumbHeading heading="About Us" subHeading="Home / About Us" />
      <div className="container p-6 mx-auto md:p-12">
        <div className="space-y-6">
          <div className="relative max-w-6xl h-80 md:h-96 lg:h-[500px] m-auto ">
            <Image
              src={"/about-us-banner1.jpg"}
              alt="aboutImage"
              className="object-cover w-full h-full"
              fill
              priority
              sizes="(min-width: 1320px) 1152px, (min-width: 780px) 90vw, calc(100vw - 48px)"
            />
          </div>
          <h4 className="m-auto text-3xl font-semibold text-center md:w-3/4 ">
            We are a digital agency focused on delivering content and utility
            user-experiences.
          </h4>
          <p className="m-auto text-sm text-gray-600 md:w-3/4">
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
              sizes="224px"
            />
          </div>
        </div>

        {/* Brand Story Section */}
        <SubHeading sub="Our Story" />
        <section className="flex flex-col items-center max-w-5xl py-8 m-auto mb-12 md:flex-row">
          <div className="mb-6 md:w-1/2 md:mb-0">
            <Image
              src="https://image.lexica.art/full_webp/6c4b1af0-3c5e-4ebb-8b9d-09e0de81e5be"
              alt="Jewelry Story"
              width={600}
              height={400}
              className="object-cover max-w-sm rounded-lg shadow-lg md:max-w-md:"
              sizes="384px"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="mb-4 text-3xl font-semibold text-gray-900">
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

        <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:grid-cols-3 ">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg "
            >
              <feature.icon className="mb-4 text-6xl text-gray-700" />
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        {/*  */}

        {/* Key Features Section */}
        <section className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl">
            <FaGem className="mb-4 text-5xl text-gray-700" />
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Exceptional Quality
            </h3>
            <p className="text-gray-600">
              Each piece is meticulously crafted using the finest materials,
              ensuring durability and timeless beauty.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl">
            <FaCrown className="mb-4 text-5xl text-gray-700" />
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Elegant Designs
            </h3>
            <p className="text-gray-600">
              Our designs combine classic and contemporary styles, making every
              piece a unique statement of elegance.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl">
            <FaHeart className="mb-4 text-5xl text-gray-700" />
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Passionate Craftsmanship
            </h3>
            <p className="text-gray-600">
              Our artisans infuse their passion and skill into each creation,
              ensuring exceptional craftsmanship and attention to detail.
            </p>
          </div>
        </section>

        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 py-14 ">
          {sections.map((section, index) => (
            <div
              key={index}
              className="max-w-lg p-8 bg-white rounded-lg shadow-lg"
            >
              <Image
                src={section.imageUrl}
                alt={section.title}
                width={400}
                height={300}
                className="mb-4 rounded-lg"
                sizes="(min-width: 1480px) 349px, (min-width: 1040px) calc(28.57vw - 68px), (min-width: 780px) calc(50vw - 128px), (min-width: 540px) 400px, calc(96.36vw - 101px)"
              />
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                {section.title}
              </h3>
              <p className="text-gray-600">{section.description}</p>
            </div>
          ))}
        </div>
        {/* Awards and Recognition Section */}
        <section className="mb-12 text-center">
          <SubHeading sub="Awards & Recognition" />
          <div className="grid grid-cols-1 gap-3 py-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Award 1 */}
            <div className="flex flex-col items-center max-w-xs p-8 transition duration-500 transform bg-white rounded-lg shadow-lg hover:scale-105">
              <FaTrophy className="mb-4 text-6xl text-yellow-500" />
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                Best Jewelry Design 2024
              </h3>
              <p className="text-gray-600">
                Awarded for our innovative and elegant jewelry designs that set
                trends and captivate hearts.
              </p>
            </div>
            {/* Award 2 */}
            <div className="flex flex-col items-center max-w-xs p-8 transition duration-500 transform bg-white rounded-lg shadow-lg hover:scale-105">
              <FaHandsHelping className="mb-4 text-6xl text-green-500" />
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                Outstanding Customer Service
              </h3>
              <p className="text-gray-600">
                Recognized for our commitment to providing exceptional service
                and a personalized shopping experience.
              </p>
            </div>
            {/* Award 3 */}
            <div className="flex flex-col items-center max-w-xs p-8 transition duration-500 transform bg-white rounded-lg shadow-lg hover:scale-105">
              <FaStar className="mb-4 text-6xl text-gray-700" />
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                Excellence in Craftsmanship
              </h3>
              <p className="text-gray-600">
                Honored for our dedication to meticulous craftsmanship and
                attention to detail in every piece.
              </p>
            </div>
            {/* Award 4 */}
            <div className="flex flex-col items-center max-w-xs p-8 transition duration-500 transform bg-white rounded-lg shadow-lg hover:scale-105">
              <FaGem className="mb-4 text-6xl text-purple-500" />
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                Premium Quality Materials
              </h3>
              <p className="text-gray-600">
                Acknowledged for using only the finest materials in creating
                timeless jewelry that lasts a lifetime.
              </p>
            </div>
          </div>
        </section>
        <div className="container grid grid-cols-1 gap-10 py-10 mr-auto lg:grid-cols-2 ">
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
        <section className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-gray-900">
            Get in Touch
          </h2>
          <p className="mb-4 text-gray-700">
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
