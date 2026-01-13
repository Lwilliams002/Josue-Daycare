import { Heart, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">Sunshine Kids</span>
            </div>
            <p className="text-card/70 text-sm">
              Providing quality, government-funded childcare for families in our community. 
              Every child deserves a bright start.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-card/70">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span>123 Sunshine Lane<br />Happyville, ST 12345</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-card/70">
                <Phone className="w-4 h-4 text-primary" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-card/70">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@sunshinekids.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Hours</h4>
            <ul className="space-y-2 text-sm text-card/70">
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-secondary" />
                <span>Monday – Friday</span>
              </li>
              <li className="pl-7">6:30 AM – 6:30 PM</li>
              <li className="pt-2 pl-7 text-card/50">
                Closed weekends & major holidays
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm text-card/70 hover:text-card transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm text-card/70 hover:text-card transition-colors"
                >
                  Our Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm text-card/70 hover:text-card transition-colors"
                >
                  Enroll Today
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-card/10 mt-12 pt-8 text-center">
          <p className="text-sm text-card/50">
            © {new Date().getFullYear()} Sunshine Kids Daycare. All rights reserved. 
            Government-funded childcare for our community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
