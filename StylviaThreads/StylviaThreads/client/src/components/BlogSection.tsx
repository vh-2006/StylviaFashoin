import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Streetwear Trends",
    description: "Discover the hottest streetwear trends that are dominating the fashion scene this season.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Streetwear trends fashion outfit"
  },
  {
    id: 2,
    title: "How to Style Your Everyday Casuals",
    description: "Learn how to elevate your casual wear with simple styling tricks and accessories.",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Casual clothing styling outfit"
  },
  {
    id: 3,
    title: "Building a Capsule Wardrobe",
    description: "Create a versatile wardrobe with essential pieces that work for every occasion.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Professional wardrobe fashion essentials"
  }
];

export default function BlogSection() {
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
    <section id="blog" className="py-20 bg-muted" data-testid="blog-section">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-foreground" data-testid="blog-title">
            Fashion Blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="blog-description">
            Stay updated with the latest fashion trends, styling tips, and style inspiration.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              className="bg-card rounded-lg shadow-lg overflow-hidden hover-zoom"
              variants={itemVariants}
              data-testid={`blog-post-${post.id}`}
            >
              <img 
                src={post.image} 
                alt={post.alt} 
                className="w-full h-48 object-cover" 
                data-testid={`blog-image-${post.id}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground" data-testid={`blog-title-${post.id}`}>
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`blog-description-${post.id}`}>
                  {post.description}
                </p>
                <button className="text-primary hover:text-primary/80 font-medium" data-testid={`blog-link-${post.id}`}>
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            data-testid="blog-view-all"
          >
            View All Posts
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
