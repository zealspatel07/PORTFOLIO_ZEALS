import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#050508] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh] border-t border-gray-900">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-white uppercase tracking-wider">Full Stack Developer</p>
          <p>B.Tech Computer Science & Engineering</p>
          <p>Parul University · Vadodara, Gujarat, India</p>
        </div>
        
        <div className="flex flex-col gap-2 md:items-center">
          <p className="font-bold text-white uppercase tracking-wider">6+ Real-World Projects</p>
          <a href="#projects" className="underline hover:text-[#ff2a2a] transition-colors underline-offset-4 decoration-1 font-bold">View Projects</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p className="font-bold text-emerald-400">Open To Software Engineer Opportunities</p>
          <p>Vadodara, Gujarat, India</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-16 md:py-20 overflow-hidden">
        <h2 className="text-[11vw] md:text-[9vw] leading-none font-sans font-black tracking-tighter uppercase select-none text-white/90 w-full text-center">
          ZEALS PATEL
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4 text-sm font-sans">
            <a href="https://github.com/patelZPU" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff2a2a] transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/zeals-nileshkumar-patel" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff2a2a] transition-colors">LinkedIn</a>
            <a href="tel:+919825136955" className="hover:text-[#ff2a2a] transition-colors">Phone</a>
          </div>
          <p className="text-white/60 font-mono text-[10px]">
            &copy; 2026 Zeals Patel · All rights reserved · Built with React 19 & Tailwind CSS.
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:patel.zeals07@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 text-sm font-mono text-[#ff2a2a]">
            patel.zeals07@gmail.com
          </a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end text-white/50 text-[10px]">
          <p>Built with React 19 & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
