import architectureImage from "@/assets/architecture-diagram.jpg";

const Architecture = () => {
  return (
    <section id="architecture" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              System <span className="text-secondary">Architecture</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined pipeline from signal acquisition to visualization
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-8">
            <div className="rounded-xl overflow-hidden border border-border/50">
              <img
                src={architectureImage}
                alt="NEURALINK architecture diagram"
                className="w-full h-auto"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-4">
              <div className="space-y-3">
                <div className="text-primary font-semibold text-lg">1. Input Layer</div>
                <p className="text-muted-foreground">
                  Simulated neural signals are captured using sensor arrays, representing real-world EEG data patterns
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-secondary font-semibold text-lg">2. Processing Layer</div>
                <p className="text-muted-foreground">
                  Advanced filtering algorithms clean and amplify relevant neural patterns while removing noise
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-primary font-semibold text-lg">3. Output Layer</div>
                <p className="text-muted-foreground">
                  Real-time visualization displays neural activity patterns in an intuitive, interactive interface
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center">
              Technology <span className="text-primary">Stack</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["React", "TypeScript", "Python", "TensorFlow", "WebGL", "Signal Processing", "Data Visualization", "REST API"].map((tech, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-4 text-center font-medium hover:scale-105 transition-transform duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
