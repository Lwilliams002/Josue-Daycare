import { Baby, Smile, GraduationCap, Users } from "lucide-react";

const programs = [
  {
    icon: Baby,
    title: "Infant Care",
    ages: "0-12 months",
    description: "Gentle, attentive care for your youngest ones with focus on comfort, bonding, and early sensory development.",
    color: "bg-coral",
    bgColor: "bg-coral-light",
  },
  {
    icon: Smile,
    title: "Toddler Program",
    ages: "1-3 years",
    description: "Playful learning experiences that encourage curiosity, language development, and social skills.",
    color: "bg-sunny",
    bgColor: "bg-sunny-light",
  },
  {
    icon: GraduationCap,
    title: "Preschool",
    ages: "3-5 years",
    description: "Structured curriculum preparing children for kindergarten with literacy, math, and creative arts.",
    color: "bg-secondary",
    bgColor: "bg-teal-light",
  },
  {
    icon: Users,
    title: "School Age",
    ages: "6-11 years",
    description: "Before and after school care with homework help, enrichment activities, and supervised play.",
    color: "bg-lavender",
    bgColor: "bg-lavender-light",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Programs for <span className="text-secondary">Every Age</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From newborns to pre-teens, we provide age-appropriate care and 
            education tailored to each developmental stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="card-float bg-card p-6 rounded-3xl shadow-soft overflow-hidden relative group"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 ${program.bgColor} rounded-bl-full -translate-y-4 translate-x-4 group-hover:scale-110 transition-transform duration-300`} />
              
              <div className={`relative w-16 h-16 ${program.color} rounded-2xl flex items-center justify-center mb-4`}>
                <program.icon className="w-8 h-8 text-card" />
              </div>
              
              <span className={`inline-block px-3 py-1 ${program.bgColor} rounded-full text-sm font-semibold text-foreground mb-3`}>
                {program.ages}
              </span>
              
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {program.title}
              </h3>
              
              <p className="text-muted-foreground text-sm">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
