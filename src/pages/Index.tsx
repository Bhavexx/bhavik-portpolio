import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowRight, Code2, Database, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import profileImage from "@/assets/bhavik.png";
import { useState } from "react";

const Index = () => {
  const [isHireDialogOpen, setIsHireDialogOpen] = useState(false);
  const [isSubmittingHire, setIsSubmittingHire] = useState(false);
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const { toast } = useToast();

  const socialLinks = [
    { icon: Linkedin, url: "https://www.linkedin.com/in/bhavik-naik-/", label: "LinkedIn" },
    { icon: Twitter, url: "https://x.com/bhaviknaik05", label: "Twitter" },
    { icon: Github, url: "https://github.com/Bhavexx", label: "GitHub" },
    { icon: Instagram, url: "https://www.instagram.com/bhavik_naik/?utm_source=qr&igsh=YXA5aWp5dmxhYzBp#", label: "Instagram" },
    { icon: Mail, url: "mailto:bhaviknaik05@gmail.com", label: "Email" },
  ];

  const featuredProjects = [
    {
      title: "YaYa Car Services",
      description: "Professional car service booking platform with real-time scheduling and management",
      url: "http://yaya-car-services.vercel.app/",
      tech: "MERN Stack"
    },
    {
      title: "Gemini Clone",
      description: "AI-powered chatbot interface with advanced conversation capabilities",
      url: "https://gemini-clone-main-zeta.vercel.app",
      tech: "React.js, API Integration"
    },
    {
      title: "Royal Ethnic E-commerce",
      description: "Full-featured e-commerce platform for ethnic wear with payment integration",
      url: "https://royal-ethnic-ecommer-webapplication.vercel.app/",
      tech: "Full Stack Web Application"
    }
  ];

  const experiences = [
    {
      company: "Siddab Pvt Company",
      period: "May 2026 - Present",
      role: "Frontend Developer",
      description: [
        "Developing responsive web applications and implementing modern UI features.",
        "Collaborating with the design and engineering teams to translate wireframes into interactive components.",
        "Working on frontend architecture optimization and improving code modularity."
      ]
    },
    {
      company: "Learn X Chain",
      period: "November 2025 - January 2026",
      role: "Frontend Developer",
      description: [
        "Developed scalable and responsive user interfaces using React.js, JavaScript (ES6+), HTML5, and CSS3 for production-level web applications.",
        "Built reusable React.js components to improve UI consistency and streamline frontend development workflows.",
        "Integrated RESTful APIs and dynamic data rendering to enhance user interaction and application functionality.",
        "Optimized frontend performance and improved cross-browser compatibility across desktop and mobile devices.",
        "Collaborated with designers, backend developers, and QA teams in Agile/Scrum environments to deliver features within project deadlines.",
        "Followed clean code practices and Git-based version control to maintain scalable and maintainable codebases."
      ]
    },
    {
      company: "CodeAlpha",
      period: "November 2024 - April 2025",
      role: "Developer Intern",
      description: [
        "Developed full-stack web applications using React.js, Node.js, Express.js, and MongoDB for prototype and production-ready solutions.",
        "Designed and implemented RESTful APIs for authentication, CRUD operations, and user data management.",
        "Integrated frontend interfaces with backend services to enable seamless client-server communication.",
        "Collaborated with product managers and UI/UX designers to translate business requirements into functional web applications.",
        "Implemented responsive UI components and optimized application workflows to improve user experience.",
        "Participated in Agile/Scrum development processes, debugging, documentation, and feature enhancement activities.",
        "Worked with Git/GitHub version control systems to manage collaborative development and code maintenance."
      ]
    },
    {
      company: "Codaaz",
      period: "September 2024 - March 2025",
      role: "Developer Intern",
      description: [
        "Designed and developed responsive frontend interfaces using React.js and Angular for modern web applications.",
        "Built reusable UI components and optimized layouts to improve usability and user engagement.",
        "Identified, debugged, and resolved frontend issues through testing and performance optimization techniques.",
        "Maintained clean and structured code using Git/GitHub version control practices."
      ]
    }
  ];

  const skills = [
    { category: "Frontend", icon: Code2, items: ["React.js", "HTML5", "CSS3", "TypeScript", "Angular"] },
    { category: "Backend", icon: Server, items: ["Node.js", "Express.js", "REST APIs", "MongoDB"] },
    { category: "DevOps", icon: Database, items: ["Docker", "Kubernetes", "CI/CD", "AWS", "Computer Networks"] },
    { category: "Database", icon: Database, items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
    { category: "Programming Languages", icon: Code2, items: ["Python", "Java", "JavaScript", "Go", "YAML"] }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(21_100%_55%/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(343_66%_48%/0.15),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-300% animate-gradient-shift">
                  Bhavik Naik
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                MERN Stack & Full-Stack Developer | React.js, Node.js, PHP Laravel, Python | Building Scalable Web Applications, REST APIs & Responsive UI | Frontend Developer | Open to Freelance, Remote & Startup Opportunities
              </p>
              
              <div className="flex gap-4 pt-4">
                <Button size="lg" asChild className="group">
                  <Link to="/projects">
                    View Projects
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>

              <div className="flex gap-4 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20 animate-glow" />
                <img
                  src={profileImage}
                  alt="Bhavik Naik"
                  className="relative rounded-2xl shadow-2xl w-full animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects showcasing my skills in full-stack development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-fade-in-up border-border hover:border-primary/50" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <p className="text-xs text-primary mb-4">{project.tech}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    View Project
                    <ArrowRight className="ml-1" size={16} />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(21_100%_55%/0.1),transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-muted-foreground text-lg">My professional journey</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl group animate-fade-in-up bg-gradient-to-br from-card via-card to-card/50" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{exp.company}</h3>
                      <p className="text-lg text-primary font-semibold">{exp.role}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full">{exp.period}</span>
                  </div>
                  <ul className="space-y-3 mt-6">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1 flex-shrink-0">▹</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,hsl(343_66%_48%/0.1),transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground text-lg">Technologies I work with to build amazing solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto mb-12">
            {skills.map((skill, index) => (
              <Card 
                key={index} 
                className="border-border hover:border-primary/50 group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up bg-gradient-to-br from-card via-card to-card/80" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-6 relative z-10">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 group-hover:scale-110 transition-transform duration-300 mb-4">
                      <skill.icon className="text-primary group-hover:text-secondary transition-colors" size={32} />
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skill.items.map((item, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1.5 text-xs font-medium bg-muted hover:bg-primary/10 hover:text-primary rounded-full transition-all duration-200 hover:scale-105 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Hire Me Button */}
          <div className="text-center animate-fade-in">
            <Dialog open={isHireDialogOpen} onOpenChange={setIsHireDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="group bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-xl transition-all">
                  Hire Me
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Let's Work Together
                  </DialogTitle>
                  <DialogDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-6 mt-4" onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmittingHire(true);
                  
                  const formData = new FormData(e.currentTarget);
                  formData.append("access_key", "0e5e0844-28e0-4920-9afb-4a99c5819d76");

                  try {
                    const response = await fetch("https://api.web3forms.com/submit", {
                      method: "POST",
                      body: formData
                    });

                    const data = await response.json();

                    if (data.success) {
                      toast({
                        title: "Message Sent!",
                        description: "Thank you for reaching out. I'll get back to you soon.",
                      });
                      (e.target as HTMLFormElement).reset();
                      setIsHireDialogOpen(false);
                    } else {
                      toast({
                        title: "Error",
                        description: data.message || "Failed to send message. Please try again.",
                        variant: "destructive"
                      });
                    }
                  } catch (error) {
                    toast({
                      title: "Error",
                      description: "Failed to send message. Please try again.",
                      variant: "destructive"
                    });
                  }
                  
                  setIsSubmittingHire(false);
                }}>
                  <div className="space-y-2">
                    <label htmlFor="hire-name" className="text-sm font-semibold text-foreground">Name</label>
                    <input
                      type="text"
                      id="hire-name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="hire-email" className="text-sm font-semibold text-foreground">Email</label>
                    <input
                      type="email"
                      id="hire-email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="hire-subject" className="text-sm font-semibold text-foreground">Subject</label>
                    <input
                      type="text"
                      id="hire-subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Project subject"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="hire-message" className="text-sm font-semibold text-foreground">Message</label>
                    <textarea
                      id="hire-message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full group" disabled={isSubmittingHire}>
                    {isSubmittingHire ? "Sending..." : "Send Message"}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-card/50 via-background to-card/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(21_100%_55%/0.1),transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Let's Work Together
              </h2>
              <p className="text-xl text-muted-foreground">
                Have a project in mind? Let's create something amazing together!
              </p>
            </div>

            <Card className="border-border hover:border-primary/50 transition-all duration-300 shadow-xl animate-fade-in-up bg-gradient-to-br from-card via-card to-card/90">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmittingContact(true);
                  
                  const formData = new FormData(e.currentTarget);
                  formData.append("access_key", "0e5e0844-28e0-4920-9afb-4a99c5819d76");

                  try {
                    const response = await fetch("https://api.web3forms.com/submit", {
                      method: "POST",
                      body: formData
                    });

                    const data = await response.json();

                    if (data.success) {
                      toast({
                        title: "Message Sent!",
                        description: "Thank you for reaching out. I'll get back to you soon.",
                      });
                      (e.target as HTMLFormElement).reset();
                    } else {
                      toast({
                        title: "Error",
                        description: data.message || "Failed to send message. Please try again.",
                        variant: "destructive"
                      });
                    }
                  } catch (error) {
                    toast({
                      title: "Error",
                      description: "Failed to send message. Please try again.",
                      variant: "destructive"
                    });
                  }
                  
                  setIsSubmittingContact(false);
                }}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-foreground">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full group" disabled={isSubmittingContact}>
                    {isSubmittingContact ? "Sending..." : "Send Message"}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <p className="text-center text-muted-foreground mt-6 text-sm">
              Or reach out directly at{" "}
              <a href="mailto:bhaviknaik05@gmail.com" className="text-primary hover:underline font-medium">
                bhaviknaik05@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
