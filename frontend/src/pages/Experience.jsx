import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Briefcase, Award, Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/mock';
import ScrollReveal from '../components/animations/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    // GSAP timeline animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineLine = document.querySelector('.timeline-line-fill');

    // Animate timeline line
    gsap.fromTo(
      timelineLine,
      { height: '0%' },
      {
        height: '100%',
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 60%',
          end: 'bottom 80%',
          scrub: 1,
        },
      }
    );

    // Animate each timeline item
    timelineItems.forEach((item, index) => {
      const direction = index % 2 === 0 ? -100 : 100;
      gsap.fromTo(
        item,
        { opacity: 0, x: direction },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'education':
        return GraduationCap;
      case 'experience':
        return Briefcase;
      case 'achievement':
        return Award;
      default:
        return Briefcase;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'education':
        return 'bg-neutral-100 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700';
      case 'experience':
        return 'bg-black dark:bg-white';
      case 'achievement':
        return 'bg-neutral-200 dark:bg-neutral-800 border-neutral-400 dark:border-neutral-600';
      default:
        return 'bg-neutral-100 dark:bg-neutral-900';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="text-sm font-light text-neutral-500 dark:text-neutral-400 tracking-wider uppercase">
                My Journey
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light text-black dark:text-white leading-tight">
                Experience &
                <br />
                <span className="font-normal">Education</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                A chronological overview of my professional journey, educational background, 
                and notable achievements that have shaped my career in technology.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="pb-20 lg:pb-32">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800">
              <div className="timeline-line-fill absolute top-0 left-0 w-full bg-black dark:bg-white" />
            </div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const Icon = getTypeIcon(exp.type);
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={exp.id}
                    className={`timeline-item relative flex items-start gap-8 ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Point */}
                    <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${getTypeColor(
                          exp.type
                        )}`}
                      >
                        <Icon
                          className={`w-4 h-4 ${
                            exp.type === 'experience'
                              ? 'text-white dark:text-black'
                              : 'text-black dark:text-white'
                          }`}
                        />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div
                      className={`ml-16 lg:ml-0 lg:w-[calc(50%-2rem)] ${
                        isEven ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'
                      }`}
                    >
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 bg-neutral-50 dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-800 group"
                      >
                        {/* Type Badge */}
                        <span className="inline-block px-3 py-1 text-xs font-light uppercase tracking-wider text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 rounded-full mb-4">
                          {exp.type}
                        </span>

                        {/* Title */}
                        <h3 className="text-xl font-light text-black dark:text-white">
                          {exp.title}
                        </h3>

                        {/* Organization */}
                        <p className="mt-1 text-neutral-600 dark:text-neutral-400 font-light">
                          {exp.organization}
                        </p>

                        {/* Meta Info */}
                        <div className={`mt-4 flex flex-wrap gap-4 text-sm text-neutral-500 ${isEven ? 'lg:justify-end' : ''}`}>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span className="font-light">{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span className="font-light">{exp.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="mt-4 text-neutral-500 dark:text-neutral-500 font-light text-sm leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Skills */}
                        <div className={`mt-4 flex flex-wrap gap-2 ${isEven ? 'lg:justify-end' : ''}`}>
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 text-xs font-light text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
