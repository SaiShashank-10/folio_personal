import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, User, Mail, MessageSquare, FileText, Loader2 } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/mock';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import ScrollReveal from '../components/animations/ScrollReveal';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Simulating API call - will be replaced with actual backend
    try {
      // Mock submission delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Store in localStorage for now (mock)
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...formData,
        id: Date.now(),
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialIcons = [
    { icon: Github, link: socialLinks.github, label: 'GitHub' },
    { icon: Linkedin, link: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Instagram, link: socialLinks.instagram, label: 'Instagram' },
    { icon: Twitter, link: socialLinks.twitter, label: 'Twitter' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="text-sm font-light text-neutral-500 dark:text-neutral-400 tracking-wider uppercase">
                Get in Touch
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light text-black dark:text-white leading-tight">
                Let's start a
                <br />
                <span className="font-normal">conversation</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400 font-light">
                Have a project in mind or just want to say hello? I'd love to hear from you.
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                      Your Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="pl-12 h-12 bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-black dark:focus:ring-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="pl-12 h-12 bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-black dark:focus:ring-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                    Subject
                  </Label>
                  <div className="relative">
                    <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="pl-12 h-12 bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-black dark:focus:ring-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                    Message
                  </Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-neutral-400" />
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      rows={6}
                      className="pl-12 pt-4 bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-black dark:focus:ring-white resize-none"
                    />
                  </div>
                </div>

                {/* Status Message */}
                <AnimatePresence>
                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`flex items-center gap-2 p-4 rounded-xl ${
                        status.type === 'success'
                          ? 'bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400'
                          : 'bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400'
                      }`}
                    >
                      {status.type === 'success' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <span className="text-sm font-light">{status.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-full h-12 text-base font-light disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </ScrollReveal>

            {/* Contact Info */}
            <div className="space-y-8">
              <ScrollReveal delay={0.1}>
                <div className="p-8 bg-neutral-50 dark:bg-neutral-950 rounded-3xl border border-neutral-200 dark:border-neutral-800">
                  <h3 className="text-xl font-light text-black dark:text-white mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-neutral-500 font-light">Email</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-black dark:text-white font-light hover:underline"
                      >
                        {personalInfo.email}
                      </a>
                    </div>

                    <div>
                      <p className="text-sm text-neutral-500 font-light">Phone</p>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-black dark:text-white font-light hover:underline"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>

                    <div>
                      <p className="text-sm text-neutral-500 font-light">Location</p>
                      <p className="text-black dark:text-white font-light">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="p-8 bg-neutral-50 dark:bg-neutral-950 rounded-3xl border border-neutral-200 dark:border-neutral-800">
                  <h3 className="text-xl font-light text-black dark:text-white mb-6">
                    Follow Me
                  </h3>

                  <div className="flex gap-4">
                    {socialIcons.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3, scale: 1.1 }}
                        className="p-3 bg-neutral-100 dark:bg-neutral-900 rounded-xl text-neutral-600 dark:text-neutral-400 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-300"
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="p-8 bg-black dark:bg-white rounded-3xl text-white dark:text-black">
                  <h3 className="text-xl font-light">Response Time</h3>
                  <p className="mt-3 text-sm font-light opacity-80">
                    I typically respond within 24-48 hours. For urgent matters, 
                    feel free to reach out on LinkedIn.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
