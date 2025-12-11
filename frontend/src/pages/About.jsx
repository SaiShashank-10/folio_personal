import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Palette, Database, Brain, Coffee, Music, Gamepad2, BookOpen } from 'lucide-react';
import { personalInfo, skills, techStack, funFacts } from '../data/mock';
import ScrollReveal from '../components/animations/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    // GSAP animation for skill bars
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    skillBars.forEach((bar) => {
      gsap.fromTo(
        bar,
        { width: '0%' },
        {
          width: bar.dataset.level + '%',
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  const skillCategories = [
    { key: 'frontend', label: 'Frontend', icon: Code2, color: 'from-neutral-400 to-neutral-600' },
    { key: 'backend', label: 'Backend', icon: Database, color: 'from-neutral-500 to-neutral-700' },
    { key: 'aiml', label: 'AI / ML', icon: Brain, color: 'from-neutral-600 to-neutral-800' },
    { key: 'tools', label: 'Tools', icon: Palette, color: 'from-neutral-400 to-neutral-500' },
  ];

  const funFactIcons = [Coffee, Music, Gamepad2, BookOpen, Code2];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-neutral-200 dark:border-neutral-800 rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-neutral-100 dark:bg-neutral-900 rounded-2xl -z-10" />
              </div>
            </ScrollReveal>

            {/* Content */}
            <div>
              <ScrollReveal>
                <span className="text-sm font-light text-neutral-500 dark:text-neutral-400 tracking-wider uppercase">
                  About Me
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light text-black dark:text-white leading-tight">
                  Crafting Digital
                  <br />
                  <span className="font-normal">Experiences</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="mt-6 text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                  {personalInfo.bio}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="mt-4 text-neutral-500 dark:text-neutral-500 font-light leading-relaxed">
                  Currently pursuing {personalInfo.education}, I'm passionate about building 
                  applications that not only work flawlessly but also provide delightful user experiences. 
                  When I'm not coding, you'll find me exploring the latest in AI/ML or contributing to 
                  open-source projects.
                </p>
              </ScrollReveal>

              {/* Quick Info */}
              <ScrollReveal delay={0.4}>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
                    <p className="text-sm text-neutral-500 font-light">Location</p>
                    <p className="text-black dark:text-white font-light mt-1">{personalInfo.location}</p>
                  </div>
                  <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
                    <p className="text-sm text-neutral-500 font-light">Education</p>
                    <p className="text-black dark:text-white font-light mt-1">{personalInfo.education}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 bg-neutral-50 dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-light text-neutral-500 dark:text-neutral-400 tracking-wider uppercase">
                My Expertise
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light text-black dark:text-white">
                Skills & Technologies
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {skillCategories.map((category, catIndex) => (
              <ScrollReveal key={category.key} delay={catIndex * 0.1}>
                <div className="bg-white dark:bg-black p-6 lg:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-lg">
                      <category.icon className="w-5 h-5 text-black dark:text-white" />
                    </div>
                    <h3 className="text-xl font-light text-black dark:text-white">
                      {category.label}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {skills[category.key].map((skill, index) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-neutral-600 dark:text-neutral-400 font-light">
                            {skill.name}
                          </span>
                          <span className="text-sm text-neutral-400 dark:text-neutral-500 font-light">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                          <div
                            className={`skill-bar-fill h-full bg-gradient-to-r ${category.color} rounded-full`}
                            data-level={skill.level}
                            style={{ width: 0 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Cloud */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black dark:text-white">
                Tech Stack
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 rounded-full text-sm font-light cursor-default hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-sm font-light text-neutral-500 dark:text-neutral-400 tracking-wider uppercase">
                Beyond Code
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-light text-black dark:text-white">
                Fun Facts
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funFacts.map((fact, index) => {
              const Icon = funFactIcons[index % funFactIcons.length];
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 bg-white dark:bg-black rounded-xl border border-neutral-200 dark:border-neutral-800 group"
                  >
                    <Icon className="w-6 h-6 text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors mb-4" />
                    <p className="text-neutral-600 dark:text-neutral-400 font-light">
                      {fact}
                    </p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
