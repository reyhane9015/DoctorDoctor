'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import * as React from 'react';


interface TextAnimationProps {
  text: string;
}

const TextAnimation: React.FC<TextAnimationProps> = ({text}) => {

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <AnimatePresence>
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, x: -18 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          exit="hidden"
          transition={{ duration: 0.5 }}
          className="uppercase text-secondery-default font-semibold text-2xl pb-4"
        >
          {text}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
  
}


export default TextAnimation;
