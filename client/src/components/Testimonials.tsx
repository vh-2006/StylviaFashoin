import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "Stylvia has completely transformed my wardrobe! The quality is amazing and the prices are so reasonable. I get compliments on my outfits every day now.",
    author: "Sarah Johnson",
    role: "Fashion Enthusiast"
  },
  {
    id: 2,
    text: "As a busy professional, I love how Stylvia makes it easy to look put-together every day. Their business casual collection is perfect for my lifestyle.",
    author: "Michael Chen",
    role: "Business Executive"
  },
  {
    id: 3,
    text: "The fabric quality is outstanding and the fit is perfect. Stylvia has become my go-to brand for everything from casual wear to special occasions.",
    author: "Emma Rodriguez",
    role: "Style Blogger"
  }
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 bg-background" data-testid="testimonials-section">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-foreground" data-testid="testimonials-title">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="testimonials-description">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 md:h-48" data-testid="testimonials-slider">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="absolute inset-0 bg-card p-8 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                data-testid={`testimonial-${currentSlide}`}
              >
                <div className="flex justify-center mb-4">
                  <Quote className="w-8 h-8 text-primary" />
                </div>
                <p className="text-lg text-muted-foreground mb-6 italic">
                  "{testimonials[currentSlide].text}"
                </p>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonials[currentSlide].author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[currentSlide].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2" data-testid="testimonials-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-muted'
                }`}
                data-testid={`testimonial-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
