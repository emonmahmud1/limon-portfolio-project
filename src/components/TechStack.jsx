import { Sparkles, Zap, Code2, Rocket } from 'lucide-react';

export default function TechStack() {
  const techCategories = [
    {
      title: "Frontend Magic",
      icon: <Sparkles className="text-cyan-400" size={32} />,
      techs: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 75 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 80 }
      ]
    },
    {
      title: "Backend Power",
      icon: <Zap className="text-yellow-400" size={32} />,
      techs: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "CMS & E-commerce",
      icon: <Code2 className="text-purple-400" size={32} />,
      techs: [
        { name: "WordPress", level: 95 },
        { name: "WooCommerce", level: 90 },
        { name: "PHP", level: 75 },
        { name: "Stripe", level: 85 }
      ]
    }
  ];

  const learning = ["TypeScript", "Advanced React Patterns", "Microservices", "Next.js"];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Tech Arsenal
            </span>
          </h2>
          <p className="text-xl text-gray-400">Building with modern tools and technologies</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category, idx) => (
            <div
              key={idx}
              className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="mb-6">{category.icon}</div>
              <h3 className="text-2xl font-bold mb-6 text-gray-200">{category.title}</h3>
              <div className="space-y-4">
                {category.techs.map((tech, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{tech.name}</span>
                      <span className="text-cyan-400">{tech.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="text-purple-400" size={28} />
            <h3 className="text-2xl font-bold text-gray-200">Currently Learning</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {learning.map((item, idx) => (
              <span
                key={idx}
                className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}