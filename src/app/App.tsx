import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { ProjectDetail } from './components/ProjectDetail';
import { TechnicalBackground } from './components/TechnicalBackground';
import { ScrollDownArrow } from './components/ScrollDownArrow';

function MainPage() {
  return (
    <>
      <Navigation />
      <div className="bg-[#F8FAFB] min-h-screen relative">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </div>
      <ScrollDownArrow />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#0B132B] min-h-screen font-['Inter']">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}