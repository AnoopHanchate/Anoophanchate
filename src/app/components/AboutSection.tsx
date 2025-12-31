import { Briefcase, GraduationCap, Target } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative bg-[#1BB896] overflow-hidden">
      {/* Enhanced Geometric Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circles */}
        <div className="absolute top-10 right-1/4 w-24 h-24 border-2 border-white/10 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-1/3 left-10 w-18 h-18 border-2 border-white/15 rounded-full"></div>
        
        {/* Squares */}
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-white/10 rotate-45"></div>
        <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-white/10 rotate-12"></div>
        <div className="absolute bottom-40 right-1/4 w-20 h-20 border-2 border-white/15 rotate-[35deg]"></div>
        <div className="absolute top-20 left-10 w-12 h-12 bg-white/5 rotate-[55deg]"></div>
        
        {/* Rectangles */}
        <div className="absolute top-1/4 right-10 w-24 h-14 border-2 border-white/10 rotate-[20deg]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-12 bg-white/8 rotate-[-10deg]"></div>
        <div className="absolute top-2/3 right-1/3 w-18 h-10 border-2 border-white/12 rotate-[30deg]"></div>
        
        {/* Triangles */}
        <div className="absolute top-1/2 right-10 w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[43px] border-b-white/10"></div>
        <div className="absolute bottom-1/4 left-1/4 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-white/12"></div>
        <div className="absolute top-1/3 left-1/2 w-0 h-0 border-l-[22px] border-l-transparent border-r-[22px] border-r-transparent border-b-[38px] border-b-white/8"></div>
        <div className="absolute bottom-40 right-20 w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-b-[31px] border-b-white/15"></div>
        
        {/* Pentagons */}
        <div className="absolute top-1/4 left-1/3 w-12 h-12 bg-white/10" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-10 h-10 border-2 border-white/12" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
        <div className="absolute top-40 right-1/4 w-14 h-14 bg-white/8" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
        
        {/* Stars */}
        <div className="absolute bottom-1/3 left-10 w-6 h-6 bg-white/10" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        <div className="absolute top-1/4 right-10 w-8 h-8 bg-white/12" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        <div className="absolute bottom-20 left-1/2 w-7 h-7 bg-white/8" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-6 sm:px-12 md:px-24">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl">About Me</h2>
          <div className="w-24 h-1 bg-[#FF9966] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left - Description */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 space-y-6">
            <p className="text-white/90 text-base sm:text-lg leading-relaxed">
              M.Tech student specializing in Microelectronics (VLSI) with a strong foundation in digital 
              design, RTL development, and functional verification. Currently working as a Functional 
              Verification Intern, contributing to RTL development and building expertise in UVM-based 
              methodologies.
            </p>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed">
              Proficient in Verilog and SystemVerilog with simulation-driven validation experience. 
              While designing a published Carry Select Adder, independently corrected an incorrect 
              reference architecture by re-analyzing gate-level logic and fixing the placement of over 
              ten gates to ensure functional correctness.
            </p>
          </div>

          {/* Right - Education & Achievements */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-white mb-4 text-2xl">Education</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-white font-semibold">Master of Technology in Microelectronics</p>
                  <p className="text-white/80">Manipal Institute of Technology</p>
                  <p className="text-white/70 text-sm">July 2024 – Present | CGPA: 7.02/10.0</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Bachelor of Engineering in Electronics and Communication</p>
                  <p className="text-white/80">KLE Technological University</p>
                  <p className="text-white/70 text-sm">Sept 2020 – May 2024 | CGPA: 7.89/10.0</p>
                </div>
                <div>
                  <p className="text-white font-semibold">PU in Science (12th)</p>
                  <p className="text-white/80">Vidya P Hanchinmani PU College</p>
                  <p className="text-white/70 text-sm">June 2018 – March 2020 | Percentage: 78.83%</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Secondary School (10th)</p>
                  <p className="text-white/80">Sandur Residential School</p>
                  <p className="text-white/70 text-sm">June 2016 – March 2018 | Percentage: 81.33%</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-white mb-4 text-2xl">Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF9966] mt-2 flex-shrink-0"></div>
                  <p className="text-white/90">Qualified GATE Exam 2024 (EC)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wavy Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F8FAFB"></path>
        </svg>
      </div>
    </section>
  );
}