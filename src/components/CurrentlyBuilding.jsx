import { Rocket } from 'lucide-react';

export default function CurrentlyBuilding() {
  const upcoming = [
    { name: "Next.js E-commerce Platform", status: "In Progress", color: "cyan" },
    { name: "React Admin Dashboard", status: "Planning", color: "purple" },
    { name: "RESTful API with Node.js", status: "Coming Soon", color: "blue" }
  ];

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 mb-6">
            <Rocket size={20} />
            <span className="font-semibold">What's Next</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Currently Building
            </span>
          </h2>
        </div>

        <div className="space-y-6">
          {upcoming.map((project, idx) => (
            <div
              key={idx}
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-lg text-gray-200 font-medium">{project.name}</span>
              </div>
              <span className="text-sm text-gray-400 font-semibold">{project.status}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg">
            More exciting projects coming soon! Stay tuned for updates
          </p>
        </div>
      </div>
    </section>
  );
}