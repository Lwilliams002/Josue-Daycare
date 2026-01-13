import { Check, DollarSign } from "lucide-react";

const benefits = [
  "No registration fees or hidden costs",
  "Nutritious meals and snacks included",
  "Educational materials provided",
  "Small group sizes for individual attention",
  "Indoor and outdoor play areas",
  "Regular progress updates for parents",
  "Holiday and summer programs",
  "Transportation assistance available",
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-sunny-light px-4 py-2 rounded-full mb-6">
              <DollarSign className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-semibold text-accent-foreground">
                100% Government Funded
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Quality Care at <span className="text-primary">No Cost</span> to You
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Thanks to government funding, every family in our community has access 
              to high-quality childcare. No applications for financial aid needed — 
              it's simply free for everyone.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-warm rounded-3xl p-8 md:p-12">
              <div className="text-center">
                <div className="w-24 h-24 bg-card rounded-full flex items-center justify-center mx-auto mb-6 shadow-soft">
                  <span className="text-5xl">🌟</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  FREE Enrollment
                </h3>
                <p className="text-muted-foreground mb-6">
                  All programs, all ages, completely free
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-card rounded-2xl p-4 shadow-soft">
                    <p className="text-2xl font-bold text-primary">$0</p>
                    <p className="text-xs text-muted-foreground">Tuition</p>
                  </div>
                  <div className="bg-card rounded-2xl p-4 shadow-soft">
                    <p className="text-2xl font-bold text-secondary">$0</p>
                    <p className="text-xs text-muted-foreground">Meals</p>
                  </div>
                  <div className="bg-card rounded-2xl p-4 shadow-soft">
                    <p className="text-2xl font-bold text-accent-foreground">$0</p>
                    <p className="text-xs text-muted-foreground">Materials</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-coral-light rounded-full animate-bounce-soft" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-teal-light rounded-full animate-bounce-soft" style={{ animationDelay: "0.5s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
