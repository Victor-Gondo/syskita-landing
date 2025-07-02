
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* UPDATE: Replace with your actual headline */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Supercharge Your Sales Team with{" "}
            <span className="text-blue-600">Syskita</span>
          </h1>
          
          {/* UPDATE: Replace with your actual sub-headline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The all-in-one business platform that starts with powerful sales management 
            and grows with your company's needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* UPDATE: Link to your actual signup/demo page */}
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            {/* UPDATE: Link to your actual demo video or product tour */}
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Trust indicators - UPDATE: Replace with actual customer metrics */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-blue-600">10,000+</span>
              <span>Sales Teams</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-blue-600">$50M+</span>
              <span>Revenue Generated</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-blue-600">99.9%</span>
              <span>Uptime</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-200 rounded-full opacity-20"></div>
      </div>
    </section>
  );
};

export default Hero;
