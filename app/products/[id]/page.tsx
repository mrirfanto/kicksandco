'use client';

import Navbar from '@/components/navbar';
import { ChevronRight } from 'lucide-react';

import { product } from '@/config';
import ProductGallery from '@/components/product/product-gallery';

export default function ProductPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <Navbar />

      <main className="flex-1">
        <div className="container px-4 py-6 md:py-8 lg:py-12 mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-muted-foreground mb-6">
            <span>Home</span>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span>Footwear</span>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span>Running</span>
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-foreground font-medium">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <ProductGallery images={product.images} />
          </div>
        </div>
      </main>

      <footer className="border-t border-neutral-200 py-8 bg-white">
        <div className="container px-4 mx-auto">
          <p className="text-sm text-neutral-500 text-center">
            © {new Date().getFullYear()} KicksAndCo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
