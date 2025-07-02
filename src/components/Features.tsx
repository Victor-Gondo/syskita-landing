
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, Target, Calendar, DollarSign } from "lucide-react";

const Features = () => {
  // UPDATE: Customize these features based on your actual sales management capabilities
  const features = [
    {
      icon: <BarChart3 className="h-12 w-12 text-blue-600" />,
      title: "Advanced Analytics",
      description: "Get deep insights into your sales performance with real-time dashboards and custom reports."
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Team Management", 
      description: "Organize your sales team, track individual performance, and optimize territory assignments."
    },
    {
      icon: <Target className="h-12 w-12 text-blue-600" />,
      title: "Lead Tracking",
      description: "Never lose a lead again with our intelligent CRM and automated follow-up systems."
    },
    {
      icon: <Calendar className="h-12 w-12 text-blue-600" />,
      title: "Pipeline Management",
      description: "Visualize your sales pipeline and forecast revenue with AI-powered predictions."
    },
    {
      icon: <DollarSign className="h-12 w-12 text-blue-600" />,
      title: "Revenue Optimization",
      description: "Maximize your revenue potential with smart pricing recommendations and deal insights."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Excel at Sales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive sales management platform provides all the tools your team needs to close more deals and drive growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
