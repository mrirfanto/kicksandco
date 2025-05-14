export interface ProductSize {
  us: string
  uk: string
  eu: string
  available: boolean
}

export interface ProductColor {
  name: string
  value: string
  hex: string
}

export interface ProductImage {
  src: string
  alt: string
}

export interface RelatedProduct {
  id: string
  name: string
  price: number
  image: string
  rating: number
}

export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  discount?: number
  rating: number
  reviewCount: number
  description: string
  features: string[]
  colors: ProductColor[]
  sizes: ProductSize[]
  images: ProductImage[]
  relatedProducts: RelatedProduct[]
}
