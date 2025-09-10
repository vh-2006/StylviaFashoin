import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const lightboxImages = [
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=1500",
    alt: "Fashion model in trendy street style"
  },
  {
    src: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=1500",
    alt: "Professional woman in business casual"
  },
  {
    src: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=1500",
    alt: "Stylish man in contemporary casual wear"
  },
  {
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=1500",
    alt: "Woman in elegant evening dress"
  },
  {
    src: "https://images.unsplash.com/photo-1566479179817-90a9e8040030?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=1500",
    alt: "Young man in trendy urban streetwear"
  },
  {
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=1500",
    alt: "Fashion model in bohemian summer outfit"
  }
];

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
}

export default function Lightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Listen for lightbox events
  useEffect(() => {
    const handleLightboxOpen = (event: CustomEvent) => {
      setCurrentIndex(event.detail.index);
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    // Add event listener for lightbox open
    window.addEventListener('openLightbox', handleLightboxOpen as EventListener);
    document.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('openLightbox', handleLightboxOpen as EventListener);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
          data-testid="lightbox-overlay"
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              data-testid="lightbox-close-button"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              src={lightboxImages[currentIndex]?.src}
              alt={lightboxImages[currentIndex]?.alt}
              className="max-w-full max-h-full object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              data-testid="lightbox-image"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Create a global function to open lightbox
declare global {
  interface Window {
    openLightbox: (index: number) => void;
  }
}

// Set up global lightbox function
if (typeof window !== 'undefined') {
  window.openLightbox = (index: number) => {
    const event = new CustomEvent('openLightbox', { detail: { index } });
    window.dispatchEvent(event);
  };
}
