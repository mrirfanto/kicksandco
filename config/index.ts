import { Product } from "@/types/product";

export const product: Product = {
  id: "nike-air-jordan-1-high-og",
  brand: "Nike",
  name: "Air Jordan 1 High OG 'Chicago'",
  price: 179.99,
  originalPrice: 199.99,
  discount: 10,
  rating: 4.8,
  reviewCount: 1245,
  description: "The Air Jordan 1 High OG 'Chicago' is a legendary sneaker that pays homage to Michael Jordan's iconic career. This premium version features a classic red and white colorway with premium leather construction, Nike Air cushioning, and the iconic Wings logo.",
  features: [
    "Premium leather upper",
    "Nike Air cushioning",
    "Rubber outsole with herringbone pattern",
    "Classic Wings logo",
    "High-top design for ankle support",
    "Padded collar for comfort",
    "Perforated toe box for breathability"
  ],
  colors: [
    {
      name: "Chicago",
      value: "chicago",
      hex: "#E31837"
    },
    {
      name: "Black/Red",
      value: "black-red",
      hex: "#000000"
    },
    {
      name: "White/Blue",
      value: "white-blue",
      hex: "#FFFFFF"
    }
  ],
  sizes: [
    {
      us: "7",
      uk: "6",
      eu: "40",
      available: true
    },
    {
      us: "7.5",
      uk: "6.5",
      eu: "40.5",
      available: true
    },
    {
      us: "8",
      uk: "7",
      eu: "41",
      available: true
    },
    {
      us: "8.5",
      uk: "7.5",
      eu: "42",
      available: false
    },
    {
      us: "9",
      uk: "8",
      eu: "42.5",
      available: true
    },
    {
      us: "9.5",
      uk: "8.5",
      eu: "43",
      available: true
    },
    {
      us: "10",
      uk: "9",
      eu: "44",
      available: true
    }
  ],
  images: [
    {
      src: "/images/products/air-jordan-1-chicago-1.jpg",
      alt: "Air Jordan 1 High OG Chicago - Front View"
    },
    {
      src: "/images/products/air-jordan-1-chicago-2.jpg",
      alt: "Air Jordan 1 High OG Chicago - Side View"
    },
    {
      src: "/images/products/air-jordan-1-chicago-1.jpg",
      alt: "Air Jordan 1 High OG Chicago - Back View"
    },
    {
      src: "/images/products/air-jordan-1-chicago-2.jpg",
      alt: "Air Jordan 1 High OG Chicago - Detail View"
    }
  ],
  relatedProducts: [
    {
      id: "nike-air-jordan-1-low-og",
      name: "Air Jordan 1 Low OG",
      price: 129.99,
      imageUrl: "/images/products/air-jordan-1-chicago-1.jpg",
      rating: 4.6
    },
    {
      id: "nike-air-jordan-1-mid",
      name: "Air Jordan 1 Mid",
      price: 149.99,
      imageUrl: "/images/products/air-jordan-1-chicago-1.jpg",
      rating: 4.5
    },
    {
      id: "nike-air-jordan-1-high-og-shadow",
      name: "Air Jordan 1 High OG 'Shadow'",
      price: 179.99,
      imageUrl: "/images/products/air-jordan-1-chicago-1.jpg",
      rating: 4.7
    }
  ]
};
  