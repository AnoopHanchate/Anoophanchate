import { Download, Mail, Eye } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profilePicture from 'figma:asset/5e8dc891760f0db26557b96ae26961df74747a49.png';

export function HeroSection() {
  const handleDownloadResume = () => {
    // Direct download using Google Drive direct download link
    // Make sure the file is shared as "Anyone with the link can view"
    const fileId = '1xSqpQL7cC8lCYM--WFHv9iJiC3ir-Qis';
    const downloadUrl = `https://drive.google.com/uc?id=${fileId}&export=download&confirm=t`;
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Anoop_Hanchate_Resume.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-32 relative overflow-hidden bg-[#F8FAFB]">
      {/* Enhanced Geometric Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circles */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-[#1BB896]/20 rounded-full"></div>
        <div className="absolute bottom-40 left-10 w-20 h-20 border-2 border-[#FF9966]/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-[#9D4EDD]/15 rounded-full"></div>
        
        {/* Squares - Reduced */}
        <div className="absolute top-1/3 left-10 w-16 h-16 border-2 border-[#1BB896]/15 rotate-45"></div>
        <div className="absolute bottom-20 right-1/4 w-12 h-12 bg-[#FF9966]/10 rotate-12"></div>
        
        {/* Pentagons - using clip-path */}
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-[#F72585]/15" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}></div>
        
        {/* Stars - Reduced */}
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-[#1BB896]/20" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        <div className="absolute top-1/4 right-1/3 w-6 h-6 bg-[#FF9966]/15" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        
        {/* Subtle background gradients */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#1BB896]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FF9966]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl w-full relative z-10 px-6 sm:px-12 md:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-16 text-center lg:text-left">
          {/* Right Column - Photo with Modern Frame - Shows first on mobile, second on desktop */}
          <div className="flex-shrink-0 lg:self-start lg:mt-20 order-1 lg:order-2 mt-8 lg:mt-20">
            <div className="relative">
              {/* Modern geometric frame */}
              <div className="absolute -inset-4 border-4 border-[#1BB896] rounded-full"></div>
              <div className="absolute -inset-2 border-2 border-[#FF9966] rounded-full"></div>
              
              {/* Corner accents */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#1BB896] rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#FF9966] rounded-full"></div>
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#FFD60A] rounded-full"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#4361EE] rounded-full"></div>
              
              {/* Gradient background circle */}
              <div className="absolute inset-0 w-[260px] h-[260px] bg-gradient-to-br from-[#1BB896]/10 to-[#FF9966]/10 rounded-full -z-10 blur-xl"></div>
              
              {/* Main photo container */}
              <div className="relative w-[225px] h-[225px]">
                <ImageWithFallback
                  src={profilePicture}
                  alt="Anoop Amaresh Hanchate"
                  className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white"
                />
              </div>
            </div>
          </div>
          
          {/* Left Column - Text - Shows second on mobile, first on desktop */}
          <div className="flex-1 space-y-6 lg:mt-8 order-2 lg:order-1">
            <div className="space-y-4">
              <p className="text-[#1BB896] text-2xl sm:text-3xl" style={{ fontFamily: "'Dancing Script', cursive" }}>
                Welcome to my portfolio
              </p>
              
              <p className="text-[#6b7280] text-base sm:text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
                Hi there! I'm
              </p>
              
              <h1 className="text-[#4361EE] leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic">
                Anoop Amaresh<br />Hanchate
              </h1>
              
              <p className="text-[#FF9966] text-lg sm:text-xl font-semibold">
                RTL Design & Verification Engineer
              </p>
              
              <p className="text-[#6b7280] text-sm sm:text-base max-w-xl leading-relaxed mx-auto lg:mx-0">
                I'm passionate about building high-performance digital systems and bringing innovative ideas to life through cutting-edge RTL architectures. Let's explore my journey in designing and verifying complex hardware systems!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1BB896] text-white rounded-full hover:bg-[#159f7e] transition-all shadow-lg hover:shadow-xl hover:shadow-[#1BB896]/30"
              >
                <Eye className="w-5 h-5" />
                View Projects
              </button>
              <button
                onClick={handleDownloadResume}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#FF9966] text-white rounded-full hover:bg-[#ff8547] transition-all shadow-lg hover:shadow-xl hover:shadow-[#FF9966]/30"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#1BB896] border-2 border-[#1BB896] rounded-full hover:bg-[#1BB896] hover:text-white transition-all shadow-md hover:shadow-lg"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Wavy Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#1BB896"></path>
        </svg>
      </div>
    </section>
  );
}