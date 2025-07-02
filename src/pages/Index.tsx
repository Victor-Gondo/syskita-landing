
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Roadmap from "@/components/Roadmap";
import CustomerBanner from "@/components/CustomerBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Roadmap />
      <CustomerBanner />
      <Footer />
    </div>
  );
};

export default Index;
