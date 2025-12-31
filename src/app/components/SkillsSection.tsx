import { Binary, Code2, Wrench, Users } from 'lucide-react';

const skillCategories = [
  {
    title: 'RTL Design & Verification',
    icon: Binary,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      'Verilog',
      'SystemVerilog',
      'Functional Verification',
      'UVM',
      'Coverage Analysis',
    ],
  },
  {
    title: 'Programming',
    icon: Code2,
    color: 'from-green-500 to-emerald-500',
    skills: [
      'C',
      'Python',
      'TCL Scripting',
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    color: 'from-orange-500 to-red-500',
    skills: [
      'Xilinx Vivado',
      'ModelSim',
      'Cadence Virtuoso',
      'Cadence Genus/Innovus',
    ],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
    skills: [
      'Adaptability',
      'Teamwork',
      'Problem-Solving',
      'Analytical Thinking',
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 bg-[#F8FAFB] relative overflow-hidden">
      {/* Enhanced Geometric Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circles */}
        <div className="absolute top-20 right-1/4 w-26 h-26 border-2 border-[#1BB896]/15 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-18 h-18 border-2 border-[#FF9966]/15 rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-22 h-22 bg-[#9D4EDD]/10 rounded-full"></div>
        <div className="absolute bottom-1/3 right-10 w-20 h-20 border-2 border-[#06FFA5]/15 rounded-full"></div>
        
        {/* Squares */}
        <div className="absolute top-1/2 right-10 w-16 h-16 border-2 border-[#1BB896]/10 rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/3 w-14 h-14 bg-[#FFD60A]/15 rotate-12"></div>
        <div className="absolute top-1/3 right-1/3 w-18 h-18 border-2 border-[#F72585]/12 rotate-[38deg]"></div>
        <div className="absolute bottom-40 left-10 w-12 h-12 bg-[#4361EE]/10 rotate-[52deg]"></div>
        
        {/* Rectangles */}
        <div className="absolute top-1/4 left-1/4 w-24 h-14 border-2 border-[#1BB896]/10 rotate-[22deg]"></div>
        <div className="absolute bottom-1/2 right-1/3 w-20 h-12 bg-[#FF9966]/10 rotate-[-18deg]"></div>
        <div className="absolute top-2/3 left-1/3 w-18 h-10 border-2 border-[#06FFA5]/12 rotate-[32deg]"></div>
        
        {/* Triangles */}
        <div className="absolute top-1/2 right-10 w-0 h-0 border-l-[26px] border-l-transparent border-r-[26px] border-r-transparent border-b-[45px] border-b-[#1BB896]/10"></div>
        <div className="absolute bottom-1/3 left-1/4 w-0 h-0 border-l-[22px] border-l-transparent border-r-[22px] border-r-transparent border-b-[38px] border-b-[#FF9966]/12"></div>
        <div className="absolute top-1/4 right-1/3 w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[41px] border-b-[#9D4EDD]/10"></div>
        <div className="absolute bottom-20 left-10 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-[#FFD60A]/15"></div>
        <div className="absolute top-40 left-1/2 w-0 h-0 border-l-[28px] border-l-transparent border-r-[28px] border-r-transparent border-b-[48px] border-b-[#4361EE]/10"></div>
        
        {/* Pentagons */}
        <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-[#06FFA5]/15" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-14 h-14 border-2 border-[#F72585]/12" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
        <div className="absolute top-1/2 right-1/3 w-10 h-10 bg-[#9D4EDD]/15" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
        
        {/* Stars */}
        <div className="absolute bottom-1/3 left-10 w-6 h-6 bg-[#FF9966]/15" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        <div className="absolute top-1/4 right-10 w-8 h-8 bg-[#1BB896]/18" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        <div className="absolute bottom-40 right-1/3 w-7 h-7 bg-[#FFD60A]/15" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        <div className="absolute top-2/3 left-1/2 w-9 h-9 bg-[#4361EE]/12" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-6 sm:px-12 md:px-24">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[#1f2937] mb-4 text-3xl sm:text-4xl lg:text-5xl">Skills</h2>
          <div className="w-24 h-1 bg-[#1BB896] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#1BB896]/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1BB896] to-[#159f7e] flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-[#1f2937] text-xl mb-6">{category.title}</h3>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#1BB896]"></div>
                      <span className="text-[#6b7280]">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Wavy Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#1BB896"></path>
        </svg>
      </div>
    </section>
  );
}