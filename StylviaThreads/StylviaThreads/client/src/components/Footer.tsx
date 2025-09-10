import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const [footerEmail, setFooterEmail] = useState("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFooterSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle footer newsletter subscription
    setFooterEmail("");
  };

  return (
    <footer className="bg-foreground text-background py-12" data-testid="footer">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div data-testid="footer-brand">
            <h3 className="text-2xl font-serif font-bold mb-4">Stylvia</h3>
            <p className="text-background/80 mb-4">
              Redefining everyday clothing with style, comfort, and affordability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-background transition-colors" data-testid="footer-social-pinterest">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.404-5.958 1.404-5.958s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors" data-testid="footer-social-twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div data-testid="footer-quick-links">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-background/80 hover:text-background transition-colors text-left"
                  data-testid="footer-link-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-background/80 hover:text-background transition-colors text-left"
                  data-testid="footer-link-about"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('collections')} 
                  className="text-background/80 hover:text-background transition-colors text-left"
                  data-testid="footer-link-collections"
                >
                  Collections
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('lookbook')} 
                  className="text-background/80 hover:text-background transition-colors text-left"
                  data-testid="footer-link-lookbook"
                >
                  Lookbook
                </button>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div data-testid="footer-customer-service">
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-size-guide">Size Guide</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-shipping">Shipping Info</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors" data-testid="footer-link-returns">Returns</a></li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-background/80 hover:text-background transition-colors text-left"
                  data-testid="footer-link-contact"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div data-testid="footer-newsletter">
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-background/80 text-sm mb-4">Subscribe to our newsletter for the latest fashion updates.</p>
            <form onSubmit={handleFooterSubscribe} className="flex" data-testid="footer-newsletter-form">
              <Input
                type="email"
                placeholder="Your email"
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                className="flex-1 px-3 py-2 bg-background/10 border border-background/20 rounded-l-lg text-background placeholder-background/60 focus:outline-none focus:ring-2 focus:ring-background/50"
                data-testid="footer-newsletter-email"
              />
              <Button
                type="submit"
                className="bg-background text-foreground px-4 py-2 rounded-r-lg hover:bg-background/90 transition-colors"
                data-testid="footer-newsletter-submit"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <motion.div 
          className="border-t border-background/20 mt-8 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-background/60" data-testid="footer-copyright">
            © 2025 Stylvia. This website is created for educational purposes only.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
