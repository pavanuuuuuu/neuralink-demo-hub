import { Github, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Lead Developer",
    bio: "Specializes in neural signal processing and real-time systems",
  },
  {
    name: "Sarah Rodriguez",
    role: "UI/UX Designer",
    bio: "Focused on creating intuitive interfaces for complex data",
  },
  {
    name: "Jordan Kim",
    role: "Backend Engineer",
    bio: "Handles data processing pipelines and API development",
  },
  {
    name: "Taylor Morgan",
    role: "Research Lead",
    bio: "Explores cutting-edge neural interface methodologies",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Meet the <span className="text-secondary">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate group of students exploring the future of brain-computer interfaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 space-y-4 hover:scale-[1.02] transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full border-2 border-primary/30"></div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="flex justify-center gap-3 pt-2">
                  <button
                    className="w-8 h-8 rounded-lg bg-muted/50 hover:bg-primary/20 flex items-center justify-center transition-colors"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github size={16} />
                  </button>
                  <button
                    className="w-8 h-8 rounded-lg bg-muted/50 hover:bg-primary/20 flex items-center justify-center transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin size={16} />
                  </button>
                  <button
                    className="w-8 h-8 rounded-lg bg-muted/50 hover:bg-primary/20 flex items-center justify-center transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
