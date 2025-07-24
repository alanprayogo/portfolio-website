"use client"

import * as React from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "./theme-toggle"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-4 mt-8">
          <a
            href="#home"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            About
          </a>
          <a
            href="#professional"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            Professional
          </a>
          <a
            href="#personal"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            Personal
          </a>
          <a
            href="#contact"
            className="text-lg font-medium hover:text-primary transition-colors"
            onClick={handleLinkClick}
          >
            Contact
          </a>
          <div className="pt-4 border-t">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
