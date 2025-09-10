import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToCollections = () => {
    const element = document.getElementById('collections');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Stylish fashion model in contemporary clothing" 
          className="w-full h-full object-cover" 
          data-testid="hero-background-image"
        />
      </div>
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-stylvia-cream/70 via-stylvia-blush/60 to-stylvia-rose/50 animate-gradient-x"></div>
      
      {/* Abstract Floating Shapes */}
      <div className="absolute inset-0">
        {/* Large soft circles */}
        <div className="absolute w-96 h-96 bg-gradient-to-r from-stylvia-rose/30 to-stylvia-blush/20 rounded-full blur-3xl animate-float top-10 -left-20"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-stylvia-beige/40 to-stylvia-cream/30 rounded-full blur-2xl animate-float top-40 right-10" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-stylvia-blush/25 to-stylvia-rose/15 rounded-full blur-xl animate-float bottom-20 left-20" style={{ animationDelay: '-4s' }}></div>
        
        {/* Smaller geometric shapes */}
        <div className="absolute w-32 h-32 bg-stylvia-rose/20 rounded-full animate-pulse top-32 left-1/4"></div>
        <div className="absolute w-24 h-24 bg-stylvia-blush/25 rounded-lg rotate-45 animate-bounce bottom-40 right-1/4" style={{ animationDuration: '3s' }}></div>
        <div className="absolute w-16 h-16 bg-stylvia-beige/30 rounded-full animate-ping top-60 right-1/3" style={{ animationDuration: '4s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute w-4 h-4 bg-stylvia-rose/40 rounded-full animate-float top-1/4 left-1/2" style={{ animationDelay: '-1s' }}></div>
        <div className="absolute w-6 h-6 bg-stylvia-blush/30 rounded-full animate-float top-3/4 left-1/3" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute w-3 h-3 bg-stylvia-cream/50 rounded-full animate-float bottom-1/4 right-1/2" style={{ animationDelay: '-5s' }}></div>
      </div>
      
      {/* Text Shadow Backdrop for Better Readability */}
      <div className="absolute inset-0 bg-black/5 z-5"></div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 lg:px-6 text-center z-10 relative">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-serif font-bold mb-6 text-stylvia-black drop-shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            data-testid="hero-title"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
          >
            Stylvia
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl font-medium mb-6 text-stylvia-black/80 drop-shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            data-testid="hero-tagline"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
          >
            Redefining Everyday Clothing
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl mb-8 text-stylvia-black/70 max-w-2xl mx-auto drop-shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            data-testid="hero-description"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
          >
            Discover trendy, comfortable, and affordable fashion that transforms your everyday style
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <Button 
              onClick={scrollToCollections}
              className="bg-stylvia-black hover:bg-stylvia-black/90 text-stylvia-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
              data-testid="hero-cta"
            >
              Explore Collection
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
