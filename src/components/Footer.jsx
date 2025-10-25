import { Terminal, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
              <Terminal className="text-cyan-400" size={24} />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                limonparvez
              </span>
            </div>
            <p className="text-gray-400 text-sm">Full-Stack Developer & WordPress Specialist</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/smlimonparvez"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 hover:border-cyan-500/50 transition-all text-gray-400 hover:text-cyan-400"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 hover:border-cyan-500/50 transition-all text-gray-400 hover:text-cyan-400"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:smlimonparvez@gmail.com"
              className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 hover:border-cyan-500/50 transition-all text-gray-400 hover:text-cyan-400"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Crafted with love by <span className="text-cyan-400 font-semibold">S M Limon Parvez</span>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Clean code • Scalable architecture • Optimal performance
          </p>
        </div>
      </div>
    </footer>
  );
}