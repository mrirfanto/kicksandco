"use client"

import Navbar from "@/components/navbar"

export default function ProductPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <Navbar />

      <main className="flex-1">
        <div className="container px-4 py-6 md:py-8 lg:py-12 mx-auto">
          {/* Product content will be implemented later */}
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
  )
}
