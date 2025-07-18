import { Check } from "lucide-react";

const PricingSection = () => {
  const packages = [
    {
      name: "Starter Package",
      price: "$299",
      period: "/month",
      description: "Perfect for emerging artists",
      features: [
        "Social growth strategy",
        "Content planning",
        "Weekly performance reports",
        "Basic playlist pitching",
        "Email support"
      ]
    },
    {
      name: "Professional Package",
      price: "$599",
      period: "/month",
      description: "For serious career growth",
      features: [
        "Everything in Starter",
        "Targeted ad campaigns",
        "Advanced playlist pitching",
        "Influencer collaborations",
        "Monthly strategy calls",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Elite Package",
      price: "$999",
      period: "/month",
      description: "Complete artist development",
      features: [
        "Everything in Professional",
        "Video production support",
        "PR & media outreach",
        "Radio promotion",
        "Tour marketing",
        "Dedicated account manager",
        "24/7 support"
      ]
    }
  ];

  return (
    <section id="pricing" className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Choose Your Package
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored marketing solutions to fit your career stage and goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`card-elegant text-center relative scroll-reveal ${
                pkg.popular ? 'border-accent scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-tan text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                {pkg.name}
              </h3>
              
              <div className="mb-6">
                <span className="text-4xl md:text-5xl font-bold text-accent">
                  {pkg.price}
                </span>
                <span className="text-muted-foreground text-lg">
                  {pkg.period}
                </span>
              </div>
              
              <p className="text-muted-foreground mb-8">
                {pkg.description}
              </p>
              
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                pkg.popular 
                  ? 'cta-button' 
                  : 'bg-card border border-border text-foreground hover:bg-accent hover:text-accent-foreground'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 scroll-reveal">
          <p className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Start Your Journey Today
          </p>
          <p className="text-lg text-muted-foreground">
            Ready to take your country music career to the next level?
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;