import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';
import logoImage from 'figma:asset/a711fa25515ef1dddf933c3d2fb2e361842d50ae.png';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section
      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNavClick = (section: string) => {
    scrollToSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-16 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden bg-[#1BB896] hover:bg-[#159f7e] transition-colors shadow-md hover:shadow-lg"
            >
              <img src={logoImage} alt="AH Logo" className="w-full h-full object-cover" />
            </button>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`relative text-[#1f2937] hover:text-[#1BB896] transition-colors font-medium ${
                  activeSection === 'home' ? 'text-[#1BB896]' : ''
                }`}
              >
                {activeSection === 'home' && (
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#1BB896] rounded-full"></span>
                )}
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`relative text-[#1f2937] hover:text-[#1BB896] transition-colors font-medium ${
                  activeSection === 'about' ? 'text-[#1BB896]' : ''
                }`}
              >
                {activeSection === 'about' && (
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#1BB896] rounded-full"></span>
                )}
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`relative text-[#1f2937] hover:text-[#1BB896] transition-colors font-medium ${
                  activeSection === 'projects' ? 'text-[#1BB896]' : ''
                }`}
              >
                {activeSection === 'projects' && (
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#1BB896] rounded-full"></span>
                )}
                Projects
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className={`relative text-[#1f2937] hover:text-[#1BB896] transition-colors font-medium ${
                  activeSection === 'experience' ? 'text-[#1BB896]' : ''
                }`}
              >
                {activeSection === 'experience' && (
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#1BB896] rounded-full"></span>
                )}
                Experience
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className={`relative text-[#1f2937] hover:text-[#1BB896] transition-colors font-medium ${
                  activeSection === 'skills' ? 'text-[#1BB896]' : ''
                }`}
              >
                {activeSection === 'skills' && (
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#1BB896] rounded-full"></span>
                )}
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`relative text-[#1f2937] hover:text-[#1BB896] transition-colors font-medium ${
                  activeSection === 'contact' ? 'text-[#1BB896]' : ''
                }`}
              >
                {activeSection === 'contact' && (
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-[#1BB896] rounded-full"></span>
                )}
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-[#1f2937]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="flex flex-col gap-6">
            <button
              onClick={() => handleMobileNavClick('home')}
              className={`relative text-left text-[#1f2937] hover:text-[#1BB896] transition-colors font-medium py-2 ${
                activeSection === 'home' ? 'text-[#1BB896]' : ''
              }`}
            >
              {activeSection === 'home' && (
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#1BB896] rounded-full"></span>
              )}
              <span className={activeSection === 'home' ? 'pl-4' : ''}>Home</span>
            </button>
            <button
              onClick={() => handleMobileNavClick('about')}
              className={`relative text-left text-[#1f2937] hover:text-[#1BB896] transition-colors font-medium py-2 ${
                activeSection === 'about' ? 'text-[#1BB896]' : ''
              }`}
            >
              {activeSection === 'about' && (
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#1BB896] rounded-full"></span>
              )}
              <span className={activeSection === 'about' ? 'pl-4' : ''}>About</span>
            </button>
            <button
              onClick={() => handleMobileNavClick('projects')}
              className={`relative text-left text-[#1f2937] hover:text-[#1BB896] transition-colors font-medium py-2 ${
                activeSection === 'projects' ? 'text-[#1BB896]' : ''
              }`}
            >
              {activeSection === 'projects' && (
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#1BB896] rounded-full"></span>
              )}
              <span className={activeSection === 'projects' ? 'pl-4' : ''}>Projects</span>
            </button>
            <button
              onClick={() => handleMobileNavClick('experience')}
              className={`relative text-left text-[#1f2937] hover:text-[#1BB896] transition-colors font-medium py-2 ${
                activeSection === 'experience' ? 'text-[#1BB896]' : ''
              }`}
            >
              {activeSection === 'experience' && (
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#1BB896] rounded-full"></span>
              )}
              <span className={activeSection === 'experience' ? 'pl-4' : ''}>Experience</span>
            </button>
            <button
              onClick={() => handleMobileNavClick('skills')}
              className={`relative text-left text-[#1f2937] hover:text-[#1BB896] transition-colors font-medium py-2 ${
                activeSection === 'skills' ? 'text-[#1BB896]' : ''
              }`}
            >
              {activeSection === 'skills' && (
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#1BB896] rounded-full"></span>
              )}
              <span className={activeSection === 'skills' ? 'pl-4' : ''}>Skills</span>
            </button>
            <button
              onClick={() => handleMobileNavClick('contact')}
              className={`relative text-left text-[#1f2937] hover:text-[#1BB896] transition-colors font-medium py-2 ${
                activeSection === 'contact' ? 'text-[#1BB896]' : ''
              }`}
            >
              {activeSection === 'contact' && (
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#1BB896] rounded-full"></span>
              )}
              <span className={activeSection === 'contact' ? 'pl-4' : ''}>Contact</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}