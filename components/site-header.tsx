"use client"

import { useState } from 'react';
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { LoginForm } from "@/components/login-form";
import { MenuIcon, XIcon } from 'lucide-react'; // Ensure you have these icons for menu and close

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background-transparent glass sticky top-0 z-40 w-full border-b backdrop-filter backdrop-blur-lg bg-opacity-80">
      <div className="container flex h-16 items-center justify-between space-x-4">
        
        {/* Mobile menu button */}
        <div className="sm:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
        
        <MainNav items={siteConfig.mainNav} />

       {/* Desktop navigation 
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <Link href="/About" passHref>
              <span className="cursor-pointer hover:bg-blue-100 hover:text-blue-800 p-2 rounded-md transition-all duration-300">About</span>
            </Link>
            <Link href="/Features" passHref>
              <span className="cursor-pointer hover:bg-blue-100 hover:text-blue-800 p-2 rounded-md transition-all duration-300">Features</span>
            </Link>
            <Link href="/Profiles" passHref>
              <span className="cursor-pointer hover:bg-blue-100 hover:text-blue-800 p-2 rounded-md transition-all duration-300">Profiles</span>
            </Link>
          </nav>
              {/* Mobile navigation panel */}
              {/*{isMobileMenuOpen && (
                  <div className="fixed inset-0 z-50 bg-white/80 backdrop-filter backdrop-blur-lg bg-opacity-80 sm:hidden">
                    <div className="flex justify-end p-4">
                      <button onClick={() => setIsMobileMenuOpen(false)}>
                        <XIcon className="w-6 h-6" />  Close icon */}
                      {/*</button>
                    </div>
                    <div className="flex flex-col items-center bg-white/80 backdrop-filter backdrop-blur-lg bg-opacity-80 rounded-lg m-4 py-4">
                      {/* Menggunakan mb-6 untuk memberikan jarak lebih besar 
                      <Link href="/About" passHref><span className="py-2 cursor-pointer hover:text-foreground/80 mb-6">About</span></Link>
                      <Link href="/Features" passHref><span className="py-2 cursor-pointer hover:text-foreground/80 mb-6">Features</span></Link>
                      <Link href="/Profiles" passHref><span className="py-2 cursor-pointer hover:text-foreground/80 mb-6">Profiles</span></Link>
                    </div>
                  </div>
                )}*/}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
            <LoginForm />
          </nav>
        </div>
      </div>
    </header>
  );
}

