import { ReactNode } from "react";
import { IconType } from "react-icons";
export interface JewelleryItem {
  _id: string;
  category: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  inStock: boolean;
  materials: string[];
  sizes: string[];
  rating: number;
  reviews: number;
}

export interface PaginatedResponse {
  jewelleryList: JewelleryItem[];
  page: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
export type TestimonialData = {
  id: number;
  name: string;
  location: string;
  profession: string;
  rating: number;
  testimonial: string;
};

export interface Features {
  icon: ReactNode;
  heading: string;
  subHeading: string;
}

export type BlogPost = {
  blogId: string;
  title: string;
  author: string;
  date: string;
  category: string;
  summary: string;
  content: string;
  image: string;
};

export interface brandDataInterface {
  id: number;
  img: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: IconType;
}
 export interface Section {
  title: string;
  description: string;
  imageUrl: string;
}


export interface BlogLink {
  id: string;
  title: string;
  url: string;
}


export interface Banner {
  src: string;
  alt: string;
  discountText: string;
  title: string;
  linkText: string;
  linkUrl: string;
}

export interface Slide {
  imgSrc: string;
  altText: string;
  heading: string;
  description: string;
  linkUrl: string;
}
