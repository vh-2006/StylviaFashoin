import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    if (location !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border" data-testid="navigation">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-serif font-bold text-primary cursor-pointer" data-testid="logo">Stylvia</h1>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="nav-home"
            >
              Home
            </Link>
            <Link 
              href="/about"
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="nav-about"
            >
              About
            </Link>
            <Link 
              href="/collections"
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="nav-collections"
            >
              Collections
            </Link>
            <button 
              onClick={() => scrollToSection('lookbook')} 
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="nav-lookbook"
            >
              Lookbook
            </button>
            <Link 
              href="/blog"
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="nav-blog"
            >
              Blog
            </Link>
            <Link 
              href="/contact"
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="nav-contact"
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={toggleMenu}
            data-testid="mobile-menu-toggle"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-16 left-0 w-full h-screen bg-background/95 backdrop-blur-md z-40 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`} data-testid="mobile-menu">
        <div className="flex flex-col p-6 space-y-4">
          <Link 
            href="/"
            className="text-foreground hover:text-primary transition-colors font-medium py-2 text-left"
            data-testid="mobile-nav-home"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about"
            className="text-foreground hover:text-primary transition-colors font-medium py-2 text-left"
            data-testid="mobile-nav-about"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/collections"
            className="text-foreground hover:text-primary transition-colors font-medium py-2 text-left"
            data-testid="mobile-nav-collections"
            onClick={() => setIsMenuOpen(false)}
          >
            Collections
          </Link>
          <button 
            onClick={() => scrollToSection('lookbook')} 
            className="text-foreground hover:text-primary transition-colors font-medium py-2 text-left"
            data-testid="mobile-nav-lookbook"
          >
            Lookbook
          </button>
          <Link 
            href="/blog"
            className="text-foreground hover:text-primary transition-colors font-medium py-2 text-left"
            data-testid="mobile-nav-blog"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            href="/contact"
            className="text-foreground hover:text-primary transition-colors font-medium py-2 text-left"
            data-testid="mobile-nav-contact"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
