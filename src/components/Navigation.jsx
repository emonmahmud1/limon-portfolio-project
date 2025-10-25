import { Menu, X, Terminal } from 'lucide-react';

export default function Navigation({ isScrolled, isMenuOpen, setIsMenuOpen }) {
  const navItems = ['Home', 'Work', 'Projects', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="text-2xl font-bold flex items-center gap-2 group">
            <Terminal className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={28} />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              limonparvez
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a 
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/30 transform hover:scale-105 transition-all duration-300"
            >
              Let's Talk
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}