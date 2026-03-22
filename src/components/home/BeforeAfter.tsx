import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight } from 'lucide-react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (ReactEvent: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(ReactEvent.clientX);
  };

  const handleTouchMove = (ReactEvent: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(ReactEvent.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-4">
            Clinical Precision. Radiant Results.
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            See the transformative power of our modern dentistry through real patient case galleries.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl select-none"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* Base Image (After) */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
            <img 
              src="/teeth_perfect.png" 
              alt="After treatment" 
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />
            <div className="absolute top-4 right-4 bg-secondary/80 backdrop-blur text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide pointer-events-none">
              AFTER
            </div>
          </div>

          {/* Overlay Image (Before - using CSS filter to yellow the teeth) */}
          <div 
            className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden w-full h-full pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <div className="relative w-full h-full">
              <img 
                src="/teeth_perfect.png" 
                alt="Before treatment" 
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none brightness-90 saturate-200 sepia-[0.4] hue-rotate-[-10deg]"
              />
              <div className="absolute top-4 left-4 bg-secondary/80 backdrop-blur text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide pointer-events-none">
                BEFORE
              </div>
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center pointer-events-auto"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            <div className="w-10 h-10 bg-white rounded-full shadow-lg border-2 border-gray-100 flex items-center justify-center text-primary transform transition-transform hover:scale-110 active:scale-95">
              <ArrowLeftRight size={20} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
