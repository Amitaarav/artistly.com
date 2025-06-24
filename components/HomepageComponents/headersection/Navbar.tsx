"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "../../ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Browse Artists", href: "/artists" },
    { name: "Join as Artist", href: "/onboarding" },
    { name: "Dashboard", href: "/dashboard" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 border-b shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="absolute left-0 flex items-center h-full">
            <Link href="/" className="text-3xl font-bold text-white">
              Artistly
            </Link>
          </div>
          {/* Desktop Navigation links */}
          <div className="hidden md:flex justify-center items-center w-full space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors
                ${isOpen ? "bg-gray-100 text-gray-800" : "text-gray-200 hover:text-white"}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Get started button */}
          <div className="absolute right-0 flex items-center h-full pr-2">
            <div className="hidden md:block flext items-center space-x-2">
              <ThemeToggle />
              <Button variant="outline">Get Started</Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-200 hover:text-white"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-500 hover:text-white transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 flex items-center space-x-2">
                <ThemeToggle />
                <Button variant="default" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
