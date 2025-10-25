import { useState } from 'react';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';
import ContactInfo from './ContactInfo';

export default function GetInTouch() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sent');
    setTimeout(() => {
      setStatus('');
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </span>
          </h2>
          <p className="text-xl text-gray-400">Have a project in mind? Let's talk about it</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-200 mb-6">Get in touch</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
              Whether you need a full-stack solution or WordPress expertise, I'm here to help.
            </p>

            <div className="space-y-4">
              <ContactInfo
                icon={<Mail size={20} />}
                label="Email"
                value="smlimonparvez@gmail.com"
                href="mailto:smlimonparvez@gmail.com"
              />
              <ContactInfo
                icon={<Github size={20} />}
                label="GitHub"
                value="@smlimonparvez"
                href="https://github.com/smlimonparvez"
              />
              <ContactInfo
                icon={<Linkedin size={20} />}
                label="LinkedIn"
                value="Connect with me"
                href="https://linkedin.com"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-500 focus:bg-white/10 focus:border-cyan-500/50 outline-none transition-all"
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-500 focus:bg-white/10 focus:border-cyan-500/50 outline-none transition-all"
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="5"
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-500 focus:bg-white/10 focus:border-cyan-500/50 outline-none transition-all resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {status === 'sent' ? (
                <span>Message Sent!</span>
              ) : (
                <>
                  Send Message
                  <MessageSquare size={20} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}