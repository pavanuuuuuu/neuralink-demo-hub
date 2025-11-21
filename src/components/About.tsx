import { Brain, Zap, Activity } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Problem Statement */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              The <span className="text-primary">Challenge</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              Neural interfaces have the potential to revolutionize how we interact with technology, 
              but the field remains complex and inaccessible to many students and researchers.
            </p>
          </div>

          {/* Solution */}
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold">
                Our <span className="text-secondary">Solution</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                NEURALINK is a lightweight neural-interface prototype that makes brain-computer 
                interaction accessible. We combine signal acquisition, preprocessing, and 
                real-time visualization in an easy-to-understand demo.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center neon-glow">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold">Signal Acquisition</h4>
                <p className="text-muted-foreground">
                  Capture neural patterns with precision and reliability
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-2xl flex items-center justify-center violet-glow">
                  <Zap className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-xl font-semibold">Preprocessing</h4>
                <p className="text-muted-foreground">
                  Clean and filter signals for accurate interpretation
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center neon-glow">
                  <Activity className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold">Visualization</h4>
                <p className="text-muted-foreground">
                  Real-time display of neural patterns in browser
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
