import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Streetwear Trends for 2025",
    excerpt: "Discover the hottest streetwear trends that are dominating the fashion scene this season. From oversized silhouettes to bold graphic prints.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    author: "Sarah Chen",
    date: "March 15, 2025",
    readTime: "5 min read",
    category: "Trends",
    content: "Streetwear continues to evolve, and 2025 brings fresh interpretations of classic styles..."
  },
  {
    id: 2,
    title: "How to Style Your Everyday Casuals",
    excerpt: "Learn how to elevate your casual wear with simple styling tricks and accessories that make a big difference.",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    author: "Michael Rodriguez",
    date: "March 12, 2025",
    readTime: "4 min read",
    category: "Styling",
    content: "Casual doesn't have to mean boring. With the right approach, your everyday outfits can be both comfortable and stylish..."
  },
  {
    id: 3,
    title: "Building a Capsule Wardrobe That Works",
    excerpt: "Create a versatile wardrobe with essential pieces that work for every occasion. Quality over quantity is the key.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    author: "Emma Thompson",
    date: "March 10, 2025",
    readTime: "6 min read",
    category: "Wardrobe",
    content: "A capsule wardrobe is a curated collection of versatile, high-quality pieces that can be mixed and matched..."
  },
  {
    id: 4,
    title: "Sustainable Fashion: Why It Matters",
    excerpt: "Understanding the impact of fast fashion and how to make more conscious clothing choices for a better future.",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    author: "Alex Johnson",
    date: "March 8, 2025",
    readTime: "7 min read",
    category: "Sustainability",
    content: "The fashion industry is one of the world's largest polluters, but together we can make a difference..."
  },
  {
    id: 5,
    title: "Color Theory in Fashion",
    excerpt: "Master the art of color coordination and learn which colors work best with your skin tone and personal style.",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    author: "Lisa Park",
    date: "March 5, 2025",
    readTime: "5 min read",
    category: "Styling",
    content: "Understanding color theory can transform your wardrobe and boost your confidence..."
  },
  {
    id: 6,
    title: "From Day to Night: Versatile Pieces",
    excerpt: "Discover clothing pieces that effortlessly transition from office wear to evening outfits with simple styling changes.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    author: "David Kim",
    date: "March 3, 2025",
    readTime: "4 min read",
    category: "Versatility",
    content: "The modern lifestyle demands clothing that can adapt to different occasions throughout the day..."
  }
];

const categories = ["All", "Trends", "Styling", "Wardrobe", "Sustainability", "Versatility"];

export default function Blog() {
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
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-stylvia-black" data-testid="blog-hero-title">
              Fashion Blog
            </h1>
            <p className="text-xl md:text-2xl text-stylvia-black/80 max-w-3xl mx-auto" data-testid="blog-hero-description">
              Stay updated with the latest fashion trends, styling tips, and style inspiration from our fashion experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold mb-8 text-foreground" data-testid="featured-title">
              Featured Article
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 bg-card rounded-lg shadow-lg overflow-hidden">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-80 lg:h-full object-cover"
                data-testid="featured-image"
              />
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {blogPosts[0].date}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground" data-testid="featured-post-title">
                  {blogPosts[0].title}
                </h3>
                <p className="text-muted-foreground mb-6" data-testid="featured-excerpt">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="w-4 h-4 mr-1" />
                    {blogPosts[0].author} • {blogPosts[0].readTime}
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold mb-6 text-foreground" data-testid="latest-posts-title">
              Latest Posts
            </h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="text-sm"
                  data-testid={`category-${category.toLowerCase()}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {blogPosts.slice(1).map((post) => (
              <motion.article
                key={post.id}
                className="bg-card rounded-lg shadow-lg overflow-hidden hover-zoom group"
                variants={itemVariants}
                data-testid={`blog-post-${post.id}`}
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    data-testid={`blog-image-${post.id}`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors" data-testid={`blog-title-${post.id}`}>
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4" data-testid={`blog-excerpt-${post.id}`}>
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  
                  <Button
                    variant="ghost"
                    className="w-full mt-4 text-primary hover:text-primary/80"
                    data-testid={`read-more-${post.id}`}
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
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
              data-testid="load-more-posts"
            >
              Load More Posts
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}