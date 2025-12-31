import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export function ScrollDownArrow() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Get current scroll position
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if user is near the bottom (within 200px of the bottom)
      const isNearBottom = scrollTop + windowHeight >= documentHeight - 200;

      // Hide arrow when near bottom, show otherwise
      setIsVisible(!isNearBottom);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Check initial position
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    // Scroll down by one viewport height
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 
                 bg-[#20B2AA] hover:bg-[#1a8f88] text-white 
                 rounded-full p-4 shadow-lg
                 transition-all duration-300 hover:scale-110
                 animate-bounce cursor-pointer
                 md:bottom-12"
      aria-label="Scroll down"
    >
      <ChevronDown className="w-6 h-6 md:w-8 md:h-8" />
    </button>
  );
}
