'use client';

import { useState } from 'react';
import Navbar from '@/components/navbar';
import { ChevronRight, Heart, RotateCcw, ShieldCheck, Star, Truck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

import { product } from '@/config';
import ProductGallery from '@/components/product/product-gallery';
import { Button } from '@/components/ui/button';

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].value);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleColorChange = (value: string) => {
    setSelectedColor(value);
  };

  const handleSizeChange = (value: string) => {
    setSelectedSize(value);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    console.log('Added to cart:', {
      product: product.id,
      color: selectedColor,
      size: selectedSize,
      quantity,
    });
  };

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

            <div className="flex flex-col">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{product.name}</h1>

                <div className="flex items-center mt-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium">{product.rating}</span>
                  <span className="mx-2 text-muted-foreground">·</span>
                  <span className="text-sm text-muted-foreground">
                    {product.reviewCount} reviews
                  </span>
                </div>

                <div className="flex items-baseline mt-2 mb-6">
                  <h2 className="text-2xl font-bold">${product.price.toFixed(2)}</h2>
                  {product.originalPrice && (
                    <>
                      <span className="ml-2 text-muted-foreground line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                      <Badge variant="destructive" className="ml-2">
                        {product.discount}% OFF
                      </Badge>
                    </>
                  )}
                </div>

                <p className="text-muted-foreground mb-6">{product.description}</p>

                {/* Color Selection */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Color</h3>
                  <RadioGroup
                    value={selectedColor}
                    onValueChange={handleColorChange}
                    className="flex flex-wrap gap-3"
                  >
                    {product.colors.map(color => (
                      <div key={color.value} className="flex items-center">
                        <RadioGroupItem
                          value={color.value}
                          id={`color-${color.value}`}
                          className="sr-only"
                        />
                        <Label
                          htmlFor={`color-${color.value}`}
                          className={`flex items-center justify-center w-12 h-12 rounded-full cursor-pointer border-2 ${
                            selectedColor === color.value ? 'border-primary' : 'border-transparent'
                          }`}
                        >
                          <span
                            className="w-10 h-10 rounded-full"
                            style={{ backgroundColor: color.hex }}
                          />
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Size Selection */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Size</h3>
                    <Button variant="link" className="p-0 h-auto text-sm">
                      Size Guide
                    </Button>
                  </div>
                  <RadioGroup
                    value={selectedSize}
                    onValueChange={handleSizeChange}
                    className="grid grid-cols-4 sm:grid-cols-6 gap-2"
                  >
                    {product.sizes.map(size => (
                      <div key={size.us}>
                        <RadioGroupItem
                          value={size.us}
                          id={`size-${size.us}`}
                          disabled={!size.available}
                          className="sr-only"
                        />
                        <Label
                          htmlFor={`size-${size.us}`}
                          className={`flex items-center justify-center h-12 rounded-md border cursor-pointer ${
                            !size.available
                              ? 'bg-muted text-muted-foreground cursor-not-allowed'
                              : selectedSize === size.us
                                ? 'border-primary bg-primary/10'
                                : 'border-border hover:border-primary'
                          }`}
                        >
                          {size.us}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Quantity</h3>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                    >
                      -
                    </Button>
                    <span className="w-12 text-center">{quantity}</span>
                    <Button variant="outline" size="icon" onClick={increaseQuantity}>
                      +
                    </Button>
                  </div>
                </div>

                {/* Add to Cart */}
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <Button size="lg" className="flex-1" onClick={addToCart}>
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="lg" className="flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    <span className="hidden sm:inline">Add to Wishlist</span>
                  </Button>
                </div>

                {/* Shipping & Returns */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Truck className="h-5 w-5 mt-0.5 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium">Free Shipping</h4>
                      <p className="text-sm text-muted-foreground">
                        Free standard shipping on orders over $100
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 mt-0.5 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium">Secure Payment</h4>
                      <p className="text-sm text-muted-foreground">
                        Your payment information is processed securely
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <RotateCcw className="h-5 w-5 mt-0.5 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium">30-Day Returns</h4>
                      <p className="text-sm text-muted-foreground">
                        Simple returns up to 30 days from purchase
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
