'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { ProductImage } from '@/types/product';

interface ProductGalleryProps {
  images: ProductImage[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
        <Image
          src={images[currentImageIndex].src || '/placeholder.svg'}
          alt={images[currentImageIndex].alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm cursor-pointer"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous image</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm cursor-pointer"
            onClick={goToNext}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next image</span>
          </Button>
        </div>
      </div>

      <div className="flex space-x-2 overflow-x-auto p-2 scrollbar-thin">
        {images.map((image, index) => (
          <button
            key={index}
            className={cn(
              'relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border cursor-pointer',
              currentImageIndex === index && 'ring-2 ring-primary'
            )}
            onClick={() => selectImage(index)}
          >
            <Image
              src={image.src || '/placeholder.svg'}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
