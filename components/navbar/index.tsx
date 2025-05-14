"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingBag, User, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const cartItemCount = 2 // This would come from your cart state

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-neutral-50/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-50/60">
      <div className="flex h-16 items-center px-8">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-primary hover:text-primary-600">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-neutral-50">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between border-b border-neutral-200 py-4">
                <Link href="/" className="font-bold text-xl text-primary">
                  KicksAndCo
                </Link>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-primary hover:text-primary-600">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetTrigger>
              </div>
              <nav className="flex-1 py-4">
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="block py-2 text-lg font-medium text-primary hover:text-primary-600 transition-colors">
                      Men
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block py-2 text-lg font-medium text-primary hover:text-primary-600 transition-colors">
                      Women
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block py-2 text-lg font-medium text-primary hover:text-primary-600 transition-colors">
                      Kids
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block py-2 text-lg font-medium text-primary hover:text-primary-600 transition-colors">
                      Collections
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block py-2 text-lg font-medium text-accent hover:text-accent-600 transition-colors">
                      Sale
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="border-t border-neutral-200 py-4">
                <div className="flex items-center gap-4">
                  <Button variant="outline" className="w-full border-neutral-200 text-primary hover:bg-neutral-100">
                    <User className="h-4 w-4 mr-2" />
                    Account
                  </Button>
                  <Button variant="outline" className="w-full border-neutral-200 text-primary hover:bg-neutral-100">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Cart
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="mr-6 hidden md:flex items-center space-x-2">
          <span className="font-bold text-xl text-primary">KicksAndCo</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium flex-1">
          <Link href="#" className="text-primary transition-colors hover:text-primary-600">
            Men
          </Link>
          <Link href="#" className="text-primary transition-colors hover:text-primary-600">
            Women
          </Link>
          <Link href="#" className="text-primary transition-colors hover:text-primary-600">
            Kids
          </Link>
          <Link href="#" className="text-primary transition-colors hover:text-primary-600">
            Collections
          </Link>
          <Link href="#" className="text-accent transition-colors hover:text-accent-600">
            Sale
          </Link>
        </nav>

        <div className="flex items-center">
          {isSearchOpen ? (
            <div className="relative flex items-center w-full md:w-auto">
              <Input 
                type="search" 
                placeholder="Search..." 
                className="w-full md:w-[200px] pr-8 border-neutral-200 focus:border-primary focus:ring-primary/20" 
                autoFocus 
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 text-primary hover:text-primary-600" 
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Search"
                className="mr-2 text-primary hover:text-primary-600"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="Account" 
                className="mr-2 hidden md:flex text-primary hover:text-primary-600"
              >
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
              <Link href="/cart" className="relative">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  aria-label="Cart"
                  className="text-primary hover:text-primary-600"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span className="sr-only">Cart</span>
                </Button>
                {cartItemCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-accent text-white"
                  >
                    {cartItemCount}
                  </Badge>
                )}
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
