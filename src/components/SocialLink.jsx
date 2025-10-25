export default function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-500/50 transform hover:scale-110 transition-all duration-300"
      aria-label={label}
    >
      <div className="text-gray-400 group-hover:text-cyan-400 transition-colors">
        {icon}
      </div>
    </a>
  );
}