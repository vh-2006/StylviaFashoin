import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const collections = [
  {
    id: "womens-wear",
    title: "Women's Wear",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
    alt: "Women's fashion collection"
  },
  {
    id: "mens-wear",
    title: "Men's Wear",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
    alt: "Men's fashion collection"
  },
  {
    id: "everyday-casual",
    title: "Everyday Casual",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000",
    alt: "Casual everyday collection"
  },
  {
    id: "party-outfits",
    title: "Party Outfits",
    image: "https://images.unsplash.com/photo-1648090319894-e616a66cd2b2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Party fashion collection"
  }
];

export default function Collections() {
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
    <section id="collections" className="py-20 bg-muted" data-testid="collections-section">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-foreground" data-testid="collections-title">
            Our Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="collections-description">
            Explore our carefully curated collections designed for every occasion and style preference.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {collections.map((collection, index) => (
            <motion.div 
              key={collection.id}
              className="group cursor-pointer"
              variants={itemVariants}
              data-testid={`collection-card-${collection.id}`}
            >
              <div className="relative overflow-hidden rounded-lg bg-card shadow-lg hover-zoom">
                <img 
                  src={collection.image} 
                  alt={collection.alt} 
                  className="w-full h-80 object-cover" 
                  data-testid={`collection-image-${collection.id}`}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-semibold mb-2" data-testid={`collection-title-${collection.id}`}>
                      {collection.title}
                    </h3>
                    <Button 
                      className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                      data-testid={`collection-button-${collection.id}`}
                    >
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
