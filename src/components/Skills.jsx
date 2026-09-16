import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsList = [
    { name: 'React.js', level: 'Advanced', icon: '⚛️' },
    { name: 'JavaScript', level: 'Advanced', icon: '⚡' },
    { name: 'HTML5', level: 'Advanced', icon: '🌐' },
    { name: 'CSS3', level: 'Advanced', icon: '🎨' },
    { name: 'Tailwind CSS', level: 'Advanced', icon: '💨' },
    { name: 'Node.js', level: 'Intermediate', icon: '🟢' },
    { name: 'Express.js', level: 'Intermediate', icon: '🚂' },
    { name: 'C#', level: 'Intermediate', icon: '♯' },
    { name: '.NET', level: 'Intermediate', icon: '🔷' },
    { name: 'SQL Server', level: 'Intermediate', icon: '🗄️' },
    { name: 'MongoDB', level: 'Intermediate', icon: '🍃' },
    { name: 'Firebase', level: 'Intermediate', icon: '🔥' },
    { name: 'Git & GitHub', level: 'Intermediate', icon: '🐙' },
    { name: 'Docker', level: 'Working Knowledge', icon: '🐳' },
    { name: 'Java', level: 'Working Knowledge', icon: '☕' },
    { name: 'Vite', level: 'Intermediate', icon: '⚡' },
    { name: 'Visual Studio', level: 'Intermediate', icon: '🛠️' },
    { name: 'VS Code', level: 'Advanced', icon: '💻' },
    { name: 'REST APIs', level: 'Intermediate', icon: '🔌' },
    { name: 'Postman', level: 'Intermediate', icon: '📬' },
    { name: 'Power BI', level: 'Intermediate', icon: '📊' },
    { name: 'Excel', level: 'Intermediate', icon: '📈' },
    { name: 'SQLite', level: 'Working Knowledge', icon: '🗃️' },
    { name: 'Firebase Hosting', level: 'Working Knowledge', icon: '🚀' },
  ];

  const coreProficiency = [
    { name: 'React.js & JavaScript', percent: 88 },
    { name: 'HTML5, CSS3 & Tailwind CSS', percent: 90 },
    { name: 'Node.js & Express.js', percent: 78 },
    { name: 'C# & .NET', percent: 75 },
    { name: 'SQL Server & MongoDB', percent: 80 },
  ];

  return (
    <section id="skills" className="relative w-full bg-white py-20 px-6 md:px-12 overflow-hidden font-sans border-t border-gray-100">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(0,0,0,.04)_25%,transparent_26%),linear-gradient(0deg,transparent_24%,rgba(0,0,0,.04)_25%,transparent_26%)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block border border-gray-200 rounded-full px-4 py-1 text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 bg-gray-50">
            Skills & Technologies
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-2">
            Technologies I Build With
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl">
            Full-stack development, databases, cloud-connected applications, automation, and modern web technologies.
          </p>
        </div>

        {/* Progress Bars Row */}
        <div className="mb-16 bg-gray-50/80 border border-gray-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
          <h3 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2">
            <span>⚡</span> Core Proficiency
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreProficiency.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs font-bold text-gray-800">
                  <span>{item.name}</span>
                  <span className="text-[#ff2a2a]">{item.percent}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-gray-900 to-[#ff2a2a] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 16 Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {skillsList.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-[#ff2a2a]/40 transition-all duration-300 group cursor-default"
            >
              <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">{skill.icon}</span>
              <h4 className="text-xs font-bold text-gray-900 mb-0.5">{skill.name}</h4>
              <span className="text-[10px] text-gray-400 font-medium">{skill.level}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

 