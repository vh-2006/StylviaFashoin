import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Collections from "@/components/Collections";
import Lookbook from "@/components/Lookbook";
import WhyStylvia from "@/components/WhyStylvia";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import Newsletter from "@/components/Newsletter";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <Collections />
      <Lookbook onImageClick={(index) => window.openLightbox?.(index)} />
      <WhyStylvia />
      <Testimonials />
      <BlogSection />
      <Newsletter />
      <ContactSection />
      <Footer />
      <Lightbox />
    </div>
  );
}
