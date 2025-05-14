'use client'

import { createContext, useContext, ReactNode } from 'react'
import { Product } from '../types/product'

interface ProductContextType {
  selectedSize: string | null
  selectedColor: string | null
  setSelectedSize: (size: string) => void
  setSelectedColor: (color: string) => void
}

const ProductContext = createContext<ProductContextType | undefined>(undefined)

export function ProductProvider({ children }: { children: ReactNode }) {
  // Context implementation will go here
  return (
    <ProductContext.Provider value={{
      selectedSize: null,
      selectedColor: null,
      setSelectedSize: () => {},
      setSelectedColor: () => {},
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export function useProductContext() {
  const context = useContext(ProductContext)
  if (context === undefined) {
    throw new Error('useProductContext must be used within a ProductProvider')
  }
  return context
} 