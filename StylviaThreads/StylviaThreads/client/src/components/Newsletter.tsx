import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubscribing(true);
    
    // Simulate newsletter subscription
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
      setIsSubscribing(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-background" data-testid="newsletter-section">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-primary to-accent p-12 rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            data-testid="newsletter-card"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary-foreground" data-testid="newsletter-title">
              Stay in Style with Stylvia
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90" data-testid="newsletter-description">
              Subscribe for the latest trends, exclusive offers, and style inspiration delivered to your inbox.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" data-testid="newsletter-form">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                data-testid="newsletter-email-input"
              />
              <Button
                type="submit"
                disabled={isSubscribing}
                className="bg-foreground hover:bg-foreground/90 text-background px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                data-testid="newsletter-submit-button"
              >
                {isSubscribing ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
            
            <p className="text-sm text-primary-foreground/70 mt-4" data-testid="newsletter-disclaimer">
              No spam, unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
