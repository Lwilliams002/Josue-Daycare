import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Sunshine Kids
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("programs")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Why Us
            </button>
            <Button
              variant="default"
              onClick={() => scrollToSection("enroll")}
            >
              Enroll Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium text-left py-2"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("programs")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium text-left py-2"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium text-left py-2"
            >
              Why Us
            </button>
            <Button
              variant="default"
              onClick={() => scrollToSection("enroll")}
              className="w-full"
            >
              Enroll Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
