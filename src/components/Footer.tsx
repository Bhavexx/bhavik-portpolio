import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, url: "https://www.linkedin.com/in/bhavik-naik-/", label: "LinkedIn" },
    { icon: Twitter, url: "https://x.com/bhaviknaik05", label: "Twitter" },
    { icon: Github, url: "https://github.com/Bhavexx", label: "GitHub" },
    { icon: Instagram, url: "https://www.instagram.com/bhavik_naik/?utm_source=qr&igsh=YXA5aWp5dmxhYzBp#", label: "Instagram" },
    { icon: Mail, url: "mailto:bhaviknaik05@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-card via-card to-background border-t border-primary/20 mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(200_98%_48%/0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(240_68%_58%/0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4 bg-300% animate-gradient-shift">
              Bhavik Naik
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Freelance MERN Stack & DevOps Developer delivering scalable and reliable web solutions with cutting-edge technologies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:scale-110 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-primary to-secondary rounded-full" />
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block">
                Home
              </Link>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block">
                Projects
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block">
                About
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block">
                Services
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 inline-block">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
