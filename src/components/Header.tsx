import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold neon-text">NEURALINK</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("architecture")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Architecture
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Team
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="neon-glow"
            >
              Get Involved
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("architecture")}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors"
            >
              Architecture
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors"
            >
              Team
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full neon-glow"
            >
              Get Involved
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
