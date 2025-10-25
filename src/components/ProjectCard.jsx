import { Code2, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
      
      <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300">
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-xs text-cyan-400 font-semibold">
            Featured
          </div>
        )}
        
        <div className="mb-6">
          <div className={`inline-flex p-4 bg-gradient-to-r ${project.gradient} rounded-xl`}>
            <Code2 className="text-white" size={28} />
          </div>
        </div>

        <span className="text-sm text-gray-400 uppercase tracking-wider font-semibold">{project.type}</span>
        <h3 className="text-2xl font-bold text-gray-200 mt-2 mb-4">{project.title}</h3>
        <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold group/link"
        >
          View Project
          <ExternalLink className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" size={16} />
        </a>
      </div>
    </div>
  );
}