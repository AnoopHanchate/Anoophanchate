import { Link } from 'react-router-dom';
import { ArrowRight, Cpu } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 'selection-sort',
    title: 'Selection Sort Hardware Accelerator',
    subtitle: 'FSM-Based Datapath Controller',
    description: 'RTL implementation of selection sort algorithm with optimized datapath and state machine control architecture',
    tags: ['Verilog', 'FSM Design', 'Xilinx Vivado'],
    technologies: ['Verilog', 'FSM Design', 'Xilinx Vivado'],
    category: 'RTL Design',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1586920740280-e7da670f7cb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb2NoaXAlMjBjaXJjdWl0JTIwYm9hcmR8ZW58MXx8fHwxNzY2MjQ5MzA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    highlight: 'Optimized State Machine',
  },
  {
    id: 'sram-cell',
    title: '6T CMOS SRAM Cell',
    subtitle: 'Memory Design & Layout',
    description: 'Complete design flow from schematic to layout with optimized cell ratio and parasitic analysis',
    tags: ['CMOS', 'Cadence Virtuoso', 'DRC/LVS'],
    technologies: ['CMOS', 'Cadence Virtuoso', 'DRC/LVS'],
    category: 'VLSI Design',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1738348079819-383f354d92a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pY29uZHVjdG9yJTIwd2FmZXIlMjBmYWJyaWNhdGlvbnxlbnwxfHx8fDE3NjYyNDkzMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    highlight: 'Low-Power Design',
  },
  {
    id: 'riscv-gpio',
    title: 'RISC-V GPIO SoC',
    subtitle: 'Complete System Integration',
    description: 'Custom GPIO peripheral with FSM control integrated into RISC-V processor, verified on FPGA',
    tags: ['RISC-V', 'SoC Design', 'FPGA'],
    technologies: ['RISC-V', 'SoC Design', 'FPGA'],
    category: 'SoC Design',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1760539165416-62fd69fcf02d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHByb2Nlc3NvciUyMGNoaXB8ZW58MXx8fHwxNzY2MTkwMjQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    highlight: 'FPGA Verified',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 relative bg-[#F8FAFB] overflow-hidden">
      {/* Enhanced Geometric Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circles */}
        <div className="absolute top-20 left-1/4 w-28 h-28 border-2 border-[#1BB896]/15 rounded-full"></div>
        <div className="absolute bottom-40 right-1/4 w-20 h-20 border-2 border-[#FF9966]/15 rounded-full"></div>
        <div className="absolute top-2/3 right-10 w-24 h-24 bg-[#9D4EDD]/10 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 border-2 border-[#06FFA5]/20 rounded-full"></div>
        
        {/* Squares */}
        <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-[#1BB896]/10 rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/3 w-14 h-14 bg-[#FFD60A]/15 rotate-12"></div>
        <div className="absolute top-1/4 left-1/3 w-18 h-18 border-2 border-[#F72585]/15 rotate-[40deg]"></div>
        <div className="absolute bottom-1/4 right-10 w-12 h-12 bg-[#4361EE]/10 rotate-[50deg]"></div>
        
        {/* Rectangles */}
        <div className="absolute top-1/3 right-1/4 w-24 h-14 border-2 border-[#1BB896]/12 rotate-[15deg]"></div>
        <div className="absolute bottom-1/2 left-1/4 w-20 h-12 bg-[#FF9966]/10 rotate-[-20deg]"></div>
        <div className="absolute top-40 right-1/3 w-22 h-10 border-2 border-[#06FFA5]/15 rotate-[25deg]"></div>
        
        {/* Triangles */}
        <div className="absolute top-1/2 left-10 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[52px] border-b-[#1BB896]/10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-0 h-0 border-l-[22px] border-l-transparent border-r-[22px] border-r-transparent border-b-[38px] border-b-[#FF9966]/12"></div>
        <div className="absolute top-1/3 right-10 w-0 h-0 border-l-[26px] border-l-transparent border-r-[26px] border-r-transparent border-b-[45px] border-b-[#9D4EDD]/10"></div>
        <div className="absolute bottom-40 left-1/3 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-[#FFD60A]/15"></div>
        <div className="absolute top-20 left-10 w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[41px] border-b-[#4361EE]/10"></div>
        
        {/* Pentagons */}
        <div className="absolute top-1/4 right-1/3 w-12 h-12 bg-[#06FFA5]/15" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-14 h-14 border-2 border-[#F72585]/12" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
        <div className="absolute top-2/3 left-1/3 w-10 h-10 bg-[#9D4EDD]/15" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
        
        {/* Stars */}
        <div className="absolute bottom-20 right-10 w-7 h-7 bg-[#FF9966]/15" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        <div className="absolute top-1/3 left-1/2 w-8 h-8 bg-[#1BB896]/20" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        <div className="absolute bottom-1/2 right-1/4 w-6 h-6 bg-[#FFD60A]/15" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        <div className="absolute top-1/2 right-1/3 w-9 h-9 bg-[#4361EE]/12" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-6 sm:px-12 md:px-24">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[#1f2937] mb-4 text-3xl sm:text-4xl lg:text-5xl">My Projects</h2>
          <div className="w-24 h-1 bg-[#1BB896] mx-auto rounded-full"></div>
          <p className="text-[#6b7280] mt-6 text-lg">
            Featured projects showcasing RTL design and verification expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#1BB896]/30"
            >
              <div className="relative h-48 bg-gradient-to-br from-[#1BB896] to-[#159f7e] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1BB896]/60 to-[#159f7e]/60">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Cpu className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-[#1f2937] text-xl group-hover:text-[#1BB896] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#6b7280] text-sm line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#1BB896]/10 text-[#1BB896] text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-[#1BB896] pt-2">
                  <span className="text-sm font-medium">View Details</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Wavy Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#FF9966"></path>
        </svg>
      </div>
    </section>
  );
}