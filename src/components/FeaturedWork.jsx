import ProjectCard from './ProjectCard';

export default function FeaturedWork() {
  const projects = [
    {
      title: "Octopus BD",
      type: "E-commerce Platform",
      description: "Custom WooCommerce store with dynamic pricing engine. Product attributes automatically adjust prices in real-time, integrated with Stripe payment processing.",
      tech: ["WordPress", "WooCommerce", "PHP", "Stripe"],
      link: "https://octopusbd.com",
      gradient: "from-cyan-500 to-blue-500",
      featured: true
    },
    {
      title: "Sunlight Volunteer",
      type: "MERN Stack Application",
      description: "Full-stack volunteer management platform connecting communities. Features real-time updates, authentication, and comprehensive CRUD operations.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://sunlight-volunteer.web.app/",
      gradient: "from-orange-500 to-red-500",
      featured: true
    },
    {
      title: "Xenone Studio",
      type: "Digital Agency Website",
      description: "Modern portfolio website with interactive service showcases, dynamic content management, and lead generation system.",
      tech: ["WordPress", "Elementor", "JavaScript"],
      link: "https://xenonestudio.com",
      gradient: "from-purple-500 to-pink-500",
      featured: false
    },
    {
      title: "Visa Republic",
      type: "Immigration Platform",
      description: "React-based consultation platform featuring service listings, booking system, and automated lead management.",
      tech: ["React", "Firebase", "Tailwind"],
      link: "https://visa-republic-833cf.web.app/",
      gradient: "from-green-500 to-teal-500",
      featured: false
    },
    {
      title: "Speak Lab",
      type: "Learning Platform",
      description: "Interactive language learning platform with course management, student authentication, and progress tracking.",
      tech: ["React", "Firebase", "JavaScript"],
      link: "https://speak-lab-7ca3c.web.app/",
      gradient: "from-indigo-500 to-blue-500",
      featured: false
    },
    {
      title: "Peddy Partner",
      type: "Pet Adoption Platform",
      description: "Community-driven pet adoption system with advanced filtering, detailed profiles, and adoption request workflow.",
      tech: ["React", "API", "CSS3"],
      link: "https://peddypartner.netlify.app",
      gradient: "from-yellow-500 to-orange-500",
      featured: false
    }
  ];

  return (
    <section id="work" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <p className="text-xl text-gray-400">Projects that showcase my expertise</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}