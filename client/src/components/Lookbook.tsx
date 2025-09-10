import { motion } from "framer-motion";
import { useState } from "react";

const lookbookImages = [
  {
    id: 0,
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
    srcLarge: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=1500",
    alt: "Fashion model in trendy street style"
  },
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
    srcLarge: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=1500",
    alt: "Professional woman in business casual"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
    srcLarge: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=1500",
    alt: "Stylish man in contemporary casual wear"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
    srcLarge: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=1500",
    alt: "Woman in elegant evening dress"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1635650804263-1a1941e14df5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    srcLarge: "https://images.unsplash.com/photo-1635650804263-1a1941e14df5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Young man in trendy urban streetwear"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
    srcLarge: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=1500",
    alt: "Fashion model in bohemian summer outfit"
  }
];

interface LookbookProps {
  onImageClick: (index: number) => void;
}

export default function Lookbook({ onImageClick }: LookbookProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="lookbook" className="py-20 bg-background parallax-scroll" data-testid="lookbook-section">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-foreground" data-testid="lookbook-title">
            Lookbook
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="lookbook-description">
            Get inspired by our latest fashion photoshoots and styling ideas.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {lookbookImages.map((image, index) => (
            <motion.div 
              key={image.id}
              className="group cursor-pointer"
              variants={itemVariants}
              onClick={() => onImageClick(index)}
              data-testid={`lookbook-image-${index}`}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg hover-zoom">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-96 object-cover" 
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
