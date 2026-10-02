import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const experience = [
    {
      id: "exp-1",
      title: "Frontend Developer Intern",
      company: "Dots & Coms Pvt. Ltd.",
      date: "September 2026 – Present",
      desc: "Developing responsive web applications using React.js, JavaScript, and modern UI/UX practices. Building reusable frontend components, implementing responsive designs, integrating REST APIs, and working with ASP.NET Core, MySQL, and client-server communication while contributing to debugging, testing, and deployment.",
    },
    {
      id: "exp-2",
      title: "Software Engineer Trainee",
      company: "Prayosha Automation Pvt. Ltd.",
      date: "August 2025 – September 2026",
      desc: "Worked on software development and industrial reporting solutions, including React interfaces, .NET and SQL Server integrations, dashboards, database-driven workflows, and query/rendering optimization that achieved approximately 35% faster processing.",
    },

    {
      id: "exp-3",
      title: "Full Stack Intern",
      company: "Hi-Mak Pvt. Ltd.",
      date: "December 2024 – March 2025",
      desc: "Developed and tested frontend and backend modules, assisted with deployment and environment setup, and strengthened debugging and structured problem-solving skills.",
    },
  ];

  return (
    <section
      id="education"
      className="bg-[#0f0f18] py-20 px-6 md:px-12 w-full text-white border-t border-gray-900 relative overflow-hidden"
    >
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-left">
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold tracking-widest uppercase mb-4">
            Academic & Honors
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-3">
            Education & Certifications
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl font-normal">
            B.Tech Computer Science & Engineering graduate from Parul
            University.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Education Timeline */}
          <div className="flex flex-col gap-8">
            <h3 className="text-xl font-extrabold text-purple-400 flex items-center gap-3 border-b border-gray-800 pb-3">
              <span>🎓</span> Academic Qualifications
            </h3>

            <div className="relative pl-6 border-l-2 border-purple-500/40 flex flex-col gap-8">
              {/* B.Tech Item */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-colors shadow-lg"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] top-6 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-gray-950 shadow-[0_0_12px_rgba(168,85,247,0.8)]"></div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 uppercase tracking-wider">
                    Completed — January 2026
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    June 2020 – January 2026
                  </span>
                </div>

                <h4 className="text-lg font-black text-white mt-1">
                  B.Tech in Computer Science & Engineering
                </h4>
                <p className="text-xs font-semibold text-gray-300 mt-1">
                  Parul University
                </p>
                <p className="text-[11px] text-gray-500 font-medium italic">
                  Vadodara, Gujarat, India
                </p>
                <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                  CGPA: 6.49 / 10
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-2.5 py-1 text-[10px] font-bold rounded-md bg-white/5 border border-white/10 text-cyan-300">
                    Software Engineering
                  </span>
                  <span className="px-2.5 py-1 text-[10px] font-bold rounded-md bg-white/5 border border-white/10 text-purple-300">
                    Web Development
                  </span>
                  <span className="px-2.5 py-1 text-[10px] font-bold rounded-md bg-white/5 border border-white/10 text-emerald-300">
                    Databases
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Languages Known Box */}
            <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-5 mt-2">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2">
                <span>🌐</span> Languages Known
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 text-xs font-bold rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                  🇬🇧 English
                </span>
                <span className="px-3.5 py-1.5 text-xs font-bold rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300">
                  🇮🇳 Hindi
                </span>
                <span className="px-3.5 py-1.5 text-xs font-bold rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300">
                  🟠 Marathi
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Experience */}
          <div className="flex flex-col gap-6">
            <h3
              id="experience"
              className="text-xl font-extrabold text-cyan-400 flex items-center gap-3 border-b border-gray-800 pb-3"
            >
              <span>💼</span> Professional Experience
            </h3>

            <div className="flex flex-col gap-5">
              {experience.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 flex items-start gap-4 shadow-lg group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
                    💼
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400">
                        {item.company}
                      </span>
                    </div>

                    <h4 className="text-base font-black text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="mt-3 text-[11px] font-mono text-gray-500 flex items-center gap-1">
                      <span>📅</span> {item.date}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
