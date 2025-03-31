'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden mobile-menu-container">
      <Button variant="outline" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
        <Menu className="h-6 w-6" />
      </Button>
      
      <div 
        className={cn(
          "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!isOpen}
      >
        <div 
          className={cn(
            "absolute top-16 left-0 right-0 bg-background border-b shadow-lg z-50 transform transition-transform duration-300 ease-in-out",
            isOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="flex flex-col p-4 space-y-4">
            <Link 
              href="/" 
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === "/" ? "text-primary" : "hover:text-primary"
              )}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/menu" 
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === "/menu" ? "text-primary" : "hover:text-primary"
              )}
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link 
              href="/approach" 
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === "/approach" ? "text-primary" : "hover:text-primary"
              )}
              onClick={() => setIsOpen(false)}
            >
              Our Approach
            </Link>
            <Link 
              href="/sustainability" 
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === "/sustainability" ? "text-primary" : "hover:text-primary"
              )}
              onClick={() => setIsOpen(false)}
            >
              Sustainability
            </Link>
            <Link 
              href="/contact" 
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === "/contact" ? "text-primary" : "hover:text-primary"
              )}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full mt-2">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Reserve a Table
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
