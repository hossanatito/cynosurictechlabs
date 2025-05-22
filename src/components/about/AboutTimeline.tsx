
import React from "react";

const timelineItems = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Started with a team of 3 developers focused on web applications."
  },
  {
    year: "2021",
    title: "First Major Client",
    description: "Partnered with a Fortune 500 company to revamp their digital platform."
  },
  {
    year: "2022",
    title: "Team Expansion",
    description: "Grew to 15 team members and expanded our service offerings."
  },
  {
    year: "2023",
    title: "International Recognition",
    description: "Won multiple industry awards for UI/UX excellence."
  },
  {
    year: "2024",
    title: "Global Presence",
    description: "Established partnerships across 25+ countries with diverse clients."
  }
];

export default function AboutTimeline() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-custom max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Journey</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From our humble beginnings to becoming a recognized tech partner, here's how we've grown.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
          
          {/* Timeline items */}
          {timelineItems.map((item, index) => (
            <div 
              key={index} 
              className={`relative flex items-center mb-12 animate-fade-in`} 
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'hidden'}`}>
                <div className="mb-1 font-bold text-xl">{item.year}</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10"></div>
              
              <div className={`w-1/2 ${index % 2 === 1 ? 'pl-8' : 'hidden'}`}>
                <div className="mb-1 font-bold text-xl">{item.year}</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
