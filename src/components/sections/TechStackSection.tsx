
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code,
  FileJson,
  SquareCode,
  Atom, 
  Server, 
  FileCode,
  Boxes,
  Database,
  Table2,
  Workflow,
  BrainCircuit,
  MessageSquareCode
} from "lucide-react";

const techStacks = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: Code },
      { name: "CSS", icon: FileJson },
      { name: "JavaScript", icon: SquareCode },
      { name: "React", icon: Atom }
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: Server },
      { name: "PHP", icon: FileCode },
      { name: "WordPress", icon: Boxes }
    ]
  },
  {
    category: "Database",
    technologies: [
      { name: "MySQL", icon: Database },
      { name: "PostgreSQL", icon: Table2 }
    ]
  },
  {
    category: "AI & Automation",
    technologies: [
      { name: "n8n", icon: Workflow },
      { name: "OpenAI", icon: BrainCircuit },
      { name: "Hugging Face", icon: MessageSquareCode }
    ]
  }
];

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="py-12 md:py-20 lg:py-24 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Our Tech Stack</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We work with modern, scalable technologies to deliver the best solutions for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {techStacks.map((stack, index) => (
            <Card key={index} className="h-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-base md:text-lg group-hover:text-primary transition-colors">{stack.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 md:space-y-4">
                  {stack.technologies.map((tech, techIndex) => {
                    const IconComponent = tech.icon;
                    return (
                      <div key={techIndex} className="flex items-center gap-3 group/item hover:translate-x-1 transition-transform">
                        <IconComponent className="w-5 h-5 text-primary group-hover/item:scale-110 transition-transform" />
                        <span className="text-sm">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
