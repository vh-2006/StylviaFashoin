import { motion } from "framer-motion";
import { Heart, Eye, Star } from "lucide-react";

export default function AboutSection() {
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
    <section id="about" className="py-20 bg-background" data-testid="about-section">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-bold mb-8 text-foreground"
            variants={itemVariants}
            data-testid="about-title"
          >
            About Stylvia
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed"
            variants={itemVariants}
            data-testid="about-description"
          >
            Stylvia is a fashion brand dedicated to making everyday clothing trendy, comfortable, and affordable. 
            We believe that great style shouldn't be reserved for special occasions – it should be part of your daily life.
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mt-16"
            variants={containerVariants}
          >
            <motion.div className="text-center" variants={itemVariants} data-testid="mission-card">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground">To make fashion accessible and enjoyable for everyone, every day.</p>
            </motion.div>
            
            <motion.div className="text-center" variants={itemVariants} data-testid="vision-card">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground">To be the go-to brand for stylish, comfortable everyday fashion.</p>
            </motion.div>
            
            <motion.div className="text-center" variants={itemVariants} data-testid="values-card">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Our Values</h3>
              <p className="text-muted-foreground">Quality, affordability, and style in perfect harmony.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
