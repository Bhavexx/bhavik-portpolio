import { Code, TestTube, Server, Star, CheckCircle2, Zap, TrendingUp, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack web application development using modern technologies like React, Node.js, and MongoDB. From concept to deployment, I build responsive and scalable web solutions.",
      features: [
        "Custom Web Applications",
        "E-commerce Platforms",
        "RESTful API Development",
        "Database Design & Integration",
        "Responsive UI/UX Implementation"
      ]
    },
    {
      icon: TestTube,
      title: "QA & Testing",
      description: "Comprehensive quality assurance services to ensure your applications are bug-free, performant, and meet industry standards.",
      features: [
        "Manual Testing",
        "Automated Testing",
        "Performance Testing",
        "Bug Tracking & Reporting",
        "Quality Assurance Strategy"
      ]
    },
    {
      icon: Server,
      title: "DevOps Development",
      description: "Streamline your development workflow with modern DevOps practices, CI/CD pipelines, and infrastructure automation.",
      features: [
        "CI/CD Pipeline Setup",
        "Docker Containerization",
        "Cloud Deployment (AWS)",
        "Infrastructure as Code",
        "Monitoring & Logging"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Chinmay Pingle",
      role: "College project partner",
      content: "Bhavik Naik has been a reliable and supportive project partner throughout our college journey. They consistently contributed to assignments and projects with dedication, teamwork, and clear communication. I really appreciated their help and collaboration.",
      rating: 5
    },
    {
  "name": "Naina Butler",
  "role": "Product Manager, InnovateLab",
  "content": "We were drowning in flaky Selenium tests until  implemented a Cypress + Cucumber BDD framework. Test stability jumped to 98%, and they seamlessly integrated it into our CI/CD pipeline—saving us over 15 hours a week in debugging false positives.",
  "rating": 5
},

    {
      name: "Harsh Badge",
      role: "Medical Portal",
      content: "Our HIPAA-compliant patient portal had accessibility issues (WCAG 2.1 AA). refactored the UI with ARIA labels and keyboard navigation, passing all audits. They even trained our team on inclusive design—went above the contract!",
      rating: 5
    },
    {
      name: "Kris",
      role: "Founder, AppVenture",
      content: "Our Kubernetes clusters kept crashing during game launches. redesigned our Helm charts, implemented Prometheus alerting, and set up canary deployments with Flagger. Deployment failures dropped by 90%, and rollback time is now under 2 minutes.",
      rating: 5
    },
    {
      name: "Girish Ingle",
      role: "GYM website",
      content: "Bhavik's web development skills transformed our online presence. The website is fast, beautiful, and user-friendly.",
      rating: 5
    },
    {
      name: "SUHAS paikrao",
      role: "Operations Manager, CloudScale",
      content: "His DevOps implementation reduced our deployment time by 70%. Bhavik is a true professional.",
      rating: 5
    },
    {
      name: "Ayush karwade",
      role: "Lead Developer, CodeCraft",
      content: "Bhavik's expertise in MERN stack is impressive. He delivered a complex project with clean, maintainable code.",
      rating: 5
    },
    {
      name: "Salman Ansari",
      role: "Business Owner, LocalMarket",
      content: "The e-commerce platform Bhavik developed has significantly boosted our online sales. Excellent work!",
      rating: 5
    },
    {
      name: "Akshay Sawalkar",
      role: "Project Manager, Web & Qa Solutions ",
      content: "Bhavik's communication throughout the project was excellent. He's reliable, skilled, and delivers quality work.",
      rating: 5
    },
    {
      name: "Parash Wathe ",
      role: "Hr management web, FutureApps",
      content: "Working with Bhavik on our full-stack project was seamless. His technical knowledge and problem-solving skills are top-notch.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(200_98%_48%/0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(240_68%_58%/0.08),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-24 animate-fade-in">
            <Badge className="mb-6 px-6 py-2 text-base bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 hover:from-primary/20 hover:via-secondary/20 hover:to-accent/20 border-primary/20">
              <Zap className="mr-2 inline" size={16} />
              Professional Services
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift bg-300%">
                Digital Vision
              </span>
              <br />Into Reality
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive development services designed to transform your ideas into robust, 
              scalable, and high-performance digital solutions
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 animate-fade-in-up">
            {[
              { icon: Users, label: "Happy Clients", value: "50+" },
              { icon: CheckCircle2, label: "Projects Completed", value: "100+" },
              { icon: Award, label: "Years Experience", value: "2+" },
              { icon: TrendingUp, label: "Success Rate", value: "98%" }
            ].map((stat, index) => (
              <Card 
                key={index} 
                className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-card to-card/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                    <stat.icon className="text-primary" size={24} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Services Grid */}
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              What I Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized services tailored to your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-32">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group relative border-2 border-border hover:border-primary transition-all duration-500 animate-fade-in-up overflow-hidden bg-card hover:shadow-[0_0_50px_rgba(59,130,246,0.2)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated border glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                
                <CardContent className="p-8 relative z-10">
                  {/* Icon with animated background */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative p-5 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 w-fit group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <service.icon className="text-primary group-hover:text-secondary transition-colors" size={40} />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 pt-6 border-t border-border/50 group-hover:border-primary/30 transition-colors">
                    {service.features.map((feature, i) => (
                      <div 
                        key={i} 
                        className="flex items-start gap-3 group/item"
                        style={{ animationDelay: `${i * 0.05}s` }}
                      >
                        <div className="mt-0.5 p-1 rounded-full bg-primary/10 group-hover/item:bg-primary/20 transition-colors">
                          <CheckCircle2 className="text-primary flex-shrink-0" size={16} />
                        </div>
                        <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mb-32 animate-fade-in relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl opacity-30" />
            <Card className="border-2 border-primary/30 bg-gradient-to-br from-card via-card to-card/90 max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
              <CardContent className="p-12 md:p-16 relative z-10">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
                  <Zap className="text-primary" size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Ready to Start Your Project?
                </h2>
                <p className="text-muted-foreground mb-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                  Let's collaborate to bring your vision to life with expert development services. 
                  Get a free consultation today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="group bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-xl hover:scale-105 transition-all">
                    <Link to="/contact">
                      Get in Touch
                      <CheckCircle2 className="ml-2 group-hover:rotate-12 transition-transform" size={20} />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="group border-2 hover:border-primary">
                    <Link to="/projects">
                      View My Work
                      <TrendingUp className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials Section */}
          <div className="bg-gradient-to-br from-card/80 via-background to-card/50 rounded-3xl p-8 md:p-16 relative overflow-hidden border-2 border-border/50">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(200_98%_48%/0.1),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(240_68%_58%/0.1),transparent_60%)]" />
            <div className="relative z-10">
              <div className="text-center mb-16 animate-fade-in">
                <Badge className="mb-6 px-6 py-2 text-base bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
                  <Star className="mr-2 inline fill-primary text-primary" size={16} />
                  Client Testimonials
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Trusted by{" "}
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Clients Worldwide
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Hear from satisfied clients about their experience working with me
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <Card 
                    key={index} 
                    className="border-2 border-border hover:border-primary/50 group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up bg-card relative overflow-hidden"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <CardContent className="p-6 relative z-10">
                      {/* Rating stars with animation */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <div 
                            key={i} 
                            className="group-hover:scale-110 transition-transform"
                            style={{ transitionDelay: `${i * 0.05}s` }}
                          >
                            <Star className="fill-primary text-primary" size={18} />
                          </div>
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <div className="relative mb-6">
                        <span className="absolute -top-2 -left-1 text-6xl text-primary/20 font-serif">"</span>
                        <p className="text-muted-foreground italic leading-relaxed pl-6 relative z-10">
                          {testimonial.content}
                        </p>
                      </div>
                      
                      {/* Author info */}
                      <div className="pt-4 border-t border-border/50 group-hover:border-primary/30 transition-colors flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center font-bold text-primary">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
