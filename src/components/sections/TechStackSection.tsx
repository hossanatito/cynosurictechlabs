
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const techStacks = [
  {
    category: "Frontend",
    technologies: ["React", "Angular", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS", "SASS"]
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Python", "Java", "C#", "Go", "PHP", "Ruby on Rails"]
  },
  {
    category: "Mobile",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic"]
  },
  {
    category: "Database",
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "DynamoDB"]
  },
  {
    category: "DevOps & Cloud",
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "GitHub Actions", "Jenkins"]
  }
];

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Tech Stack</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We work with modern, scalable technologies to deliver the best solutions for our clients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStacks.map((stack, index) => (
            <Card key={index} className="bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">{stack.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="py-1 px-3 bg-muted rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
