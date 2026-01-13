import { Heart, Users, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Nurturing Environment",
    description: "We create a warm, loving space where every child feels safe, valued, and ready to explore.",
    color: "bg-coral-light",
    iconColor: "text-primary",
  },
  {
    icon: Users,
    title: "Qualified Caregivers",
    description: "Our team consists of trained professionals passionate about early childhood development.",
    color: "bg-teal-light",
    iconColor: "text-secondary",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "We accommodate working families with extended hours to fit your schedule.",
    color: "bg-sunny-light",
    iconColor: "text-accent-foreground",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "State-licensed facility with strict safety protocols and secure check-in/check-out.",
    color: "bg-lavender-light",
    iconColor: "text-lavender",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            A Place Where Children <span className="text-primary">Thrive</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            At Sunshine Kids, we believe every child deserves access to quality early 
            education and care — regardless of family income. That's why our services 
            are completely funded by the government.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-float bg-background p-6 rounded-2xl border border-border"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-4`}>
                <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
