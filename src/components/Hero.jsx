import { Sparkles, Github, Linkedin, Mail, ArrowRight, Coffee } from 'lucide-react';
import SocialLink from './SocialLink';

export default function Hero() {
  const codeSnippet = `const limonParvez = {
  role: "Full-Stack Developer",
  specialization: "MERN Stack",
  philosophy: "Clean code, scalable architecture"
};`;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 mb-6">
            <Sparkles className="text-cyan-400" size={16} />
            Available for freelance projects
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="block text-gray-400 text-3xl md:text-4xl font-normal mb-4">Hi, I'm</span>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Limon Parvez
          </span>
        </h1>

        <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
          Full-Stack Developer
        </p>

        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Crafting exceptional user experiences with <span className="text-cyan-400 font-semibold">React</span> while building 
          robust, scalable backend systems that power modern web applications.
        </p>

        <div className="max-w-2xl mx-auto mb-12 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
            <code>{codeSnippet}</code>
          </pre>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#work"
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold flex items-center gap-2 hover:shadow-2xl hover:shadow-cyan-500/30 transform hover:scale-105 transition-all duration-300"
          >
            View My Work
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full font-semibold hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <SocialLink href="https://github.com/smlimonparvez" icon={<Github size={24} />} label="GitHub" />
          <SocialLink href="https://linkedin.com" icon={<Linkedin size={24} />} label="LinkedIn" />
          <SocialLink href="mailto:smlimonparvez@gmail.com" icon={<Mail size={24} />} label="Email" />
        </div>

        <div className="mt-16 inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 border border-purple-500/20 rounded-full">
          <Coffee className="text-purple-400" size={20} />
          <span className="text-gray-300 text-sm">I debug code faster than I debug my life decisions</span>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}