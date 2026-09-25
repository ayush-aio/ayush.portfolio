import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, heroWords, techMarquee } from '../data/mockData';

const WordSwap = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextWord = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % heroWords.length);
      setIsAnimating(false);
    }, 400);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextWord, 3000);
    return () => clearInterval(interval);
  }, [nextWord]);

  const word = heroWords[currentIndex];

  return (
    <span className="inline-block relative">
      <span
        className={`inline-block font-instrument italic transition-all duration-400 ${
          isAnimating
            ? 'opacity-0 blur-[8px] translate-y-2'
            : 'opacity-100 blur-0 translate-y-0'
        }`}
        style={{ transitionProperty: 'opacity, filter, transform' }}
      >
        {word.split('').map((char, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-block"
            style={{
              transitionDelay: `${i * 30}ms`,
            }}
          >
            {char}
          </span>
        ))}
      </span>
    </span>
  );
};

const TechMarquee = () => {
  const doubled = [...techMarquee, ...techMarquee];
  return (
    <div className="w-full overflow-hidden py-6 border-t border-b border-white/[0.06]">
      <div className="marquee-track">
        {doubled.map((tech, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-6 text-[#F6F3F0]/40 text-sm font-inter font-medium whitespace-nowrap"
          >
            <span className="w-1 h-1 rounded-full bg-[#F6F3F0]/20"></span>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden" id="hero">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#121314]" />
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 40%, rgba(30, 60, 90, 0.4) 0%, transparent 70%),
              radial-gradient(ellipse 40% 30% at 70% 50%, rgba(20, 50, 80, 0.3) 0%, transparent 60%)`,
          }}
        />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(246,243,240,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(246,243,240,0.5) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 pb-12 pt-32 md:pt-0 flex-1 flex flex-col justify-center">
        {/* Banner Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 text-xs font-inter font-medium tracking-[0.15em] uppercase text-[#F6F3F0]/70 border border-white/[0.08] rounded-sm bg-white/[0.02]">
            // Open to Opportunities
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="font-instrument text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.05] font-bold text-[#F6F3F0] tracking-tight">
            Building Super{' '}
            <WordSwap />{' '}
            AI
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-[33rem] mt-5"
        >
          <p className="text-[#F6F3F0]/60 font-inter text-base md:text-lg leading-relaxed">
            {personalInfo.subtitle}
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="deccan-btn"
          >
            View GitHub
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5595 5.37797L9.93453 2.75297C9.85244 2.67088 9.7411 2.62476 9.625 2.62476C9.5089 2.62476 9.39756 2.67088 9.31547 2.75297C9.23338 2.83506 9.18726 2.9464 9.18726 3.0625C9.18726 3.1786 9.23338 3.28994 9.31547 3.37203L11.194 5.25H7C5.49207 5.25159 4.04636 5.85132 2.98009 6.91759C1.91382 7.98386 1.31409 9.42957 1.3125 10.9375C1.3125 11.0535 1.35859 11.1648 1.44064 11.2469C1.52269 11.3289 1.63397 11.375 1.75 11.375C1.86603 11.375 1.97731 11.3289 2.05936 11.2469C2.14141 11.1648 2.1875 11.0535 2.1875 10.9375C2.18895 9.66159 2.69644 8.43835 3.59865 7.53615C4.50085 6.63394 5.72409 6.12645 7 6.125H11.194L9.31547 8.00297C9.23338 8.08506 9.18726 8.1964 9.18726 8.3125C9.18726 8.4286 9.23338 8.53994 9.31547 8.62203C9.39756 8.70412 9.5089 8.75024 9.625 8.75024C9.7411 8.75024 9.85244 8.70412 9.93453 8.62203L12.5595 5.99703C12.6002 5.9564 12.6325 5.90815 12.6545 5.85504C12.6765 5.80193 12.6878 5.74499 12.6878 5.6875C12.6878 5.63001 12.6765 5.57308 12.6545 5.51996C12.6325 5.46685 12.6002 5.4186 12.5595 5.37797Z" fill="#121314"/>
            </svg>
          </a>
        </motion.div>

        {/* Bottom Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-16 md:mt-24"
        >
          <span className="slash-heading">
            // Specializing in GenAI, LLMs & Agentic AI
          </span>
        </motion.div>
      </div>

      {/* Tech Marquee */}
      <TechMarquee />
    </section>
  );
};

export default Hero;
