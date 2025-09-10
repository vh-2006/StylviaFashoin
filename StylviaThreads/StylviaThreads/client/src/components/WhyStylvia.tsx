import { motion } from "framer-motion";
import { DollarSign, CheckCircle, Globe } from "lucide-react";

export default function WhyStylvia() {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-muted" data-testid="why-stylvia-section">
      <div className="container mx-auto px-4 lg:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-foreground" data-testid="why-stylvia-title">
            Why Choose Stylvia?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="why-stylvia-description">
            Discover what makes us the perfect choice for your fashion needs.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="bg-card p-8 rounded-lg shadow-lg text-center hover-zoom"
            variants={itemVariants}
            data-testid="affordable-trends-card"
          >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <DollarSign className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Affordable Trends</h3>
            <p className="text-muted-foreground">Stay on-trend without breaking the bank. Our prices are designed to make fashion accessible to everyone.</p>
          </motion.div>
          
          <motion.div 
            className="bg-card p-8 rounded-lg shadow-lg text-center hover-zoom"
            variants={itemVariants}
            data-testid="premium-fabrics-card"
          >
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Premium Fabrics</h3>
            <p className="text-muted-foreground">We source only the finest materials to ensure comfort, durability, and style in every piece.</p>
          </motion.div>
          
          <motion.div 
            className="bg-card p-8 rounded-lg shadow-lg text-center hover-zoom"
            variants={itemVariants}
            data-testid="global-inspiration-card"
          >
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Global Inspiration</h3>
            <p className="text-muted-foreground">Our designs are inspired by fashion capitals around the world, bringing you international style.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
