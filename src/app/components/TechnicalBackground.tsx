export function TechnicalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3A86FF 1px, transparent 1px),
            linear-gradient(to bottom, #3A86FF 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Dot Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #3A86FF 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Circuit Lines - Top Right */}
      <svg className="absolute top-0 right-0 w-[800px] h-[800px] opacity-[0.06]" viewBox="0 0 800 800">
        <path d="M400,0 L400,200 L600,200" stroke="#3A86FF" strokeWidth="2" fill="none"/>
        <circle cx="400" cy="200" r="8" fill="#3A86FF"/>
        <circle cx="600" cy="200" r="8" fill="#3A86FF"/>
        
        <path d="M200,100 L400,100 L400,0" stroke="#3A86FF" strokeWidth="2" fill="none"/>
        <circle cx="200" cy="100" r="8" fill="#3A86FF"/>
        <circle cx="400" cy="100" r="8" fill="#3A86FF"/>
        
        <path d="M600,200 L800,200 L800,400" stroke="#3A86FF" strokeWidth="2" fill="none"/>
        <circle cx="800" cy="400" r="8" fill="#3A86FF"/>
        
        <path d="M0,300 L200,300 L200,500" stroke="#3A86FF" strokeWidth="2" fill="none"/>
        <circle cx="0" cy="300" r="8" fill="#3A86FF"/>
        <circle cx="200" cy="500" r="8" fill="#3A86FF"/>
        
        <rect x="350" y="50" width="100" height="60" fill="none" stroke="#3A86FF" strokeWidth="2" rx="4"/>
        <rect x="550" y="150" width="100" height="60" fill="none" stroke="#3A86FF" strokeWidth="2" rx="4"/>
      </svg>

      {/* Circuit Lines - Bottom Left */}
      <svg className="absolute bottom-0 left-0 w-[800px] h-[800px] opacity-[0.06]" viewBox="0 0 800 800">
        <path d="M0,600 L200,600 L200,800" stroke="#3A86FF" strokeWidth="2" fill="none"/>
        <circle cx="200" cy="600" r="8" fill="#3A86FF"/>
        
        <path d="M400,800 L400,600 L600,600" stroke="#3A86FF" strokeWidth="2" fill="none"/>
        <circle cx="400" cy="600" r="8" fill="#3A86FF"/>
        <circle cx="600" cy="600" r="8" fill="#3A86FF"/>
        
        <path d="M200,700 L400,700 L400,800" stroke="#3A86FF" strokeWidth="2" fill="none"/>
        <circle cx="200" cy="700" r="8" fill="#3A86FF"/>
        <circle cx="400" cy="700" r="8" fill="#3A86FF"/>
        
        <rect x="150" y="550" width="100" height="60" fill="none" stroke="#3A86FF" strokeWidth="2" rx="4"/>
        <rect x="350" y="650" width="100" height="60" fill="none" stroke="#3A86FF" strokeWidth="2" rx="4"/>
      </svg>

      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#3A86FF] opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-[#3A86FF] opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 rounded-full bg-[#3A86FF] opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 rounded-full bg-[#3A86FF] opacity-25 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Gradient Overlays for Depth */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#0B132B] via-transparent to-transparent opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-full h-[600px] bg-gradient-to-t from-[#0B132B] via-transparent to-transparent opacity-60"></div>
    </div>
  );
}
