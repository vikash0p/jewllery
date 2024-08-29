import { ReactNode } from "react";
import { FaShippingFast, FaHeadset, FaMoneyBillWave } from "react-icons/fa";
import { FaPaintBrush, FaShieldAlt,  } from "react-icons/fa";
import { TestimonialData } from "./interface";
import { Features } from "./interface";
import { BlogPost,brandDataInterface,Feature, Section, BlogLink , Banner} from "./interface";

export const features: Features[] = [
  {
    icon: <FaShippingFast size={40} className="text-2xl text-orange-500" />,
    heading: "Free Shipping Worldwide",
    subHeading: "Order Above $100",
  },
  {
    icon: <FaMoneyBillWave size={40} className="text-2xl text-orange-500" />,
    heading: "Best Online Support",
    subHeading: "Hours: 8AM - 11PM",
  },
  {
    icon: <FaHeadset size={40} className="text-2xl text-orange-500" />,
    heading: "Money Guarantee",
    subHeading: "Guarantee 30 Days",
  },
];



export const testimonialsData: TestimonialData[] = [
  {
    id: 1,
    name: "Emily Thompson",
    location: "New York, NY",
    profession: "Fashion Designer",
    rating: 5,
    testimonial:
      "The craftsmanship of the jewelry is absolutely stunning. I receive compliments every time I wear my new necklace. Truly a work of art!",
  },
  {
    id: 2,
    name: "Michael Johnson",
    location: "Los Angeles, CA",
    profession: "Photographer",
    rating: 4,
    testimonial:
      "Beautiful rings with intricate details. The customer service was excellent, and they made sure I got exactly what I was looking for.",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    location: "Miami, FL",
    profession: "Interior Designer",
    rating: 5,
    testimonial:
      "I am in love with my new bracelet! The design is elegant and the quality is exceptional. Will definitely be purchasing more in the future.",
  },
  {
    id: 4,
    name: "David Brown",
    location: "Chicago, IL",
    profession: "Software Engineer",
    rating: 4,
    testimonial:
      "The earrings I bought are gorgeous and well-made. They were delivered quickly and packaged beautifully. Highly recommend!",
  },
  {
    id: 5,
    name: "Olivia Davis",
    location: "Dallas, TX",
    profession: "Event Planner",
    rating: 5,
    testimonial:
      "These are the most beautiful pieces of jewelry I’ve ever owned. The diamonds sparkle like nothing I’ve seen before. Thank you for making my special day even more memorable.",
  },
  {
    id: 6,
    name: "William Anderson",
    location: "San Francisco, CA",
    profession: "Architect",
    rating: 5,
    testimonial:
      "The custom engagement ring I ordered exceeded all my expectations. The attention to detail is incredible, and my fiancée is in love with it!",
  },
  {
    id: 7,
    name: "Isabella Clark",
    location: "Boston, MA",
    profession: "Journalist",
    rating: 4,
    testimonial:
      "I purchased a pair of pearl earrings, and they are simply elegant. The quality is top-notch, and they arrived just in time for my event.",
  },
  {
    id: 8,
    name: "James Wilson",
    location: "Seattle, WA",
    profession: "Chef",
    rating: 5,
    testimonial:
      "I couldn’t be happier with my purchase. The necklace is stunning, and the entire shopping experience was seamless. Highly recommended!",
  },
];








export const blogPosts: BlogPost[] = [
  {
    blogId: "ZjwI7B9SqWOzz",
    title: "The Evolution of Engagement Rings: A Historical Perspective",
    author: "Emily Thompson",
    date: "2024-01-10",
    category: "History",
    summary:
      "Explore the fascinating history of engagement rings, from ancient traditions to modern-day designs.",
    content:
      "Engagement rings have a rich history that dates back to ancient civilizations...",
    image:
      "https://image.lexica.art/full_webp/01268e81-e11c-46c0-acd2-f5f582378d60",
  },
  {
    blogId: "PS5Q0wP9",
    title: "Top 10 Jewelry Trends for 2024: Tips and Tricks",
    author: "Sophia Martinez",
    date: "2024-02-05",
    category: "Trends",
    summary:
      "Discover the hottest jewelry trends of 2024, from statement pieces to minimalist designs.",
    content:
      "As we step into 2024, the jewelry world is embracing a mix of bold and understated styles...",
    image:
      "https://image.lexica.art/full_webp/4b6637f0-f2b5-4398-a4c1-0d9555774646",
  },
  {
    blogId: "AK2Tpn9O",
    title: "How to Choose the Perfect Diamond: A Comprehensive Guide",
    author: "Michael Johnson",
    date: "2024-03-12",
    category: "Guides",
    summary:
      "Learn everything you need to know about selecting the perfect diamond for any occasion.",
    content:
      "Choosing the right diamond can be overwhelming, but with the right knowledge, it becomes a rewarding experience...",
    image:
      "https://image.lexica.art/full_webp/179b891e-4ba8-49bc-b6ce-90c5a834af6b",
  },
  {
    blogId: "d9l9zaa8svc0Uol",
    title: "The Art of Custom Jewelry Design",
    author: "Olivia Davis",
    date: "2024-04-08",
    category: "Design",
    summary:
      "Delve into the world of custom jewelry and discover how to create a one-of-a-kind piece.",
    content:
      "Custom jewelry design offers a unique opportunity to express personal style and create something truly special...",
    image:
      "https://image.lexica.art/full_webp/d5b35b16-70f4-4f08-9b63-21ac68bf1e07",
  },
  {
    blogId: "CZAkXF",
    title: "Sustainable Jewelry: What You Need to Know",
    author: "David Brown",
    date: "2024-05-15",
    category: "Sustainability",
    summary:
      "Explore the growing trend of sustainable jewelry and how it’s changing the industry.",
    content:
      "Sustainability is becoming increasingly important in the jewelry industry as consumers seek eco-friendly options...",
    image:
      "https://image.lexica.art/full_webp/19e61c82-5d96-4c96-9876-87f4ed97910f",
  },
  {
    blogId: "GMjnbZXIpa",
    title: "The Symbolism of Gemstones: What Your Jewelry Says About You",
    author: "Isabella Clark",
    date: "2024-06-20",
    category: "Symbolism",
    summary:
      "Uncover the meanings behind popular gemstones and how they reflect your personality.",
    content:
      "Gemstones have been cherished for centuries not only for their beauty but also for their symbolic meanings...",
    image:
      "https://image.lexica.art/full_webp/1c55eefd-5311-497c-a709-ee8a05c26545",
  },
  {
    blogId: "RCUOXN",
    title: "A Guide to Vintage Jewelry: Styles, Eras, and Tips",
    author: "William Anderson",
    date: "2024-07-05",
    category: "Vintage",
    summary:
      "Learn about different vintage jewelry styles, the eras they come from, and tips for buying vintage pieces.",
    content:
      "Vintage jewelry offers a glimpse into the past, showcasing the artistry and craftsmanship of different eras...",
    image:
      "https://image.lexica.art/full_webp/2b334a3f-6487-438e-9e6e-f95c9eae962a",
  },
  {
    blogId: "CXUNPPUKBgwCdRA",
    title: "Jewelry Care 101: How to Keep Your Pieces Looking New",
    author: "Emily Thompson",
    date: "2024-08-01",
    category: "Care",
    summary:
      "Find out the best practices for maintaining your jewelry and keeping it in pristine condition.",
    content:
      "Proper jewelry care is essential to ensure that your pieces remain beautiful and last for years to come...",
    image:
      "https://image.lexica.art/full_webp/2bf6c39f-d75a-41c7-8dcc-370183312cfc",
  },
  {
    blogId: "HTM4h3D0MAjnc5JTrS",
    title: "The Influence of Celebrities on Jewelry Fashion",
    author: "Sophia Martinez",
    date: "2024-08-15",
    category: "Fashion",
    summary:
      "Explore how celebrities have shaped jewelry trends over the decades.",
    content:
      "Celebrities have always played a significant role in shaping fashion, and jewelry is no exception...",
    image:
      "https://image.lexica.art/full_webp/0b23ac73-97c7-478b-bf6f-449ce54549fb",
  },
  {
    blogId: "QpqLbqLA0",
    title: "The Science Behind Diamond Cutting: How It Affects Sparkle",
    author: "Michael Johnson",
    date: "2024-09-10",
    category: "Science",
    summary:
      "Discover the science of diamond cutting and how it influences a diamond’s brilliance.",
    content:
      "The sparkle of a diamond is a result of precise cutting and the way light interacts with the stone...",
    image:
      "https://image.lexica.art/full_webp/1770ab8d-8d9a-49b4-a9c9-4ea564c44c5f",
  },
  {
    blogId: "8ygkFqo0",
    title: "Pearls: A Timeless Classic in Modern Jewelry",
    author: "Olivia Davis",
    date: "2024-09-25",
    category: "Classics",
    summary:
      "Learn why pearls remain a beloved choice in jewelry, blending tradition with modern design.",
    content:
      "Pearls have been treasured for centuries and continue to be a favorite in both traditional and contemporary jewelry...",
    image:
      "https://image.lexica.art/full_webp/2191b752-4015-4919-ac3e-3ebc1623dba9",
  },
  {
    blogId: "8Zku9O1hvB6ME0Wm",
    title: "Ethical Sourcing in the Jewelry Industry: What You Should Know",
    author: "David Brown",
    date: "2024-10-05",
    category: "Ethics",
    summary:
      "Understand the importance of ethical sourcing in the jewelry industry and how it impacts consumers.",
    content:
      "Ethical sourcing has become a critical issue in the jewelry industry, with more consumers demanding transparency...",
    image:
      "https://image.lexica.art/full_webp/34d438bf-86ee-4b1d-8341-407ef6b23b7a",
  },
  {
    blogId: "pCXPWlo3bayK7rrK",
    title:
      "The Magic of Colored Gemstones: Adding a Pop of Color to Your Collection",
    author: "Isabella Clark",
    date: "2024-10-18",
    category: "Color",
    summary:
      "Explore the vibrant world of colored gemstones and how they can enhance your jewelry collection.",
    content:
      "Colored gemstones offer endless possibilities for adding color and personality to your jewelry collection...",
    image:
      "https://image.lexica.art/full_webp/e758d1d9-6e24-4cfd-947f-a37e43abc628",
  },
  {
    blogId: "o6bl0FGv0xi8",
    title: "The Role of Technology in Modern Jewelry Design",
    author: "William Anderson",
    date: "2024-11-02",
    category: "Technology",
    summary:
      "Discover how technology is revolutionizing jewelry design, from CAD software to 3D printing.",
    content:
      "Technology has transformed the jewelry design process, enabling designers to create intricate and innovative pieces...",
    image:
      "https://image.lexica.art/full_webp/55e0c449-a115-46b0-9e9e-4e7876e198bf",
  },
  {
    blogId: "Kj2fGqL3Cfi",
    title: "How to Style Layered Necklaces: Tips and Tricks",
    author: "Emily Thompson",
    date: "2024-11-20",
    category: "Style",
    summary:
      "Master the art of layering necklaces with these expert styling tips.",
    content:
      "Layered necklaces are a popular trend that allows for endless creativity in styling...",
    image:
      "https://image.lexica.art/full_webp/0328eb65-89f8-4def-9860-4b8341535ce3",
  },
  {
    blogId: "qvHAB9Z",
    title: "The Impact of Jewelry on Self-Expression",
    author: "Sophia Martinez",
    date: "2024-12-05",
    category: "Expression",
    summary:
      "Explore how jewelry serves as a powerful tool for self-expression and individuality.",
    content:
      "Jewelry has long been a means of expressing one’s identity, beliefs, and personal style...",
    image:
      "https://image.lexica.art/full_webp/44328208-0bcb-4d5b-89c6-a04d551369e8",
  },
  {
    blogId: "HQqSp08",
    title: "The Most Iconic Jewelry Pieces in Pop Culture",
    author: "Michael Johnson",
    date: "2024-12-20",
    category: "Pop Culture",
    summary:
      "Take a look at some of the most memorable jewelry pieces from movies, TV shows, and music.",
    content:
      "Pop culture has given us countless iconic jewelry moments that continue to influence fashion...",
    image:
      "https://image.lexica.art/full_webp/5e2acd82-7b75-4669-be63-4cfa9bafd002",
  },
  {
    blogId: "y6XOin2pai30PJPHfV0Y",
    title: "The Rise of Minimalist Jewelry: Less is More",
    author: "Olivia Davis",
    date: "2025-01-05",
    category: "Minimalism",
    summary:
      "Discover the beauty of minimalist jewelry and why it’s become a favorite among modern consumers.",
    content:
      "Minimalist jewelry emphasizes simplicity and elegance, focusing on clean lines and understated designs...",
    image:
      "https://image.lexica.art/full_webp/439e437d-4bdc-4825-9eb9-5c5c12ea0cb7",
  },
  {
    blogId: "ukigD",
    title: "How to Choose the Right Jewelry for Your Face Shape",
    author: "David Brown",
    date: "2025-01-20",
    category: "Guides",
    summary:
      "Learn how to select jewelry that complements your face shape and enhances your natural beauty.",
    content:
      "Choosing jewelry that flatters your face shape can make a significant difference in your overall look...",
    image:
      "https://image.lexica.art/full_webp/67d81001-9e75-4228-bba5-387f101bc390",
  },
  {
    blogId: "hNsWYHNKrZdzMkGPqY7",
    title: "The Legacy of Family Heirloom Jewelry",
    author: "Isabella Clark",
    date: "2025-02-05",
    category: "Heritage",
    summary:
      "Explore the sentimental value and timeless appeal of family heirloom jewelry passed down through generations.",
    content:
      "Family heirloom jewelry carries with it stories and traditions that transcend time, making it invaluable to those who inherit it...",
    image:
      "https://image.lexica.art/full_webp/a11d6934-e541-4c51-9b5c-c5bb7cd76be2",
  },
];




export const brandData: brandDataInterface[] = [
  {
    id: 1,
    img: "/brand/01_160x160@2x.png",
  },
  {
    id: 2,
    img: "/brand/02_160x160@2x.png",
  },
  {
    id: 3,
    img: "/brand/03_160x160@2x.png",
  },
  {
    id: 4,
    img: "/brand/04_160x160@2x.png",
  },
  {
    id: 5,
    img: "/brand/05_160x160@2x.png",
  },
];



 export const featuresData: Feature[] = [
  {
    title: "Creative Design",
    description:
      "Rat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim.",
    icon: FaPaintBrush,
  },
  {
    title: "100% Money Back Guarantee",
    description:
      "Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim.",
    icon: FaShieldAlt,
  },
  {
    title: "Online Support 24/7",
    description:
      "Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim.",
    icon: FaHeadset,
  },
];

 export const sections: Section[] = [
  {
    title: "What Do We Do?",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.",
    imageUrl: "/about-us-banner2-1.jpg", // Replace with an actual image URL
  },
  {
    title: "Our Mission",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.",
    imageUrl: "/about-us-banner2-2.jpg", // Replace with an actual image URL
  },
  {
    title: "History Of Us",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.",
    imageUrl: "/about-us-banner2-3.jpg", // Replace with an actual image URL
  },
];



export const blogLinks: BlogLink[] = [
  { id: "CZAkXF", title: "Sustainable Jewelry", url: "/blog/CZAkXF" },
  { id: "GMjnbZXIpa", title: "The Gemstones", url: "/blog/GMjnbZXIpa" },
  {
    id: "ZjwI7B9SqWOzz",
    title: "Engagement Rings",
    url: "/blog/ZjwI7B9SqWOzz",
  },
  {
    id: "d9l9zaa8svc0Uol",
    title: "The Art of Jewelry",
    url: "/blog/d9l9zaa8svc0Uol",
  },
];


export const banners: Banner[] = [
  {
    src: "/sub-banner-1.jpg",
    alt: "bannerImage1",
    discountText: "Discount 20%",
    title: "Family Jewelry Collection",
    linkText: "SHOP NOW",
    linkUrl: "/collection",
  },
  {
    src: "/sub-banner-2.jpg",
    alt: "bannerImage2",
    discountText: "Discount 20%",
    title: "Family Jewelry Collection",
    linkText: "SHOP NOW",
    linkUrl: "/collection",
  },
];