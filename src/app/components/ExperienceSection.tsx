import { Award, BookOpen, Briefcase } from 'lucide-react';

const workExperience = [
  {
    role: "Functional Verification Intern",
    company: "SOCDV Technologies Pvt Ltd",
    period: "Sept 2025 – Present",
    responsibilities: [
      "RTL development and UVM-based verification for digital systems",
      "RTL development using Verilog based on design specifications",
      "UVM-based testbench development and methodology",
      "Simulation debugging and verification planning",
      "Contributing to reliable digital system verification"
    ],
    technologies: ["Verilog", "UVM", "Simulation"]
  }
];

const publications = [
  {
    title: "Design of a 4-Bit Carry Select Adder",
    publisher: "Taylor & Francis",
    year: "2025",
    description: "High-speed, low-power VLSI design using 45 nm technology. Optimized carry select architecture for high-speed operation and power reduction techniques. Published at ICCIDC 2025 international conference.",
    technologies: ["VLSI", "45nm Technology", "Carry Select Adder"]
  }
];

const certificates = [
  {
    title: "VLSI System on Chip Design Overview",
    organization: "Maven Silicon",
    status: "Certified",
    description: "Comprehensive overview of SoC design methodologies and industry practices",
    technologies: ["VLSI", "SoC Design"]
  },
  {
    title: "TCL Scripting for VLSI",
    organization: "Udemy",
    status: "Certified",
    description: "Advanced TCL scripting techniques for VLSI automation and tool development",
    technologies: ["TCL", "VLSI Automation"]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 bg-[#FF9966] relative overflow-hidden">
      {/* Enhanced Geometric Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circles */}
        <div className="absolute top-20 right-1/4 w-24 h-24 border-2 border-white/10 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-18 h-18 border-2 border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-white/8 rounded-full"></div>
        <div className="absolute bottom-1/3 right-10 w-16 h-16 border-2 border-white/12 rounded-full"></div>
        
        {/* Squares */}
        <div className="absolute bottom-40 left-1/4 w-18 h-18 border-2 border-white/10 rotate-45"></div>
        <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-white/10 rotate-12"></div>
        <div className="absolute bottom-20 right-1/4 w-16 h-16 border-2 border-white/12 rotate-[35deg]"></div>
        <div className="absolute top-40 left-1/3 w-12 h-12 bg-white/8 rotate-[45deg]"></div>
        
        {/* Rectangles */}
        <div className="absolute top-1/4 left-10 w-24 h-14 border-2 border-white/10 rotate-[18deg]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-12 bg-white/8 rotate-[-12deg]"></div>
        <div className="absolute top-2/3 left-1/4 w-18 h-10 border-2 border-white/12 rotate-[28deg]"></div>
        
        {/* Triangles */}
        <div className="absolute top-1/3 left-10 w-0 h-0 border-l-[28px] border-l-transparent border-r-[28px] border-r-transparent border-b-[48px] border-b-white/10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-0 h-0 border-l-[22px] border-l-transparent border-r-[22px] border-r-transparent border-b-[38px] border-b-white/12"></div>
        <div className="absolute top-1/2 right-1/3 w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[41px] border-b-white/8"></div>
        <div className="absolute bottom-40 left-1/3 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-white/15"></div>
        <div className="absolute top-20 right-10 w-0 h-0 border-l-[26px] border-l-transparent border-r-[26px] border-r-transparent border-b-[45px] border-b-white/10"></div>
        
        {/* Pentagons */}
        <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-white/10" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 border-2 border-white/12" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
        <div className="absolute top-2/3 right-10 w-14 h-14 bg-white/8" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
        
        {/* Stars */}
        <div className="absolute bottom-20 right-10 w-7 h-7 bg-white/10" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        <div className="absolute top-1/3 left-1/2 w-8 h-8 bg-white/12" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        <div className="absolute bottom-1/2 left-10 w-6 h-6 bg-white/8" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        <div className="absolute top-40 right-1/3 w-9 h-9 bg-white/10" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-6 sm:px-12 md:px-24">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl">My Experience</h2>
          <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
        </div>

        {/* Work Experience Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-white" />
            <h3 className="text-white text-3xl">Work Experience</h3>
          </div>
          <div className="space-y-6">
            {workExperience.map((exp, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-white text-2xl mb-2">{exp.role}</h4>
                    <p className="text-white/80 text-lg">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mt-6">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-white/90 flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/20 text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-white" />
            <h3 className="text-white text-3xl">Publications</h3>
          </div>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-white text-2xl mb-2">{pub.title}</h4>
                    <p className="text-white/80 text-lg">{pub.publisher}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="px-4 py-2 bg-white/20 text-white rounded-full text-sm">
                      {pub.year}
                    </span>
                  </div>
                </div>

                <p className="text-white/90 mt-4 leading-relaxed">{pub.description}</p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {pub.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/20 text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-white" />
            <h3 className="text-white text-3xl">Certificates</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="mb-4">
                  <h4 className="text-white text-xl mb-2">{cert.title}</h4>
                  <p className="text-white/80">{cert.organization}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-white/20 text-white text-xs rounded-full">
                    {cert.status}
                  </span>
                </div>

                <p className="text-white/90 text-sm mb-4">{cert.description}</p>

                <div className="flex flex-wrap gap-2">
                  {cert.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/20 text-white text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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