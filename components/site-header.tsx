import Link from "next/link"
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import {ChevronLeft } from 'lucide-react';
import { LoginForm } from "@/components/login-form";

export function SiteHeader() {
  return (
    <header className="bg-background-transparent glass sticky top-0 z-40 w-full border-b backdrop-filter backdrop-blur-lg bg-opacity-80">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
            <LoginForm/>
          </nav>
        </div>
      </div>
    </header>
  )
}
