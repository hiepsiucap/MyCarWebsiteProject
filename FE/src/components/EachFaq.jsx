import React, { useState } from "react";
import { motion , AnimatePresence} from "framer-motion";
const EachFaq = ({ f }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <motion.div  transition={{ delay: 0.1, duration: 0.2 }}  className="border shadow-sm border-primary rounded-md p-3 w-2/3 mx-auto">
        <div className="flex justify-between items-center pb-2 cursor: pointer" onClick={() => setOpen(!isOpen)}>
          <h5 className="font-manrope font-bold text-xl">{f.title}</h5>
          <button onClick={() => setOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#04ABFF"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
        <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }}
           layout 
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ delay: 0.1, duration: 0.2 }} className="text-sm font-manrope text-gray-600 text-start leading-relaxed" dangerouslySetInnerHTML={{ __html: f.description }} />
        )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default EachFaq;
