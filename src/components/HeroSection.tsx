import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Star } from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";

const HeroSection = () => {
  const scrollToEnroll = () => {
    document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 w-20 h-20 bg-sunny-light rounded-full animate-float opacity-60" />
      <div className="absolute top-48 right-20 w-16 h-16 bg-teal-light rounded-full animate-float opacity-60" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-coral-light rounded-full animate-float opacity-60" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-sunny-light px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-semibold text-accent-foreground">
                100% FREE — Government Funded
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
              Where Little{" "}
              <span className="text-primary">Hearts</span>{" "}
              Grow & <span className="text-secondary">Learn</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              A nurturing daycare for children ages newborn to 11 years. 
              Your child deserves the best start in life — and it's completely free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" onClick={scrollToEnroll}>
                <Heart className="w-5 h-5" />
                Enroll Your Child
              </Button>
              <Button variant="heroSecondary" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-teal-light flex items-center justify-center">
                  <Star className="w-5 h-5 text-secondary fill-secondary" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-foreground">Licensed</p>
                  <p className="text-sm text-muted-foreground">State Certified</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-coral-light flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary fill-primary" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-foreground">Caring</p>
                  <p className="text-sm text-muted-foreground">Trained Staff</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-playful">
              <img
                src={heroImage}
                alt="Happy children playing and learning together"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-soft border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-sunny flex items-center justify-center">
                  <span className="text-2xl">👶</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">Ages 0-11</p>
                  <p className="text-sm text-muted-foreground">All Welcome!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
