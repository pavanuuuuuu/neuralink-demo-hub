import { Cpu, Globe, Lock, Sparkles } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Low Latency Processing",
    description: "Real-time signal processing with minimal delay for accurate neural pattern visualization",
    color: "primary",
  },
  {
    icon: Globe,
    title: "Browser-Based Demo",
    description: "No installation required. Experience neural interface technology directly in your browser",
    color: "secondary",
  },
  {
    icon: Lock,
    title: "Safe & Educational",
    description: "Designed for learning and demonstration with simulated data for safety and accessibility",
    color: "primary",
  },
  {
    icon: Sparkles,
    title: "Open Source",
    description: "Fully open codebase encouraging collaboration, learning, and community contributions",
    color: "secondary",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Key <span className="text-primary">Features</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for students, researchers, and anyone curious about neural interfaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isBlue = feature.color === "primary";
              
              return (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-8 space-y-4 hover:scale-[1.02] transition-transform duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      isBlue ? "bg-primary/10 neon-glow" : "bg-secondary/10 violet-glow"
                    }`}
                  >
                    <Icon
                      className={`w-7 h-7 ${
                        isBlue ? "text-primary" : "text-secondary"
                      }`}
                    />
                  </div>
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
