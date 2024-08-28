"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AboutAccordion = () => {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Fast Free Delivery</AccordionTrigger>
          <AccordionContent>
            Enjoy swift and free delivery on all your orders. We ensure that
            your precious items reach you promptly and securely, right at your
            doorstep. Our delivery service is efficient, reliable, and tailored
            to offer you the convenience and peace of mind you deserve.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            More Than 30 Years In The Business
          </AccordionTrigger>
          <AccordionContent>
            With over three decades of experience, we’ve established ourselves
            as a trusted name in the jewelry industry. Our long-standing
            reputation is built on quality, craftsmanship, and a deep commitment
            to our customers. We bring tradition and expertise to every piece we
            create.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>100% Organic Foods</AccordionTrigger>
          <AccordionContent>
            Our commitment to purity extends beyond jewelry to our selection of
            organic foods. We provide 100% organic, sustainably sourced
            products, ensuring that what you consume is as natural and wholesome
            as it should be. Experience the true taste of nature with our
            organic offerings.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Best Shopping Strategies</AccordionTrigger>
          <AccordionContent>
            Discover the most effective shopping strategies with us. We guide
            you through choosing the perfect piece, understanding value, and
            making informed decisions. Our expert tips and insights ensure you
            get the best deals and make purchases that you’ll cherish for a
            lifetime.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AboutAccordion;
