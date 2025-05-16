import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  EnvelopeIcon,
  PhoneIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './shared/SocialIcons';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // null, 'success', 'error'
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setFormStatus(null);
    
    // Simulate API call delay
    try {
      // In a real app, you would call your API endpoint here
      // await axios.post('/api/contact', data);
      console.log('Form data submitted:', data);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Clear form and show success message
      reset();
      setFormStatus('success');
      setTimeout(() => setFormStatus(null), 5000); // Clear success message after 5 seconds
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 10,
      },
    },
  };
  
  // Contact info
  const contactInfo = [
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: 'Email',
      value: 'adityadhikale2003@gmail.com',
      link: 'mailto:adityadhikale2003@gmail.com',
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: 'Phone',
      value: '+91 7620335644',
      link: 'tel:+917620335644',
    },
  ];
  
  // Social links
  const socialLinks = [
    {
      icon: <GithubIcon className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/adityadhikale',
    },
    {
      icon: <LinkedinIcon className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aditya-dhikale-674643288', // Replace with actual LinkedIn URL
    },
    {
      icon: <TwitterIcon className="w-6 h-6" />,
      name: 'Twitter',
      url: 'https://x.com/adityadhikale03', // Replace with actual Twitter URL
    },
  ];

  return (
    <section id="contact" className="container-section bg-slate-50 dark:bg-slate-900">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Information */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            Let's Get in Touch
          </motion.h3>
          
          <motion.p
            variants={itemVariants}
            className="text-slate-600 dark:text-slate-300 mb-8"
          >
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </motion.p>
          
          {/* Contact Details */}
          <div className="space-y-6 mb-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start"
              >
                <div className="flex-shrink-0 p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mr-4">
                  <span className="text-indigo-600 dark:text-indigo-400">
                    {info.icon}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {info.title}
                  </h4>
                  <a
                    href={info.link}
                    className="text-lg font-medium text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {info.value}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
              Connect with me
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-slate-800 rounded-full text-slate-700 hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700 hover:border-indigo-600 dark:hover:border-indigo-400 transition-colors shadow-sm hover:shadow"
                  aria-label={social.name}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 md:p-8">
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-6 text-slate-900 dark:text-white"
            >
              Send me a Message
            </motion.h3>
            
            {/* Form Status Messages */}
            <AnimatePresence>
              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/30 rounded-md text-green-800 dark:text-green-200 flex items-center"
                >
                  <CheckCircleIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                  <p>Thank you! Your message has been sent successfully.</p>
                </motion.div>
              )}
              
              {formStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/30 rounded-md text-red-800 dark:text-red-200 flex items-center"
                >
                  <ExclamationCircleIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                  <p>Oops! Something went wrong. Please try again later.</p>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Contact Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Input */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-2 rounded-md border ${
                    errors.name
                      ? 'border-red-500 dark:border-red-400 focus:ring-red-500 focus:border-red-500'
                      : 'border-slate-300 dark:border-slate-600 focus:ring-indigo-500 focus:border-indigo-500'
                  } bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors`}
                  placeholder="Your name"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </motion.div>
              
              {/* Email Input */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-2 rounded-md border ${
                    errors.email
                      ? 'border-red-500 dark:border-red-400 focus:ring-red-500 focus:border-red-500'
                      : 'border-slate-300 dark:border-slate-600 focus:ring-indigo-500 focus:border-indigo-500'
                  } bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors`}
                  placeholder="Your email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </motion.div>
              
              {/* Subject Input */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className={`w-full px-4 py-2 rounded-md border ${
                    errors.subject
                      ? 'border-red-500 dark:border-red-400 focus:ring-red-500 focus:border-red-500'
                      : 'border-slate-300 dark:border-slate-600 focus:ring-indigo-500 focus:border-indigo-500'
                  } bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors`}
                  placeholder="Subject of your message"
                  {...register('subject', { required: 'Subject is required' })}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.subject.message}
                  </p>
                )}
              </motion.div>
              
              {/* Message Textarea */}
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className={`w-full px-4 py-2 rounded-md border ${
                    errors.message
                      ? 'border-red-500 dark:border-red-400 focus:ring-red-500 focus:border-red-500'
                      : 'border-slate-300 dark:border-slate-600 focus:ring-indigo-500 focus:border-indigo-500'
                  } bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors resize-none`}
                  placeholder="Your message"
                  {...register('message', {
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message should be at least 10 characters',
                    },
                  })}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </motion.div>
              
              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
