'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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

  // Close menu when ESC key is pressed
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isOpen]);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="block md:hidden mobile-menu-container relative z-50">
      <Button 
        variant="outline" 
        size="icon" 
        onClick={toggleMenu} 
        aria-label="Toggle menu"
        className="relative z-50"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div 
        className={cn(
          "fixed inset-x-0 top-16 bg-background border-b shadow-lg z-40 transform transition-all duration-200 ease-in-out",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col p-6 space-y-4">
          <Link 
            href="/" 
            className={cn(
              "text-base font-medium transition-colors py-2",
              pathname === "/" ? "text-primary" : "hover:text-primary"
            )}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/menu" 
            className={cn(
              "text-base font-medium transition-colors py-2",
              pathname === "/menu" ? "text-primary" : "hover:text-primary"
            )}
            onClick={() => setIsOpen(false)}
          >
            Menu
          </Link>
          <Link 
            href="/approach" 
            className={cn(
              "text-base font-medium transition-colors py-2",
              pathname === "/approach" ? "text-primary" : "hover:text-primary"
            )}
            onClick={() => setIsOpen(false)}
          >
            Our Approach
          </Link>
          <Link 
            href="/sustainability" 
            className={cn(
              "text-base font-medium transition-colors py-2",
              pathname === "/sustainability" ? "text-primary" : "hover:text-primary"
            )}
            onClick={() => setIsOpen(false)}
          >
            Sustainability
          </Link>
          <Link 
            href="/contact" 
            className={cn(
              "text-base font-medium transition-colors py-2",
              pathname === "/contact" ? "text-primary" : "hover:text-primary"
            )}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-2">
            <Button asChild className="w-full">
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
