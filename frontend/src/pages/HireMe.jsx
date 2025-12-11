import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle, Loader2, Building2, FileText, Calendar, Shield, Upload } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import ScrollReveal from '../components/animations/ScrollReveal';

const HireMe = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    companyWebsite: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    projectSummary: '',
    preferredTimeline: '',
    budgetRange: '',
    ndaAgreed: false,
    additionalNotes: '',
  });

  const totalSteps = 3;

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
    const submissions = JSON.parse(localStorage.getItem('hireRequests') || '[]');
    submissions.push({
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('hireRequests', JSON.stringify(submissions));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.companyName !== '' && formData.contactName !== '' && formData.contactEmail !== '';
      case 2:
        return formData.projectSummary.length >= 20;
      case 3:
        return formData.ndaAgreed;
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
            Request Received!
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 font-light">
            Thank you for your interest in working together. I'll review your request 
            and respond within 24-48 hours with next steps.
          </p>
          <Button
            onClick={() => {
              setIsSuccess(false);
              setStep(1);
              setFormData({
                companyName: '',
                companyWebsite: '',
                contactName: '',
                contactEmail: '',
                contactPhone: '',
                projectSummary: '',
                preferredTimeline: '',
                budgetRange: '',
                ndaAgreed: false,
                additionalNotes: '',
              });
            }}
            className="mt-8 bg-black dark:bg-white text-white dark:text-black rounded-full px-8"
          >
            Submit Another Request
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
                <Building2 className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                <span className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                  For Businesses & Teams
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-black dark:text-white leading-tight">
                Ready to
                <br />
                <span className="font-normal">work together?</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400 font-light">
                Looking for a dedicated developer for your team or project? 
                Let's discuss how I can contribute to your success.
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
              {['Company Info', 'Project Details', 'Agreement'].map((label, idx) => (
                <div
                  key={idx}
                  className={`text-sm font-light ${
                    idx + 1 <= step ? 'text-black dark:text-white' : 'text-neutral-400'
                  }`}
                >
                  {label}
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
                      <Building2 className="w-5 h-5 text-black dark:text-white" />
                    </div>
                    <h2 className="text-2xl font-light text-black dark:text-white">
                      Company Information
                    </h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                        Company Name *
                      </Label>
                      <Input
                        value={formData.companyName}
                        onChange={(e) => handleChange('companyName', e.target.value)}
                        placeholder="Acme Inc."
                        required
                        className="h-12 bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                        Company Website
                      </Label>
                      <Input
                        value={formData.companyWebsite}
                        onChange={(e) => handleChange('companyWebsite', e.target.value)}
                        placeholder="https://acme.com"
                        className="h-12 bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                      Contact Name *
                    </Label>
                    <Input
                      value={formData.contactName}
                      onChange={(e) => handleChange('contactName', e.target.value)}
                      placeholder="John Smith"
                      required
                      className="h-12 bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 rounded-xl"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                        Email Address *
                      </Label>
                      <Input
                        type="email"
                        value={formData.contactEmail}
                        onChange={(e) => handleChange('contactEmail', e.target.value)}
                        placeholder="john@acme.com"
                        required
                        className="h-12 bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                        Phone Number
                      </Label>
                      <Input
                        value={formData.contactPhone}
                        onChange={(e) => handleChange('contactPhone', e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        className="h-12 bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 rounded-xl"
                      />
                    </div>
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
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-lg">
                      <FileText className="w-5 h-5 text-black dark:text-white" />
                    </div>
                    <h2 className="text-2xl font-light text-black dark:text-white">
                      Project Details
                    </h2>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                      Project Summary *
                    </Label>
                    <Textarea
                      value={formData.projectSummary}
                      onChange={(e) => handleChange('projectSummary', e.target.value)}
                      placeholder="Describe the project, role you're looking to fill, and key requirements..."
                      rows={6}
                      className="bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 rounded-xl resize-none"
                    />
                    <p className="text-xs text-neutral-400 font-light">
                      {formData.projectSummary.length}/1000 characters (minimum 20)
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                        Preferred Timeline
                      </Label>
                      <Input
                        value={formData.preferredTimeline}
                        onChange={(e) => handleChange('preferredTimeline', e.target.value)}
                        placeholder="e.g., 3 months, Ongoing"
                        className="h-12 bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                        Budget Range
                      </Label>
                      <Input
                        value={formData.budgetRange}
                        onChange={(e) => handleChange('budgetRange', e.target.value)}
                        placeholder="e.g., $5k-$10k/month"
                        className="h-12 bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-light text-neutral-600 dark:text-neutral-400">
                      Additional Notes
                    </Label>
                    <Textarea
                      value={formData.additionalNotes}
                      onChange={(e) => handleChange('additionalNotes', e.target.value)}
                      placeholder="Any other information you'd like to share..."
                      rows={3}
                      className="bg-neutral-50 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 rounded-xl resize-none"
                    />
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
                      <Shield className="w-5 h-5 text-black dark:text-white" />
                    </div>
                    <h2 className="text-2xl font-light text-black dark:text-white">
                      Agreement
                    </h2>
                  </div>

                  <div className="p-6 bg-neutral-50 dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                    <h3 className="font-light text-black dark:text-white mb-4">
                      Non-Disclosure Agreement
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                      By checking the box below, you acknowledge that any proprietary information, 
                      business strategies, or confidential details shared during our discussions 
                      will be treated with strict confidentiality. I commit to not disclosing, 
                      sharing, or using such information for any purpose other than evaluating 
                      the potential collaboration.
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="nda"
                      checked={formData.ndaAgreed}
                      onCheckedChange={(checked) => handleChange('ndaAgreed', checked)}
                      className="mt-1"
                    />
                    <label
                      htmlFor="nda"
                      className="text-sm text-neutral-600 dark:text-neutral-400 font-light cursor-pointer"
                    >
                      I agree to the Non-Disclosure Agreement and understand that all shared 
                      information will be kept confidential. *
                    </label>
                  </div>

                  {/* Summary */}
                  <div className="mt-8 p-6 bg-neutral-100 dark:bg-neutral-900 rounded-2xl">
                    <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">
                      Summary
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-neutral-500 font-light">Company</span>
                        <span className="text-black dark:text-white font-light">{formData.companyName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500 font-light">Contact</span>
                        <span className="text-black dark:text-white font-light">{formData.contactName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500 font-light">Email</span>
                        <span className="text-black dark:text-white font-light">{formData.contactEmail}</span>
                      </div>
                    </div>
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
                      Submit Request
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

export default HireMe;
