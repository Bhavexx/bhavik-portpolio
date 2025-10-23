import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "YaYa Car Services",
      description: "Professional car service booking platform with real-time scheduling",
      url: "http://yaya-car-services.vercel.app/",
      category: "fullstack",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Gemini Clone",
      description: "AI-powered chatbot interface with advanced conversation capabilities",
      url: "https://gemini-clone-main-zeta.vercel.app",
      category: "fullstack",
      tech: ["React", "API Integration"]
    },
    {
      title: "Royal Ethnic E-commerce",
      description: "Full-featured e-commerce platform for ethnic wear",
      url: "https://royal-ethnic-ecommer-webapplication.vercel.app/",
      category: "fullstack",
      tech: ["MERN Stack", "Payment Gateway"]
    },
    {
      title: "Weather App",
      description: "Real-time weather application with location-based forecasts",
      url: "https://weather-app-alpha-ten-5ioqosp912.vercel.app/",
      category: "fullstack",
      tech: ["React", "Weather API"]
    },
    {
      title: "Voting Application",
      description: "Secure voting platform with authentication and results tracking",
      url: "https://voting-application-snowy.vercel.app/",
      category: "fullstack",
      tech: ["Full Stack", "Authentication"]
    },
    {
      title: "Scheduled Todo List",
      description: "Task management app with scheduling and reminders",
      url: "https://sheduled-todo-list.vercel.app/",
      category: "fullstack",
      tech: ["React", "Local Storage"]
    },
    {
      title: "Dice Games",
      description: "Interactive dice game with scoring system",
      url: "https://dice-games-teal.vercel.app/",
      category: "fullstack",
      tech: ["React", "Game Logic"]
    },
    {
      title: "Steel Wheels Bazaar",
      description: "Automotive marketplace for buying and selling vehicles",
      url: "https://steel-wheels-bazaar-main.vercel.app/",
      category: "fullstack",
      tech: ["MERN Stack", "E-commerce"]
    },
    {
      title: "ZenVest Bank",
      description: "Banking application with account management features",
      url: "https://zenvest-bank.vercel.app/",
      category: "fullstack",
      tech: ["Full Stack", "Financial APIs"]
    },
    {
      title: "Auto Car Market",
      description: "Car marketplace with advanced search and filters",
      url: "https://bhavexx.github.io/Auto-car-market-/",
      category: "fullstack",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Netflix SQL Analysis",
      description: "Database analysis of Netflix shows and movies",
      url: "https://github.com/Bhavexx/Netflix-Shows-and-Movies-SQL-main",
      category: "database",
      tech: ["SQL", "Data Analysis"]
    }
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "devops", label: "DevOps" },
    { id: "database", label: "Database" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">My Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of my work across full-stack development, DevOps, and database management
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className="transition-all"
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 animate-fade-in-up border-border hover:border-primary/50"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-muted rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline group"
                  >
                    View Project
                    <ExternalLink className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No projects found in this category yet.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
