
const CustomerBanner = () => {
  // UPDATE: Replace these with your actual customer logos
  // Store logo files in the public folder and reference them here
  const customerLogos = [
    { name: "TechCorp", logo: "https://via.placeholder.com/120x60/666666/FFFFFF?text=TechCorp" },
    { name: "SalesPro Inc", logo: "https://via.placeholder.com/120x60/666666/FFFFFF?text=SalesPro" },
    { name: "GrowthCo", logo: "https://via.placeholder.com/120x60/666666/FFFFFF?text=GrowthCo" },
    { name: "BusinessMax", logo: "https://via.placeholder.com/120x60/666666/FFFFFF?text=BusinessMax" },
    { name: "RevenueFlow", logo: "https://via.placeholder.com/120x60/666666/FFFFFF?text=RevenueFlow" },
    { name: "SalesForce Elite", logo: "https://via.placeholder.com/120x60/666666/FFFFFF?text=SFElite" }
  ];

  return (
    <section className="py-16 bg-white border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Trusted by Leading Sales Teams
          </h3>
          <p className="text-gray-600">
            Join thousands of companies that have transformed their sales operations with Syskita
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center max-w-6xl mx-auto">
          {customerLogos.map((customer, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <img 
                src={customer.logo} 
                alt={`${customer.name} logo`}
                className="h-12 object-contain filter brightness-0"
                // UPDATE: Replace placeholder URLs with actual logo files
                // Example: src="/logos/techcorp-logo.png"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>500+ Active Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>98% Customer Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerBanner;
