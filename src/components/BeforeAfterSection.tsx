import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2, Scissors, UserCheck, ArrowRight } from 'lucide-react';
import { BEFORE_AFTER_CASES } from '../data/salonData';

interface BeforeAfterSectionProps {
  onOpenBooking: () => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ onOpenBooking }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = BEFORE_AFTER_CASES[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };
    const onMouseUp = () => {
      setIsDragging(false);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    };
    const onTouchEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [isDragging, handleMove]);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e.clientX);
  };

  return (
    <section id="before-after" className="py-20 lg:py-28 bg-[#181818] relative overflow-hidden border-t border-neutral-800">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Editorial Section Top Header Rule */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="gold-text text-xs uppercase font-bold letter-spacing-widest">
              03 / CLINICAL RESULTS & TRANSFORMATIONS
            </span>
            <span className="w-12 h-[1px] gold-bg opacity-40"></span>
          </div>
          <span className="text-[10px] text-neutral-400 uppercase letter-spacing-wide">
            BEFORE & AFTER PORTFOLIO
          </span>
        </div>

        {/* Header */}
        <div className="text-left mb-10 max-w-2xl">
          <h2 className="serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Interactive <span className="italic gold-text">Before & After</span> Results
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            Drag the gold handle left and right to witness the authentic real-life hair and skincare results achieved at The Pounds Saloon.
          </p>

          {/* Transformation Switcher Tabs with Editorial Tracking */}
          <div className="flex flex-wrap items-center gap-2 mt-8">
            {BEFORE_AFTER_CASES.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 text-[11px] uppercase font-bold letter-spacing-wide transition-all duration-200 cursor-pointer ${
                  activeCaseIndex === idx
                    ? 'gold-bg text-[#121212] shadow-lg'
                    : 'bg-[#222222] text-neutral-300 hover:text-white hover:bg-[#2C2C2C] border border-neutral-700'
                }`}
              >
                {item.category}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Interactive Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          
          {/* Slider Container with Editorial Gold Border Inset */}
          <div className="lg:col-span-7">
            <div className="relative border-[0.5px] border-[#D4AF37] p-2 bg-[#141414] shadow-2xl select-none">
              
              <div
                ref={containerRef}
                onClick={handleContainerClick}
                className="relative h-[360px] sm:h-[460px] md:h-[500px] w-full overflow-hidden cursor-ew-resize bg-[#202020]"
              >
                {/* AFTER Image (Full Background) */}
                <img
                  src={activeCase.afterImage}
                  alt="After Treatment Result"
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                />

                {/* BEFORE Image (Clipped Left Layer) */}
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={activeCase.beforeImage}
                    alt="Before Treatment Condition"
                    className="absolute inset-0 w-full h-full object-cover object-center max-w-none filter contrast-105"
                    style={{
                      width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                      height: '100%'
                    }}
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Static Badges for Clarity */}
                <div className="absolute top-4 left-4 z-20 pointer-events-none">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase letter-spacing-wide bg-black/90 backdrop-blur-md text-white border border-neutral-700">
                    Before Treatment
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-20 pointer-events-none">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase letter-spacing-wide gold-bg text-[#121212] shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> After Treatment
                  </span>
                </div>

                {/* Vertical Divider Line with Gold Handle */}
                <div
                  className="absolute top-0 bottom-0 z-30 w-1 bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.8)]"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Interactive Drag Handle */}
                  <div
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#1A1A1A] border-2 gold-border shadow-2xl flex items-center justify-center text-[#D4AF37] hover:scale-110 active:scale-95 transition-transform cursor-grab active:cursor-grabbing"
                    id="slider-drag-handle"
                  >
                    <MoveHorizontal className="w-4 h-4 animate-pulse" />
                  </div>
                </div>

              </div>

              {/* Slider Instructions Helper */}
              <div className="bg-[#1C1C1C] py-2 px-4 text-center border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400 uppercase letter-spacing-wide">
                <span className="text-neutral-500">← Slide left (After)</span>
                <span className="font-bold gold-text">{Math.round(sliderPosition)}% Comparison</span>
                <span className="text-neutral-500">Slide right (Before) →</span>
              </div>
            </div>
          </div>

          {/* Case Narrative & Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[10px] font-bold gold-text uppercase letter-spacing-widest mb-2">
              Case File #{activeCaseIndex + 1} • {activeCase.category}
            </span>

            <h3 className="serif text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
              {activeCase.title}
            </h3>

            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6 font-light">
              {activeCase.description}
            </p>

            <div className="space-y-3 mb-8">
              <div className="p-4 bg-[#202020] border-l-2 gold-border flex items-start gap-3">
                <Scissors className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[10px] font-bold text-neutral-400 uppercase letter-spacing-wide">Treatment Performed</h4>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">{activeCase.serviceUsed}</p>
                </div>
              </div>

              <div className="p-4 bg-[#202020] border-l-2 gold-border flex items-start gap-3">
                <UserCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[10px] font-bold text-neutral-400 uppercase letter-spacing-wide">Stylist Diagnosis & Result</h4>
                  <p className="text-xs text-neutral-300 font-light mt-0.5">{activeCase.stylistNote}</p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="gold-bg text-[#121212] px-7 py-3.5 text-[11px] uppercase font-bold letter-spacing-wide hover:opacity-90 shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book This Transformation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
