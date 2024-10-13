import React, { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LucideIcon } from "lucide-react";

interface SectionProps {
  id: string;
  title: string;
  Icon: LucideIcon;
  description?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  Icon,
  description,
  children,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id={id} className="my-12 md:my-24 w-full" ref={ref}>
      <motion.h2
        className="text-4xl text-center font-bold mb-12 flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-8 h-8 text-blue-400" />
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h2>
      {description && (
        <motion.div
          className="text-lg mb-6 text-center text-gray-300"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {description}
        </motion.div>
      )}
      {children}
    </section>
  );
};

export default Section;
