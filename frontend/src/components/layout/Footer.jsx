import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import { personalInfo, socialLinks, navLinks } from '../../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: Github, link: socialLinks.github, label: 'GitHub' },
    { icon: Linkedin, link: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Instagram, link: socialLinks.instagram, label: 'Instagram' },
    { icon: Twitter, link: socialLinks.twitter, label: 'Twitter' },
  ];

  return (
    <footer className="bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-5">
              <Link to="/" className="inline-block">
                <h3 className="text-2xl font-light tracking-tight">
                  <span className="text-black dark:text-white">Sai</span>
                  <span className="text-neutral-400 dark:text-neutral-500">Shashank</span>
                </h3>
              </Link>
              <p className="mt-4 text-neutral-600 dark:text-neutral-400 font-light leading-relaxed max-w-sm">
                {personalInfo.shortBio}
              </p>
              <div className="mt-6 flex items-center gap-4">
                {socialIcons.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-medium text-black dark:text-white uppercase tracking-wider mb-4">
                Navigation
              </h4>
              <ul className="space-y-3">
                {navLinks.slice(0, 5).map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white font-light transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-medium text-black dark:text-white uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/resume"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white font-light transition-colors"
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white font-light transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/have-an-idea"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white font-light transition-colors"
                  >
                    Have an Idea
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hire-me"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white font-light transition-colors"
                  >
                    Hire Me
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact CTA */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-medium text-black dark:text-white uppercase tracking-wider mb-4">
                Get in Touch
              </h4>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white font-light transition-colors group"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500 dark:text-neutral-500 font-light">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-sm text-neutral-400 dark:text-neutral-600 font-light">
              Built with passion and precision
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
