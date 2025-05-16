import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileDownIcon, FileTextIcon, XIcon } from 'lucide-react';
import PropTypes from 'prop-types';

const ResumeButton = ({ className = '', showPreview = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPdfPreview, setShowPdfPreview] = useState(false);

  // Replace this with your actual resume URL
  const resumeUrl = '/resume.pdf';

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Aditya_Dhikale_Resume.pdf');
    
    // Append to the document
    document.body.appendChild(link);
    
    // Trigger the download
    link.click();
    
    // Clean up
    document.body.removeChild(link);
  };

  const handlePreviewClick = (e) => {
    e.preventDefault();
    setShowPdfPreview(true);
  };

  return (
    <>
      <motion.div
        className={`relative ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.button
          onClick={handleDownload}
          className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 inline-flex items-center shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: isHovered ? [0, -10, 10, -10, 0] : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mr-2"
          >
            <FileDownIcon className="w-5 h-5" />
          </motion.span>
          Download Resume
        </motion.button>
        
        {showPreview && (
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute mt-2 right-0 z-10"
              >
                <button
                  onClick={handlePreviewClick}
                  className="text-xs px-3 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded shadow border border-slate-200 dark:border-slate-700 inline-flex items-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <FileTextIcon className="w-3 h-3 mr-1" />
                  Preview PDF
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </motion.div>

      {/* PDF Preview Modal */}
      <AnimatePresence>
        {showPdfPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={() => setShowPdfPreview(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white dark:bg-slate-800 rounded-lg shadow-xl w-full max-w-4xl h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-3 right-3 z-10">
                <button
                  onClick={() => setShowPdfPreview(false)}
                  className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                >
                  <XIcon className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex flex-col h-full">
                <div className="p-4 border-b border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Resume Preview</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Click outside or the X button to close. 
                    <a
                      href={resumeUrl}
                      download="Aditya_Dhikale_Resume.pdf"
                      className="ml-2 text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      Download
                    </a>
                  </p>
                </div>
                
                <div className="flex-1 bg-slate-200 dark:bg-slate-900 p-2 overflow-auto">
                  <iframe
                    src={`${resumeUrl}#toolbar=0&navpanes=0`}
                    className="w-full h-full rounded border border-slate-300 dark:border-slate-700"
                    title="Resume Preview"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

ResumeButton.propTypes = {
  className: PropTypes.string,
  showPreview: PropTypes.bool,
};

export default ResumeButton;

