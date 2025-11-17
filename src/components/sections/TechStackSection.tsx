
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
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
  MessageSquareCode,
  Sparkles,
  Zap
} from "lucide-react";

const techStacks = [
  {
    category: "Frontend",
    gradient: "from-blue-500 to-cyan-500",
    technologies: [
      { name: "HTML", icon: Code },
      { name: "CSS", icon: FileJson },
      { name: "JavaScript", icon: SquareCode },
      { name: "React", icon: Atom }
    ]
  },
  {
    category: "Backend",
    gradient: "from-green-500 to-emerald-500",
    technologies: [
      { name: "Node.js", icon: Server },
      { name: "PHP", icon: FileCode },
      { name: "WordPress", icon: Boxes }
    ]
  },
  {
    category: "Database",
    gradient: "from-purple-500 to-pink-500",
    technologies: [
      { name: "MySQL", icon: Database },
      { name: "PostgreSQL", icon: Table2 }
    ]
  },
  {
    category: "AI & Automation",
    gradient: "from-orange-500 to-red-500",
    technologies: [
      { name: "n8n", icon: Workflow },
      { name: "OpenAI", icon: BrainCircuit },
      { name: "Gemini", icon: Sparkles },
      { name: "Hugging Face", icon: MessageSquareCode },
      { name: "Zapier", icon: Zap }
    ]
  }
];

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="relative py-12 md:py-20 lg:py-24 bg-gradient-to-b from-muted/30 via-background to-muted/30 overflow-hidden">
      {/* Dot grid background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">Our Tech Stack</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            We work with modern, scalable technologies to deliver the best solutions for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {techStacks.map((stack, index) => (
            <Card 
              key={index} 
              className={cn(
                "group relative overflow-hidden h-full rounded-2xl",
                "bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-lg",
                "border-2 border-transparent hover:border-primary/30",
                "hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2",
                "transition-all duration-500"
              )}
            >
              {/* Gradient overlay on hover */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                "bg-gradient-to-br",
                stack.gradient
              )} />
              
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className={cn(
                    "w-2 h-2 rounded-full bg-gradient-to-r",
                    stack.gradient,
                    "group-hover:w-8 transition-all duration-500"
                  )} />
                  <CardTitle className={cn(
                    "text-lg md:text-xl font-bold",
                    "bg-gradient-to-r bg-clip-text text-transparent",
                    stack.gradient,
                    "group-hover:scale-105 transition-transform duration-300"
                  )}>
                    {stack.category}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  {stack.technologies.map((tech, techIndex) => {
                    const IconComponent = tech.icon;
                    return (
                      <div 
                        key={techIndex} 
                        className={cn(
                          "flex items-center gap-3 p-2 rounded-lg",
                          "hover:bg-primary/5 hover:translate-x-2",
                          "transition-all duration-300 group/item"
                        )}
                      >
                        <div className={cn(
                          "w-8 h-8 rounded-lg flex items-center justify-center",
                          "bg-gradient-to-br shadow-lg",
                          stack.gradient,
                          "group-hover/item:scale-110 group-hover/item:rotate-3",
                          "transition-all duration-300"
                        )}>
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm md:text-base font-medium group-hover/item:text-primary transition-colors">
                          {tech.name}
                        </span>
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
