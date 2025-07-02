
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserCheck, Package, TrendingUp, Settings } from "lucide-react";

const Roadmap = () => {
  // UPDATE: Customize these upcoming features based on your actual roadmap
  const upcomingFeatures = [
    {
      icon: <UserCheck className="h-10 w-10 text-purple-600" />,
      title: "HR Management",
      description: "Complete employee lifecycle management, from hiring to performance reviews.",
      status: "Coming Q2 2024"
    },
    {
      icon: <Package className="h-10 w-10 text-green-600" />,
      title: "Inventory Tracking", 
      description: "Real-time inventory management with automated reorder points and supplier integration.",
      status: "Coming Q3 2024"
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-orange-600" />,
      title: "Advanced Analytics",
      description: "Cross-platform business intelligence with predictive analytics and custom dashboards.",
      status: "Coming Q4 2024"
    },
    {
      icon: <Settings className="h-10 w-10 text-blue-600" />,
      title: "Workflow Automation",
      description: "No-code automation builder to streamline your business processes across all modules.",
      status: "Coming 2025"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Product Roadmap
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Future of Business Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building more than just sales software. Syskita is evolving into your complete business operations platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {upcomingFeatures.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    {feature.icon}
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        {feature.title}
                      </CardTitle>
                      <Badge variant="outline" className="mt-2 text-sm">
                        {feature.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to influence our roadmap?</p>
          {/* UPDATE: Link to your actual feedback form or contact page */}
          <a href="#contact" className="text-blue-600 hover:text-blue-700 font-semibold underline">
            Share your feature requests →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
