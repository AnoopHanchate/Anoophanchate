import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TechnicalBackground } from './TechnicalBackground';

const projectData: Record<string, any> = {
  'selection-sort': {
    title: 'Data Path Controller Design for Selection Sort Algorithm',
    breadcrumb: 'Data Path Controller Design',
    tags: ['Verilog', 'FSM', 'Xilinx Vivado', 'Digital Design'],
    mediaType: 'image',
    media: 'https://images.unsplash.com/photo-1586920740280-e7da670f7cb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb2NoaXAlMjBjaXJjdWl0JTIwYm9hcmR8ZW58MXx8fHwxNzY2MjQ5MzA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    mediaCaption: 'RTL block diagram showing datapath and control unit architecture',
    overview: 'The project focuses on designing an RTL-based datapath and FSM controller to implement the selection sort algorithm in hardware. This demonstrates the translation of a software algorithm into efficient digital logic.',
    architecture: 'The design consists of two main components: a datapath unit containing registers, comparators, and swap logic, and a control unit implemented as a finite state machine (FSM). The FSM coordinates the sorting operations by generating appropriate control signals for data movement and comparison.',
    implementation: [
      'Register array to store the data elements',
      'Comparator module for element comparison',
      'Swap logic for exchanging element positions',
      'FSM controller with states for initialization, comparison, swap, and completion',
    ],
    verification: 'The design was verified using comprehensive testbenches in Xilinx Vivado. Simulation results confirmed correct sorting behavior for various input patterns, including edge cases like already sorted and reverse sorted arrays.',
    learnings: 'This project provided valuable insights into hardware-software co-design, FSM optimization, and timing considerations in sequential circuits. Debugging complex state transitions improved understanding of verification methodologies.',
  },
  'sram-cell': {
    title: 'Design of 6T CMOS Static RAM Cell',
    breadcrumb: '6T CMOS SRAM Cell',
    tags: ['CMOS', 'Cadence Virtuoso', 'Layout', 'Memory Design'],
    mediaType: 'image',
    media: 'https://images.unsplash.com/photo-1738348079819-383f354d92a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pY29uZHVjdG9yJTIwd2FmZXIlMjBmYWJyaWNhdGlvbnxlbnwxfHx8fDE3NjYyNDkzMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    mediaCaption: 'SRAM cell schematic and layout in Cadence Virtuoso',
    overview: 'This project involves the complete design flow of a 6-transistor CMOS SRAM cell, from schematic capture through layout implementation, with focus on optimizing cell ratio and ensuring manufacturability.',
    architecture: 'The 6T SRAM cell consists of two cross-coupled inverters forming a bistable latch for data storage, and two access transistors controlled by the word line. Careful transistor sizing ensures proper read/write operation while maintaining data stability.',
    implementation: [
      'Schematic design with optimized transistor sizing',
      'Cell ratio calculation for read stability',
      'Physical layout following design rules (DRC clean)',
      'Parasitic extraction and post-layout simulation',
      'Layout versus schematic (LVS) verification',
    ],
    verification: 'The design underwent rigorous verification including DRC (Design Rule Check) and LVS (Layout Versus Schematic) checks in Cadence Virtuoso. Post-layout simulations validated read/write functionality and data retention characteristics.',
    learnings: 'Gained deep understanding of memory cell design trade-offs, layout techniques for area optimization, and the importance of parasitic effects in nanometer technologies. The project emphasized the critical relationship between circuit design and physical implementation.',
  },
  'riscv-gpio': {
    title: 'RISC-V Based SoC Design for GPIO Protocol',
    breadcrumb: 'RISC-V GPIO SoC',
    tags: ['RISC-V', 'GPIO', 'FPGA', 'SoC', 'Xilinx Vivado'],
    mediaType: 'image',
    media: 'https://images.unsplash.com/photo-1760539165416-62fd69fcf02d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHByb2Nlc3NvciUyMGNoaXB8ZW58MXx8fHwxNzY2MTkwMjQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    mediaCaption: 'RISC-V SoC architecture with integrated GPIO module',
    overview: 'A complete System-on-Chip design integrating a RISC-V processor core with a custom GPIO peripheral module. The project demonstrates full-stack hardware development from RTL design to FPGA implementation and testing.',
    architecture: 'The SoC architecture consists of a RISC-V processor core connected to a custom GPIO module via a memory-mapped interface. The GPIO module features an FSM-based control unit managing bidirectional I/O operations, interrupt generation, and pin configuration.',
    implementation: [
      'Custom GPIO peripheral with configurable pin directions',
      'FSM-based control logic for I/O operations',
      'Memory-mapped register interface for processor communication',
      'Interrupt controller integration',
      'FPGA synthesis and implementation in Xilinx Vivado',
    ],
    verification: 'The design was verified through multi-level testing: RTL simulation with directed and constrained-random testbenches, FPGA prototyping with real hardware (LED control, 7-segment display, IR sensor interface), and software validation using C programs running on the RISC-V core.',
    learnings: 'This project provided comprehensive experience in SoC integration, bus protocol implementation, and hardware-software co-verification. Understanding the interaction between processor and peripherals was crucial. FPGA debugging skills were significantly enhanced through hands-on testing.',
  },
};

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectData[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center">
          <h2 className="text-[#EAEFFF] mb-4">Project Not Found</h2>
          <Link to="/" className="text-[#3A86FF] hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 sm:px-12 md:px-16 py-12 sm:py-16 md:py-20 relative bg-[#F8FAFB] overflow-hidden">
      {/* Enhanced Geometric Background Shapes - Similar to Home Page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circles */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-[#1BB896]/20 rounded-full"></div>
        <div className="absolute bottom-40 left-10 w-20 h-20 border-2 border-[#FF9966]/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-[#9D4EDD]/15 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-16 h-16 bg-[#06FFA5]/10 rounded-full"></div>
        
        {/* Squares */}
        <div className="absolute top-1/3 left-10 w-16 h-16 border-2 border-[#1BB896]/15 rotate-45"></div>
        <div className="absolute bottom-20 right-1/4 w-12 h-12 bg-[#FF9966]/10 rotate-12"></div>
        <div className="absolute top-40 right-1/3 w-20 h-20 border-2 border-[#FFD60A]/20 rotate-[30deg]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-14 h-14 bg-[#F72585]/10 rotate-[60deg]"></div>
        
        {/* Rectangles */}
        <div className="absolute top-1/4 right-10 w-24 h-16 border-2 border-[#4361EE]/15 rotate-12"></div>
        <div className="absolute bottom-40 left-1/3 w-20 h-12 bg-[#06FFA5]/10 rotate-[-15deg]"></div>
        <div className="absolute top-1/2 right-1/4 w-18 h-10 border-2 border-[#F72585]/15 rotate-[25deg]"></div>
        
        {/* Triangles */}
        <div className="absolute top-1/2 right-10 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[52px] border-b-[#1BB896]/15"></div>
        <div className="absolute top-40 left-1/4 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-[#FF9966]/10"></div>
        <div className="absolute bottom-1/4 right-20 w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[43px] border-b-[#9D4EDD]/15"></div>
        <div className="absolute top-1/3 right-1/2 w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-b-[31px] border-b-[#FFD60A]/15"></div>
        <div className="absolute bottom-20 left-20 w-0 h-0 border-l-[22px] border-l-transparent border-r-[22px] border-r-transparent border-b-[38px] border-b-[#4361EE]/15"></div>
        
        {/* Pentagons - using clip-path */}
        <div className="absolute top-1/4 left-1/4 w-10 h-10 bg-[#06FFA5]/15" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-[#F72585]/15" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
        <div className="absolute top-2/3 left-10 w-14 h-14 border-2 border-[#9D4EDD]/15" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
        
        {/* Stars */}
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-[#1BB896]/20" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        <div className="absolute top-1/4 right-1/3 w-6 h-6 bg-[#FF9966]/15" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        <div className="absolute bottom-40 right-10 w-7 h-7 bg-[#FFD60A]/20" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        <div className="absolute top-1/3 left-1/2 w-9 h-9 bg-[#4361EE]/15" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        
        {/* Subtle background gradients */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#1BB896]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FF9966]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-2 text-[#6b7280] text-sm">
            <Link to="/" className="hover:text-[#1BB896] transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <span>→</span>
            <Link to="/#projects" className="hover:text-[#1BB896] transition-colors">
              Projects
            </Link>
            <span>→</span>
            <span className="text-[#1f2937]">{project.breadcrumb}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="text-[#1f2937] text-2xl sm:text-3xl md:text-4xl">{project.title}</h1>
            <Link
              to="/#projects"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-white text-[#1BB896] rounded-lg hover:bg-[#1BB896] hover:text-white transition-colors border-2 border-[#1BB896] shadow-md w-full md:w-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Projects</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#1BB896]/10 text-[#1BB896] rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Media Section */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            <ImageWithFallback
              src={project.media}
              alt={project.title}
              className="w-full h-48 sm:h-64 md:h-96 object-cover"
            />
          </div>
          <p className="text-[#6b7280] mt-3 text-center text-sm sm:text-base">{project.mediaCaption}</p>
        </div>

        {/* Details Sections */}
        <div className="space-y-6 sm:space-y-8">
          {/* Overview */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-[#1f2937] mb-3 sm:mb-4 text-xl sm:text-2xl">Overview</h2>
            <p className="text-[#6b7280] leading-relaxed text-sm sm:text-base">{project.overview}</p>
          </div>

          {/* Architecture */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-[#1f2937] mb-3 sm:mb-4 text-xl sm:text-2xl">Architecture / Design Approach</h2>
            <p className="text-[#6b7280] leading-relaxed text-sm sm:text-base">{project.architecture}</p>
          </div>

          {/* Implementation Details */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-[#1f2937] mb-3 sm:mb-4 text-xl sm:text-2xl">Implementation Details</h2>
            <ul className="space-y-2 text-[#6b7280] text-sm sm:text-base">
              {project.implementation.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#1BB896] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verification & Results */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-[#1f2937] mb-3 sm:mb-4 text-xl sm:text-2xl">Verification & Results</h2>
            <p className="text-[#6b7280] leading-relaxed text-sm sm:text-base">{project.verification}</p>
          </div>

          {/* Key Learnings */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-[#1f2937] mb-3 sm:mb-4 text-xl sm:text-2xl">Key Learnings</h2>
            <p className="text-[#6b7280] leading-relaxed text-sm sm:text-base">{project.learnings}</p>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 flex justify-center">
          <Link
            to="/#projects"
            className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#1BB896] text-white rounded-lg hover:bg-[#159f7e] transition-colors shadow-lg hover:shadow-xl text-sm sm:text-base w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}