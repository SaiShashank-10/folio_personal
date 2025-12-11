import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, ExternalLink, ArrowLeft, ArrowRight, X } from 'lucide-react';
import { projects } from '../data/mock';
import { Button } from '../components/ui/button';
import ScrollReveal from '../components/animations/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const horizontalRef = useRef(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const filteredProjects = filter === 'featured' 
    ? featuredProjects 
    : projects;

  useEffect(() => {
    // Horizontal scroll animation for featured projects
    if (horizontalRef.current) {
      const section = horizontalRef.current;
      const scrollContainer = section.querySelector('.horizontal-scroll');
      
      if (scrollContainer && window.innerWidth >= 1024) {
        gsap.to(scrollContainer, {
          x: () => -(scrollContainer.scrollWidth - window.innerWidth + 200),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${scrollContainer.scrollWidth - window.innerWidth + 200}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <div className="max-w-2xl">
              <ScrollReveal>
                <span className="text-sm font-light text-neutral-500 dark:text-neutral-400 tracking-wider uppercase">
                  My Work
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light text-black dark:text-white leading-tight">
                  Selected
                  <br />
                  <span className="font-normal">Projects</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400 font-light">
                  A collection of projects that showcase my skills in web development, 
                  AI/ML, and creative problem-solving.
                </p>
              </ScrollReveal>
            </div>

            {/* Filter Tabs */}
            <ScrollReveal delay={0.3}>
              <div className="flex gap-2">
                {['all', 'featured'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setFilter(tab)}
                    className={`px-4 py-2 text-sm font-light rounded-full transition-all duration-300 ${
                      filter === tab
                        ? 'bg-black dark:bg-white text-white dark:text-black'
                        : 'text-neutral-500 hover:text-black dark:hover:text-white'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.1}>
                <motion.div
                  layoutId={`project-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Quick Actions */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 text-xs font-light bg-white dark:bg-black text-black dark:text-white rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="mt-6">
                    <h3 className="text-xl font-light text-black dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-neutral-500 dark:text-neutral-500 font-light line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-light text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-1 text-xs font-light text-neutral-400">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-black rounded-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 className="text-3xl font-light text-black dark:text-white">
                  {selectedProject.title}
                </h2>

                <p className="mt-4 text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Challenge, Approach, Solution */}
                <div className="mt-8 grid md:grid-cols-3 gap-6">
                  <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
                    <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">
                      Challenge
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
                    <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">
                      Approach
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light">
                      {selectedProject.approach}
                    </p>
                  </div>
                  <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
                    <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">
                      Solution
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-8">
                  <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-light text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="border-neutral-300 dark:border-neutral-700 text-black dark:text-white rounded-full"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </a>
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-black dark:bg-white text-white dark:text-black rounded-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
