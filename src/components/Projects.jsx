import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: 'Tomato – Food Delivery Web App',
      category: 'fullstack',
      subtitle: 'Full-Stack Food Delivery Platform',
      description: 'Full-stack food delivery web application with restaurant and menu functionality, ordering workflow, and backend data management.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      badge: 'Full Stack',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      icon: '🍅'
    },
    {
      id: 2,
      title: 'Enterprise Quotation Management System',
      category: 'fullstack',
      subtitle: 'Role-Based Enterprise Application',
      description: 'Structured enterprise application with workflow management, access control, audit tracking, and documentation.',
      technologies: ['React', '.NET', 'SQL Server'],
      badge: 'Enterprise App',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      icon: '📋'
    },
    {
      id: 3,
      title: 'SQL-to-Software Development & Database Migration',
      category: 'database',
      subtitle: 'Database-Driven Software System',
      description: 'Converted SQL Server database-driven functionality into a standalone software environment with embedded database support.',
      technologies: ['SQL Server', 'SQLite', 'Database Migration'],
      badge: 'Database',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      icon: '🗃️'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'frontend',
      subtitle: 'Personal Developer Portfolio',
      description: 'Personal developer portfolio built from scratch with responsive UI, animations, interactive sections, and Firebase hosting.',
      technologies: ['React.js', 'Vite', 'Tailwind CSS', 'Three.js', 'Firebase'],
      badge: 'Frontend',
      badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      icon: '💻'
    },
    {
      id: 5,
      title: 'EngiTrack – Engineering Execution & Project Planning System',
      category: 'ai',
      subtitle: 'Industrial Automation Platform',
      description: 'Enterprise-focused project execution and planning platform for industrial automation workflows, including lifecycle management, resource allocation, progress tracking, role-based UI, workflow-sensitive controls, and utilization dashboards.',
      technologies: ['React', '.NET', 'SQL Server', 'Dashboards'],
      badge: 'Automation',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      icon: '⚙️'
    },
    {
      id: 6,
      title: 'Business Sales Dashboard',
      category: 'reporting',
      subtitle: 'Business Performance Analytics',
      description: 'Interactive business performance dashboard with KPI tracking, trend analysis, sales visualization, Power Query transformation, and DAX-based analysis.',
      technologies: ['Power BI', 'Excel', 'SQL'],
      badge: 'Reporting',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      icon: '📊'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="bg-[#05050a] py-24 px-6 md:px-12 w-full text-white relative overflow-hidden font-sans border-t border-gray-900">
      
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 text-[#ff2a2a] text-xs font-bold tracking-widest uppercase mb-4">
              Featured Work
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Real-World Projects
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-2 max-w-lg">
              Selected software projects covering full-stack development, databases, dashboards, automation, and modern web applications.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-gray-900/80 p-1.5 rounded-full border border-gray-800 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${
                filter === 'all' ? 'bg-[#ff2a2a] text-white shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              All (6)
            </button>
            <button
              onClick={() => setFilter('fullstack')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${
                filter === 'fullstack' ? 'bg-[#ff2a2a] text-white shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              Full Stack
            </button>
            <button
              onClick={() => setFilter('frontend')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${
                filter === 'frontend' ? 'bg-[#ff2a2a] text-white shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setFilter('reporting')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${
                filter === 'reporting' ? 'bg-[#ff2a2a] text-white shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              Database & Reporting
            </button>
            <button
              onClick={() => setFilter('backend')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${
                filter === 'backend' ? 'bg-[#ff2a2a] text-white shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${
                filter === 'ai' ? 'bg-[#ff2a2a] text-white shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              AI & Automation
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-900/50 border border-gray-800/80 rounded-3xl p-6 flex flex-col justify-between hover:border-[#ff2a2a]/50 hover:shadow-[0_10px_30px_rgba(255,42,42,0.1)] transition-all duration-500 group"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gray-800 border border-gray-700/80 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full border ${project.badgeColor}`}>
                    {project.badge}
                  </span>
                </div>

                {/* Subtitle */}
                <span className="text-[11px] font-bold text-[#ff2a2a] uppercase tracking-wider block mb-1">
                  {project.subtitle}
                </span>

                {/* Title */}
                <h3 className="text-xl font-black text-white group-hover:text-[#ff2a2a] transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-gray-800/60">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 text-[10px] font-semibold rounded-md bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-full bg-[#ff2a2a] text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-red-600 transition-colors shadow-md"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`py-2 px-4 rounded-full bg-gray-800 border border-gray-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-white hover:text-black transition-all ${
                        !project.liveUrl ? 'w-full' : ''
                      }`}
                    >
                      GitHub 🐙
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Full CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/patelZPU"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-900/40 to-red-900/40 border border-purple-500/30 text-white font-bold text-sm hover:border-[#ff2a2a] transition-all duration-300 shadow-xl group"
          >
            <span>Explore All 6+ Projects on GitHub</span>
            <span className="text-lg group-hover:translate-x-1 transition-transform">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
