
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UPDATE: Implement your actual newsletter signup logic here
    console.log("Newsletter signup submitted");
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Signup Section */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with Syskita
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Get the latest product updates, sales tips, and exclusive insights delivered to your inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 bg-white text-gray-900 border-0"
                required
                // UPDATE: Connect to your email marketing service (Mailchimp, ConvertKit, etc.)
              />
              <Button type="submit" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Syskita</h3>
              <p className="text-gray-300 mb-6">
                The all-in-one business platform that grows with your company. Start with powerful sales management and expand into complete business operations.
              </p>
              
              {/* UPDATE: Replace with your actual contact information */}
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@syskita.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
            
            {/* Product Links */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-300">
                {/* UPDATE: Link to your actual product pages */}
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#integrations" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#api" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#security" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            
            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                {/* UPDATE: Link to your actual company pages */}
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#press" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Support Links */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                {/* UPDATE: Link to your actual support pages */}
                <li><a href="#help" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#documentation" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#community" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#status" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#contact-support" className="hover:text-white transition-colors">Contact Support</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="bg-gray-700" />
      
      {/* Bottom Footer */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Syskita. All rights reserved.
            </div>
            
            {/* Social Links - UPDATE: Replace with your actual social media URLs */}
            <div className="flex items-center gap-4">
              <a href="#facebook" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#twitter" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#linkedin" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              {/* UPDATE: Link to your actual legal pages */}
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
