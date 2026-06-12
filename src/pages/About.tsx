import { GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import profileImage from "@/assets/bhavik.png";

const About = () => {
  const education = [
    {
      institution: "Dhanwate National College",
      period: "September 2022 - April 2025",
      degree: "Bachelor's Degree"
    },
    {
      institution: "Dada Ramchand Sindhu College",
      period: "September 2020 - July 2022",
      degree: "Higher Secondary Education"
    },
    {
      institution: "Guru Nanak High School",
      period: "Completed",
      degree: "Secondary Education"
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20 animate-fade-in">
            <div>
              <h1 className="text-5xl font-bold mb-6">About Me</h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm <span className="text-primary font-semibold">Bhavik Naik</span>, a passionate Freelance MERN Stack & DevOps Developer 
                  with a strong focus on delivering scalable and reliable web solutions.
                </p>
                <p>
                  As a Full Stack Engineer specializing in React.js, Node.js, and MongoDB, I bring ideas to life 
                  through clean code and innovative solutions. My expertise spans across the entire development lifecycle, 
                  from conception to deployment.
                </p>
                <p>
                  With hands-on experience in modern web technologies and DevOps practices, I'm committed to building 
                  applications that not only meet but exceed client expectations. I believe in continuous learning and 
                  staying updated with the latest industry trends.
                </p>
                <p>
                  Whether it's developing a complex web application, optimizing system performance, or implementing 
                  CI/CD pipelines, I approach every project with dedication and attention to detail.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-3xl opacity-20" />
                <img
                  src={profileImage}
                  alt="Bhavik Naik"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8 animate-fade-in">
              <Briefcase className="text-primary" size={32} />
              <h2 className="text-4xl font-bold">Experience</h2>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-border animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-2xl font-semibold mb-1">{exp.company}</h3>
                        <p className="text-primary font-medium">{exp.role}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    {Array.isArray(exp.description) ? (
                      <ul className="space-y-2 list-disc pl-5 text-muted-foreground text-sm">
                        {exp.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground">{exp.description}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section>
            <div className="flex items-center gap-3 mb-8 animate-fade-in">
              <GraduationCap className="text-primary" size={32} />
              <h2 className="text-4xl font-bold">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-border animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-semibold">{edu.institution}</h3>
                        <p className="text-muted-foreground">{edu.degree}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{edu.period}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
