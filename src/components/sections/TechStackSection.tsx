
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Html, 
  Css, 
  Javascript, 
  React as ReactIcon, 
  Node, 
  Php, 
  Wordpress,
  Mysql,
  Postgresql,
  N8N,
  OpenAi,
  HuggingFace
} from "lucide-react";

const techStacks = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: Html },
      { name: "CSS", icon: Css },
      { name: "JavaScript", icon: Javascript },
      { name: "React", icon: ReactIcon }
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", icon: Node },
      { name: "PHP", icon: Php },
      { name: "WordPress", icon: Wordpress }
    ]
  },
  {
    category: "Database",
    technologies: [
      { name: "MySQL", icon: Mysql },
      { name: "PostgreSQL", icon: Postgresql }
    ]
  },
  {
    category: "AI & Automation",
    technologies: [
      { name: "n8n", icon: N8N },
      { name: "OpenAI", icon: OpenAi },
      { name: "Hugging Face", icon: HuggingFace }
    ]
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStacks.map((stack, index) => (
            <Card key={index} className="bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">{stack.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stack.technologies.map((tech, techIndex) => {
                    const IconComponent = tech.icon;
                    return (
                      <div key={techIndex} className="flex items-center gap-3">
                        <IconComponent className="w-5 h-5 text-primary" />
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
