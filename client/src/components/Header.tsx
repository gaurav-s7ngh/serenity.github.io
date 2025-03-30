import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useMedia } from "react-use";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isLargeScreen = useMedia('(min-width: 768px)', false);
  const [location] = useLocation();

  // Close mobile menu when clicking on a link or on large screens
  const handleNavigation = () => {
    if (!isLargeScreen) {
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 bg-white bg-opacity-95 shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-heading font-bold mr-2">S</div>
          <span className="text-xl font-heading font-semibold text-primary">Serenity</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#services" className="font-medium text-neutral-900 hover:text-primary transition">Services</a>
          <a href="#therapists" className="font-medium text-neutral-900 hover:text-primary transition">Therapists</a>
          <a href="#faq" className="font-medium text-neutral-900 hover:text-primary transition">FAQ</a>
          <a href="#resources" className="font-medium text-neutral-900 hover:text-primary transition">Resources</a>
          <a href="#contact" className="font-medium text-neutral-900 hover:text-primary transition">Contact</a>
          <Button asChild>
            <a href="#waitlist">Join Waitlist</a>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-900 focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a 
              href="#services" 
              className="font-medium text-neutral-900 py-2 border-b border-gray-100"
              onClick={handleNavigation}
            >
              Services
            </a>
            <a 
              href="#therapists" 
              className="font-medium text-neutral-900 py-2 border-b border-gray-100"
              onClick={handleNavigation}
            >
              Therapists
            </a>
            <a 
              href="#faq" 
              className="font-medium text-neutral-900 py-2 border-b border-gray-100"
              onClick={handleNavigation}
            >
              FAQ
            </a>
            <a 
              href="#resources" 
              className="font-medium text-neutral-900 py-2 border-b border-gray-100"
              onClick={handleNavigation}
            >
              Resources
            </a>
            <a 
              href="#contact" 
              className="font-medium text-neutral-900 py-2 border-b border-gray-100"
              onClick={handleNavigation}
            >
              Contact
            </a>
            <Button 
              asChild 
              className="w-full"
              onClick={handleNavigation}
            >
              <a href="#waitlist">Join Waitlist</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
