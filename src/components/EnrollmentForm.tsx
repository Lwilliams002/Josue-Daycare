import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Heart, Send } from "lucide-react";

const EnrollmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    childName: "",
    childDob: "",
    ageGroup: "",
    parentName: "",
    email: "",
    phone: "",
    address: "",
    specialNeeds: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, ageGroup: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Enrollment submitted!", {
      description: "We'll contact you within 2 business days to complete registration.",
    });
    
    setFormData({
      childName: "",
      childDob: "",
      ageGroup: "",
      parentName: "",
      email: "",
      phone: "",
      address: "",
      specialNeeds: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="enroll" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-coral-light px-4 py-2 rounded-full mb-4">
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-semibold text-foreground">Start Your Journey</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Enroll Your Child Today
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and our team will reach out to complete the enrollment process.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-6 md:p-10 shadow-soft border border-border">
            <div className="space-y-6">
              {/* Child Information */}
              <div>
                <h3 className="text-lg font-display font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-sunny rounded-lg flex items-center justify-center text-sm">👶</span>
                  Child Information
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="childName">Child's Full Name *</Label>
                    <Input
                      id="childName"
                      name="childName"
                      value={formData.childName}
                      onChange={handleChange}
                      placeholder="Enter child's name"
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="childDob">Date of Birth *</Label>
                    <Input
                      id="childDob"
                      name="childDob"
                      type="date"
                      value={formData.childDob}
                      onChange={handleChange}
                      required
                      className="rounded-xl"
                    />
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <Label htmlFor="ageGroup">Program / Age Group *</Label>
                  <Select value={formData.ageGroup} onValueChange={handleSelectChange} required>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border border-border z-50">
                      <SelectItem value="infant">Infant Care (0-12 months)</SelectItem>
                      <SelectItem value="toddler">Toddler Program (1-3 years)</SelectItem>
                      <SelectItem value="preschool">Preschool (3-5 years)</SelectItem>
                      <SelectItem value="schoolage">School Age (6-11 years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="border-t border-border" />

              {/* Parent Information */}
              <div>
                <h3 className="text-lg font-display font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-teal-light rounded-lg flex items-center justify-center text-sm">👨‍👩‍👧</span>
                  Parent / Guardian Information
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="parentName">Full Name *</Label>
                    <Input
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      required
                      className="rounded-xl"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Street address"
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-border" />

              {/* Additional Info */}
              <div className="space-y-2">
                <Label htmlFor="specialNeeds">Special Needs or Notes (Optional)</Label>
                <Textarea
                  id="specialNeeds"
                  name="specialNeeds"
                  value={formData.specialNeeds}
                  onChange={handleChange}
                  placeholder="Allergies, medical conditions, dietary restrictions, or any other information we should know..."
                  rows={4}
                  className="rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Submitting...</>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Enrollment
                  </>
                )}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                By submitting, you agree to be contacted by our enrollment team. 
                Your information is kept confidential.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentForm;
