import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../data/mockData';
import { ArrowUpRight } from 'lucide-react';

const SplitWordHeading = ({ children, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const words = children.split(' ');

  return (
    <h2 ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.5, delay: i * 0.06 }}
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
};

const SkillCard = ({ skill, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group block"
    >
      <div className="deccan-card overflow-hidden">
        <div className="relative h-[200px] overflow-hidden">
          <img
            src={skill.image}
            alt={skill.category}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121314] via-[#121314]/40 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="font-instrument text-xl font-semibold text-[#F6F3F0] flex items-center gap-2">
            {skill.category}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowUpRight size={18} className="text-[#F6F3F0]/60" />
            </span>
          </h3>
          <p className="text-[#F6F3F0]/50 font-inter text-sm leading-relaxed mt-3">
            {skill.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {skill.items.slice(0, 5).map((item) => (
              <span
                key={item}
                className="px-2.5 py-1 text-xs font-inter text-[#F6F3F0]/50 border border-white/[0.06] rounded-sm bg-white/[0.02]"
              >
                {item}
              </span>
            ))}
            {skill.items.length > 5 && (
              <span className="px-2.5 py-1 text-xs font-inter text-[#F6F3F0]/40">
                +{skill.items.length - 5} more
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="deccan-section" id="skills">
      <div className="container-section">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <SplitWordHeading className="font-instrument text-[clamp(1.8rem,4vw,3rem)] font-bold text-[#F6F3F0] leading-tight">
              Technical Expertise
            </SplitWordHeading>
            <SplitWordHeading className="font-instrument text-[clamp(1.8rem,4vw,3rem)] font-bold text-[#F6F3F0]/50 leading-tight">
              Grounded in Research + Battle Tested
            </SplitWordHeading>
          </div>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="deccan-btn shrink-0"
          >
            View Projects
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5595 5.37797L9.93453 2.75297C9.85244 2.67088 9.7411 2.62476 9.625 2.62476C9.5089 2.62476 9.39756 2.67088 9.31547 2.75297C9.23338 2.83506 9.18726 2.9464 9.18726 3.0625C9.18726 3.1786 9.23338 3.28994 9.31547 3.37203L11.194 5.25H7C5.49207 5.25159 4.04636 5.85132 2.98009 6.91759C1.91382 7.98386 1.31409 9.42957 1.3125 10.9375C1.3125 11.0535 1.35859 11.1648 1.44064 11.2469C1.52269 11.3289 1.63397 11.375 1.75 11.375C1.86603 11.375 1.97731 11.3289 2.05936 11.2469C2.14141 11.1648 2.1875 11.0535 2.1875 10.9375C2.18895 9.66159 2.69644 8.43835 3.59865 7.53615C4.50085 6.63394 5.72409 6.12645 7 6.125H11.194L9.31547 8.00297C9.23338 8.08506 9.18726 8.1964 9.18726 8.3125C9.18726 8.4286 9.23338 8.53994 9.31547 8.62203C9.39756 8.70412 9.5089 8.75024 9.625 8.75024C9.7411 8.75024 9.85244 8.70412 9.93453 8.62203L12.5595 5.99703C12.6002 5.9564 12.6325 5.90815 12.6545 5.85504C12.6765 5.80193 12.6878 5.74499 12.6878 5.6875C12.6878 5.63001 12.6765 5.57308 12.6545 5.51996C12.6325 5.46685 12.6002 5.4186 12.5595 5.37797Z" fill="#121314"/>
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.category} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
