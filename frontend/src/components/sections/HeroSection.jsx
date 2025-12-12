import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import {
  ArrowDown,
  Github,
  Linkedin,
  Instagram,
  Download,
  Sparkles,
  Rocket,
  Code2,
  Palette,
  Terminal,
  Atom,
} from 'lucide-react';
import { personalInfo, socialLinks, stats } from '../../data/mock';
import { Button } from '../ui/button';
import AnimatedText from '../animations/AnimatedText';
import RotatingBorder from '../animations/RotatingBorder';
import StatCounter from '../animations/StatCounter';

const HeroSection = () => {
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const floatingBadges = [
    { label: 'Open to Work', icon: Rocket, position: '-top-7 left-1/2 -translate-x-1/2' },
    { label: 'HTML & CSS', icon: Palette, position: 'top-8 -right-10' },
    { label: 'JavaScript', icon: Code2, position: 'bottom-10 -right-6' },
    { label: 'React', icon: Atom, position: 'top-8 -left-10' },
    { label: 'Problem Solver', icon: Terminal, position: 'bottom-6 left-1/2 -translate-x-1/2' },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({
        x: (clientX / window.innerWidth - 0.5) * 20,
        y: (clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // GSAP scroll indicator animation
    gsap.to('.scroll-indicator', {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }, []);

  const socialIcons = [
    { icon: Github, link: socialLinks.github, label: 'GitHub' },
    { icon: Linkedin, link: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Instagram, link: socialLinks.instagram, label: 'Instagram' },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white dark:bg-black"
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: mousePosition.x, y: mousePosition.y }}
          transition={{ type: 'spring', stiffness: 50, damping: 30 }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-neutral-100 dark:bg-neutral-900 rounded-full blur-3xl opacity-50"
        />
        <motion.div
          animate={{ x: -mousePosition.x, y: -mousePosition.y }}
          transition={{ type: 'spring', stiffness: 50, damping: 30 }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-neutral-200 dark:bg-neutral-800 rounded-full blur-3xl opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <Sparkles className="w-5 h-5 text-neutral-400" />
              <span className="text-sm font-light text-neutral-500 dark:text-neutral-400 tracking-wider uppercase">
                Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-black dark:text-white">
              <AnimatedText text="Hi, I'm" delay={0.2} />
              <br />
              <span className="font-normal glare-text">
                <AnimatedText text={personalInfo.name.split(' ').slice(0, 2).join(' ')} delay={0.4} />
              </span>
            </h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-light"
            >
              {personalInfo.role} <span className="text-neutral-400 dark:text-neutral-600">•</span> {personalInfo.tagline}
            </motion.p>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-4 text-neutral-500 dark:text-neutral-500 font-light max-w-lg leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link to="/hire-me">
                <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-full px-8 py-6 text-base font-light transition-all duration-300">
                  Hire Me
                </Button>
              </Link>
              <a href="/shashh_resume.pdf" download>
                <Button
                  variant="outline"
                  className="border-neutral-300 dark:border-neutral-700 text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-full px-8 py-6 text-base font-light transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  <span className="glare-text">Download Resume</span>
                </Button>
              </a>
              <Link to="/projects">
                <Button
                  variant="ghost"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white rounded-full px-8 py-6 text-base font-light"
                >
                  View Projects
                </Button>
              </Link>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-10 flex items-center gap-4"
            >
              <span className="text-sm text-neutral-400 font-light">Follow me</span>
              <div className="w-12 h-px bg-neutral-300 dark:bg-neutral-700" />
              <div className="flex items-center gap-3">
                {socialIcons.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <RotatingBorder className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <img
                  src="/shashank_img.png"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </RotatingBorder>

              {floatingBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [-6, 6, -6] }}
                  transition={{
                    duration: 3.2,
                    delay: 0.15 * index,
                    repeat: Infinity,
                    repeatType: 'mirror',
                  }}
                  className={`absolute ${badge.position} z-20`}
                >
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-black/80 text-xs font-medium text-black dark:text-white shadow-sm border border-neutral-200 dark:border-neutral-800 backdrop-blur">
                    <badge.icon className="w-4 h-4" />
                    <span>{badge.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-20 lg:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="scroll-indicator flex flex-col items-center gap-2">
          <span className="text-xs text-neutral-400 font-light tracking-wider">SCROLL</span>
          <ArrowDown className="w-4 h-4 text-neutral-400" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
