import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Award, GraduationCap, Briefcase, Star, ExternalLink } from 'lucide-react';
import { personalInfo, skills, certifications, achievements, experiences } from '../data/mock';
import { Button } from '../components/ui/button';
import ScrollReveal from '../components/animations/ScrollReveal';

const Resume = () => {
  const education = experiences.filter((exp) => exp.type === 'education');
  const work = experiences.filter((exp) => exp.type === 'experience');

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <div className="max-w-2xl">
              <ScrollReveal>
                <span className="text-sm font-light text-neutral-500 dark:text-neutral-400 tracking-wider uppercase">
                  My Resume
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light text-black dark:text-white leading-tight">
                  Professional
                  <br />
                  <span className="font-normal">Background</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400 font-light">
                  A comprehensive overview of my education, skills, certifications, and achievements.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.3}>
              <a href={personalInfo.resumeUrl} download>
                <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-full px-8 py-6 text-base font-light">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Education & Experience */}
            <div className="lg:col-span-2 space-y-12">
              {/* Education */}
              <div>
                <ScrollReveal>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-lg">
                      <GraduationCap className="w-5 h-5 text-black dark:text-white" />
                    </div>
                    <h2 className="text-2xl font-light text-black dark:text-white">
                      Education
                    </h2>
                  </div>
                </ScrollReveal>

                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <ScrollReveal key={edu.id} delay={index * 0.1}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="p-6 bg-neutral-50 dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-800"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-light text-black dark:text-white">
                              {edu.title}
                            </h3>
                            <p className="text-neutral-500 font-light">
                              {edu.organization}
                            </p>
                          </div>
                          <span className="text-sm text-neutral-400 font-light">
                            {edu.duration}
                          </span>
                        </div>
                        <p className="mt-3 text-sm text-neutral-500 font-light">
                          {edu.description}
                        </p>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <ScrollReveal>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-lg">
                      <Briefcase className="w-5 h-5 text-black dark:text-white" />
                    </div>
                    <h2 className="text-2xl font-light text-black dark:text-white">
                      Work Experience
                    </h2>
                  </div>
                </ScrollReveal>

                <div className="space-y-4">
                  {work.map((exp, index) => (
                    <ScrollReveal key={exp.id} delay={index * 0.1}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="p-6 bg-neutral-50 dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-800"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-light text-black dark:text-white">
                              {exp.title}
                            </h3>
                            <p className="text-neutral-500 font-light">
                              {exp.organization}
                            </p>
                          </div>
                          <span className="text-sm text-neutral-400 font-light">
                            {exp.duration}
                          </span>
                        </div>
                        <p className="mt-3 text-sm text-neutral-500 font-light">
                          {exp.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 text-xs font-light text-neutral-500 bg-neutral-100 dark:bg-neutral-900 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* Skills Section */}
              <div>
                <ScrollReveal>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-lg">
                      <Star className="w-5 h-5 text-black dark:text-white" />
                    </div>
                    <h2 className="text-2xl font-light text-black dark:text-white">
                      Skills
                    </h2>
                  </div>
                </ScrollReveal>

                <div className="grid sm:grid-cols-2 gap-6">
                  {Object.entries(skills).map(([category, skillList], catIndex) => (
                    <ScrollReveal key={category} delay={catIndex * 0.1}>
                      <div className="p-6 bg-neutral-50 dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                        <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">
                          {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {skillList.map((skill) => (
                            <span
                              key={skill.name}
                              className="px-3 py-1 text-sm font-light text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 rounded-full"
                            >
                              {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Certifications & Achievements */}
            <div className="space-y-8">
              {/* Certifications */}
              <div>
                <ScrollReveal>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-lg">
                      <Award className="w-5 h-5 text-black dark:text-white" />
                    </div>
                    <h2 className="text-xl font-light text-black dark:text-white">
                      Certifications
                    </h2>
                  </div>
                </ScrollReveal>

                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <ScrollReveal key={cert.id} delay={index * 0.1}>
                      <motion.a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        className="block p-4 bg-neutral-50 dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 group"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-sm font-light text-black dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                              {cert.title}
                            </h3>
                            <p className="text-xs text-neutral-500 font-light mt-1">
                              {cert.issuer} • {cert.date}
                            </p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </motion.a>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <ScrollReveal>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-lg">
                      <FileText className="w-5 h-5 text-black dark:text-white" />
                    </div>
                    <h2 className="text-xl font-light text-black dark:text-white">
                      Achievements
                    </h2>
                  </div>
                </ScrollReveal>

                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <ScrollReveal key={index} delay={index * 0.1}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-3 p-4 bg-neutral-50 dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white mt-2 flex-shrink-0" />
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light">
                          {achievement}
                        </p>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <ScrollReveal>
                <div className="p-6 bg-black dark:bg-white rounded-2xl text-white dark:text-black">
                  <h3 className="text-lg font-light">Interested?</h3>
                  <p className="mt-2 text-sm font-light opacity-80">
                    Let's discuss how I can contribute to your team.
                  </p>
                  <a href={`mailto:${personalInfo.email}`}>
                    <Button
                      variant="outline"
                      className="mt-4 w-full border-white dark:border-black text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white rounded-full"
                    >
                      Get in Touch
                    </Button>
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
