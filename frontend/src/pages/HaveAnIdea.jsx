import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle, Loader2, Sparkles, Calendar, DollarSign, Clock, FileText } from 'lucide-react';
import { projectTypes, budgetRanges, timelines } from '../data/mock';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import ScrollReveal from '../components/animations/ScrollReveal';

const HaveAnIdea = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    name: '',
    email: '',
    company: '',
    preferredDate: '',
  });

  const totalSteps = 4;

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Store in localStorage (mock)
    const submissions = JSON.parse(localStorage.getItem('projectIdeas') || '[]');
    submissions.push({
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('projectIdeas', JSON.stringify(submissions));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.projectType !== '';
      case 2:
        return formData.budget !== '' && formData.timeline !== '';
      case 3:
        return formData.description.length >= 20;
      case 4:
        return formData.name !== '' && formData.email !== '';
      default:
        return false;
    }
  };

  const stepVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 bg-black dark:bg-white rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-10 h-10 text-white dark:text-black" />
          </motion.div>
          <h2 className="text-3xl font-light text-black dark:text-white">
            Thank You!
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 font-light">
            Your project idea has been submitted successfully. I'll review the details 
            and get back to you within 24-48 hours.
          </p>
          <Button
            onClick={() => {
              setIsSuccess(false);
              setStep(1);
              setFormData({
                projectType: '',
                budget: '',
                timeline: '',
                description: '',
                name: '',
                email: '',
                company: '',
                preferredDate: '',
              });
            }}
            className="mt-8 bg-black dark:bg-white text-white dark:text-black rounded-full px-8"
          >
            Submit Another Idea
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-900 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                <span className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                  Let's Build Something Amazing
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-black dark:text-white leading-tight">
                Have an idea?
                <br />
                <span className="font-normal">Let's make it real</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400 font-light">
                Tell me about your project and I'll help bring your vision to life.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`text-sm font-light ${
                    s <= step ? 'text-black dark:text-white' : 'text-neutral-400'
                  }`}
                >
                  Step {s}
                </div>
              ))}
            </div>
            <div className="h-1 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${(step / totalSteps) * 100}%` }}
                className="h-full bg-black dark:bg-white rounded-full"
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Form Steps */}
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-lg">
                      <FileText className="w-5 h-5 text-black dark:text-white" />
                    </div>
                    <h2 className="text-2xl font-light text-black dark:text-white">
                      Project Type
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {projectTypes.map((type) => (
                      <motion.button
                        key={type.value}
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleChange('projectType', type.value)}
                        className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                          formData.projectType === type.value
                            ? 'border-black dark:border-white bg-black dark:bg-white text-white dark:text-black'
                            : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600'
                        }`}
                      >
                        <span className="text-sm font-light">{type.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-8"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-lg">
                        <DollarSign className="w-5 h-5 text-black dark:text-white" />
                      </div>
                      <h2 className="text-2xl font-light text-black dark:text-white">
                        Budget Range
                      </h2>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {budgetRanges.map((range) => (
                        <motion.button
                          key={range.value}
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleChange('budget', range.value)}
                          className={`p-3 rounded-xl border text-sm font-light transition-all duration-300 ${
                            formData.budget === range.value
                              ? 'border-black dark:border-white bg-black dark:bg-white text-white dark:text-black'
                              : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600'
                          }`}
                        >
                          {range.label}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-lg">
                        <Clock className="w-5 h-5 text-black dark:text-white" />
                      </div>
                      <h2 className="text-2xl font-light text-black dark:text-white">
                        Timeline
                      </h2>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {timelines.map((time) => (
                        <motion.button
                          key={time.value}
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleChange('timeline', time.value)}
                          className={`p-3 rounded-xl border text-sm font-light transition-all duration-300 ${
                            formData.timeline === time.value
                              ? 'border-black dark:border-white bg-black dark:bg-white text-white dark:text-black'
                              : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600'
                          }`}
                        >
                          {time.label}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-lg">
                      <FileText className="w-5 h-5 text-black dark:text-white" />
                    </div>
                    <h2 className="text-2xl font-light text-black dark:text-white">
                      Project Description
                    </h2>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                      Tell me about your project
                    </Label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => handleChange('description', e.target.value)}
                      placeholder="Describe your project idea, goals, and any specific requirements..."
                      rows={8}
                      className="bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-black dark:focus:ring-white resize-none"
                    />
                    <p className="text-xs text-neutral-400 font-light">
                      {formData.description.length}/500 characters (minimum 20)
                    </p>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-lg">
                      <Calendar className="w-5 h-5 text-black dark:text-white" />
                    </div>
                    <h2 className="text-2xl font-light text-black dark:text-white">
                      Contact Details
                    </h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                        Your Name *
                      </Label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="John Doe"
                        required
                        className="h-12 bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                        Email Address *
                      </Label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="john@example.com"
                        required
                        className="h-12 bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                      Company (Optional)
                    </Label>
                    <Input
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      placeholder="Your Company Name"
                      className="h-12 bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                      Preferred Call Date (Optional)
                    </Label>
                    <Input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleChange('preferredDate', e.target.value)}
                      className="h-12 bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 rounded-xl"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              <Button
                type="button"
                variant="ghost"
                onClick={prevStep}
                disabled={step === 1}
                className="text-neutral-500 hover:text-black dark:hover:text-white rounded-full disabled:opacity-0"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>

              {step < totalSteps ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="bg-black dark:bg-white text-white dark:text-black rounded-full px-8 disabled:opacity-50"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={!isStepValid() || isSubmitting}
                  className="bg-black dark:bg-white text-white dark:text-black rounded-full px-8 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HaveAnIdea;
