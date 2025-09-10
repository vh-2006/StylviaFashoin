import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Eye, Star, Award, Users, Leaf } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
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
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-stylvia-black" data-testid="about-hero-title">
              About Stylvia
            </h1>
            <p className="text-xl md:text-2xl text-stylvia-black/80 max-w-3xl mx-auto" data-testid="about-hero-description">
              Redefining everyday clothing through innovative design, sustainable practices, and accessible fashion for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold mb-6 text-foreground" data-testid="our-story-title">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6" data-testid="our-story-text">
                Founded in 2020, Stylvia began as a vision to make high-quality fashion accessible to everyone. 
                We believe that great style shouldn't be reserved for special occasions – it should be part of your daily life.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our journey started with a simple question: Why can't everyday clothing be both comfortable and stylish? 
                This led us to create a brand that focuses on versatile pieces that seamlessly transition from day to night, 
                work to weekend, and season to season.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, Stylvia is committed to sustainable fashion practices while maintaining our core values of 
                affordability, quality, and style. We're not just a clothing brand – we're a community of fashion enthusiasts 
                who believe in expressing individuality through thoughtful design.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Fashion design process at Stylvia" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                data-testid="our-story-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-foreground" data-testid="values-section-title">
              Our Foundation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on strong principles that guide every decision we make.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="text-center bg-card p-8 rounded-lg shadow-lg" variants={itemVariants} data-testid="mission-card">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground">
                To make fashion accessible, enjoyable, and sustainable for everyone, every day. 
                We create versatile pieces that enhance your lifestyle without compromising on quality or values.
              </p>
            </motion.div>

            <motion.div className="text-center bg-card p-8 rounded-lg shadow-lg" variants={itemVariants} data-testid="vision-card">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the global leader in everyday fashion, inspiring confidence and self-expression 
                while pioneering sustainable practices in the fashion industry.
              </p>
            </motion.div>

            <motion.div className="text-center bg-card p-8 rounded-lg shadow-lg" variants={itemVariants} data-testid="values-card">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Our Values</h3>
              <p className="text-muted-foreground">
                Quality craftsmanship, ethical production, environmental responsibility, and customer satisfaction 
                are at the heart of everything we do.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Stylvia */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-foreground" data-testid="why-choose-title">
              Why Choose Stylvia?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover what sets us apart in the world of fashion.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="text-center" variants={itemVariants} data-testid="quality-card">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Premium Quality</h3>
              <p className="text-muted-foreground">
                Every piece is crafted with attention to detail using premium fabrics and materials 
                that ensure durability and comfort.
              </p>
            </motion.div>

            <motion.div className="text-center" variants={itemVariants} data-testid="community-card">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Community Focused</h3>
              <p className="text-muted-foreground">
                We build lasting relationships with our customers, listening to feedback and 
                continuously improving our products and services.
              </p>
            </motion.div>

            <motion.div className="text-center" variants={itemVariants} data-testid="sustainability-card">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Sustainable Practice</h3>
              <p className="text-muted-foreground">
                Committed to reducing our environmental impact through sustainable sourcing, 
                ethical manufacturing, and responsible packaging.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}