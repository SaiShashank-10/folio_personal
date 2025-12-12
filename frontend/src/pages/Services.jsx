import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Layers, Palette, Brain, MessageSquare, ArrowRight, Check } from 'lucide-react';
import { services } from '../data/mock';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import ScrollReveal from '../components/animations/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  Globe,
  Layers,
  Palette,
  Brain,
  MessageSquare,
};

const Services = () => {
  const servicesRef = useRef(null);

  useEffect(() => {
    // Horizontal scroll animation for service panels
    const panels = document.querySelectorAll('.service-panel');
    
    panels.forEach((panel, index) => {
      gsap.fromTo(
        panel,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: panel,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="text-sm font-light text-neutral-500 dark:text-neutral-400 tracking-wider uppercase">
                What I Offer
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light text-black dark:text-white leading-tight">
                Services that deliver
                <br />
                <span className="font-normal">real results</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                From concept to deployment, I provide end-to-end solutions that help businesses 
                and individuals achieve their digital goals. Each project is crafted with 
                attention to detail and a focus on user experience.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  className="service-panel"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center p-8 lg:p-12 bg-neutral-50 dark:bg-neutral-950 rounded-3xl border border-neutral-200 dark:border-neutral-800 ${
                      isEven ? '' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-white dark:bg-black rounded-xl border border-neutral-200 dark:border-neutral-800">
                          <Icon className="w-6 h-6 text-black dark:text-white" />
                        </div>
                        <span className="text-sm text-neutral-400 font-light">
                          0{service.id}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-black dark:text-white">
                        {service.title}
                      </h3>

                      <p className="mt-4 text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mt-8 grid grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2"
                          >
                            <Check className="w-4 h-4 text-neutral-400" />
                            <span className="text-sm text-neutral-500 dark:text-neutral-400 font-light">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Visual Element */}
                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                        {/* Animated background */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gradient-radial from-neutral-200/50 dark:from-neutral-700/30 to-transparent" />
                        </div>
                        
                        {/* Icon */}
                        <Icon className="w-24 h-24 text-neutral-300 dark:text-neutral-700 group-hover:text-black dark:group-hover:text-white transition-colors duration-500" />
                        {/* <img src= "/image1.png" alt= "Web Dev" className="w-full h-full object-cover" /> */}
                        
                        {/* Service number */}
                        <div className="absolute bottom-4 right-4">
                          <span className="text-8xl font-light text-neutral-200 dark:text-neutral-800">
                            0{service.id}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-neutral-50 dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black dark:text-white">
                Ready to start your project?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-neutral-600 dark:text-neutral-400 font-light">
                Let's discuss how I can help bring your vision to life. 
                Whether it's a new project or an existing one that needs improvement.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/have-an-idea">
                  <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-full px-8 py-6 text-base font-light">
                    Start a Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="border-neutral-300 dark:border-neutral-700 text-black dark:text-white rounded-full px-8 py-6 text-base font-light"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
