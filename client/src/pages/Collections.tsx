import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Filter } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Classic White Button-Down",
    category: "womens-wear",
    price: 89,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    description: "Timeless white button-down shirt perfect for office or casual wear",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Light Blue", "Pink"]
  },
  {
    id: 2,
    name: "Casual Denim Jacket",
    category: "mens-wear",
    price: 125,
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    description: "Classic denim jacket with modern fit and premium cotton blend",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Indigo", "Black", "Light Wash"]
  },
  {
    id: 3,
    name: "Comfortable Joggers",
    category: "everyday-casual",
    price: 65,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    description: "Ultra-soft joggers perfect for lounging or casual outings",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Gray", "Black", "Navy", "Olive"]
  },
  {
    id: 4,
    name: "Elegant Evening Dress",
    category: "party-outfits",
    price: 195,
    image: "https://images.unsplash.com/photo-1566479179817-90a9e8040030?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    description: "Sophisticated evening dress perfect for special occasions",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Burgundy"]
  },
  {
    id: 5,
    name: "Streetwear Hoodie",
    category: "everyday-casual",
    price: 85,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    description: "Premium cotton hoodie with modern streetwear aesthetic",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Gray", "Olive"]
  },
  {
    id: 6,
    name: "Business Blazer",
    category: "womens-wear",
    price: 155,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    description: "Professional blazer with tailored fit and premium fabric",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Charcoal"]
  },
  {
    id: 7,
    name: "Summer Dress",
    category: "party-outfits",
    price: 95,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    description: "Light and breezy summer dress perfect for warm weather",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Floral", "Solid Blue", "White"]
  },
  {
    id: 8,
    name: "Men's Polo Shirt",
    category: "mens-wear",
    price: 55,
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    description: "Classic polo shirt made from premium cotton pique",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Navy", "Green", "Red"]
  }
];

const categories = [
  { id: "all", name: "All Collections" },
  { id: "womens-wear", name: "Women's Wear" },
  { id: "mens-wear", name: "Men's Wear" },
  { id: "everyday-casual", name: "Everyday Casual" },
  { id: "party-outfits", name: "Party Outfits" }
];

export default function Collections() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

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
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-stylvia-cream via-stylvia-blush to-stylvia-rose">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-stylvia-black" data-testid="collections-hero-title">
              Our Collections
            </h1>
            <p className="text-xl md:text-2xl text-stylvia-black/80 max-w-3xl mx-auto" data-testid="collections-hero-description">
              Discover our carefully curated collections designed for every occasion and style preference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className="text-sm"
                  data-testid={`filter-${category.id}`}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="group bg-card rounded-lg shadow-lg overflow-hidden hover-zoom"
                variants={itemVariants}
                data-testid={`product-${product.id}`}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover"
                    data-testid={`product-image-${product.id}`}
                  />
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                      favorites.includes(product.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/80 text-gray-600 hover:bg-white'
                    }`}
                    data-testid={`favorite-${product.id}`}
                  >
                    <Heart className="w-4 h-4" fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
                  </button>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                      data-testid={`quick-view-${product.id}`}
                    >
                      Quick View
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground" data-testid={`product-name-${product.id}`}>
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3" data-testid={`product-description-${product.id}`}>
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-primary" data-testid={`product-price-${product.id}`}>
                      ${product.price}
                    </span>
                    <div className="flex gap-1">
                      {product.colors.slice(0, 3).map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full border border-border"
                          style={{
                            backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' :
                                           color.toLowerCase() === 'black' ? '#000000' :
                                           color.toLowerCase() === 'navy' ? '#001f3f' :
                                           color.toLowerCase() === 'gray' ? '#808080' :
                                           color.toLowerCase().includes('blue') ? '#007bff' :
                                           color.toLowerCase().includes('pink') ? '#e91e63' :
                                           '#6c757d'
                          }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mb-4">
                    {product.sizes.slice(0, 4).map((size) => (
                      <span
                        key={size}
                        className="px-2 py-1 text-xs border border-border rounded"
                        data-testid={`size-${size}-${product.id}`}
                      >
                        {size}
                      </span>
                    ))}
                    {product.sizes.length > 4 && (
                      <span className="px-2 py-1 text-xs text-muted-foreground">
                        +{product.sizes.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    data-testid={`add-to-cart-${product.id}`}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}