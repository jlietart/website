import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Zap,
  Bug,
  TrendingUp,
  DollarSign,
  Users,
  Laptop,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";
import { AuditItem } from "@/app/types";

const iconComponents = {
  Zap,
  Bug,
  TrendingUp,
  DollarSign,
  Users,
  Laptop,
  Search,
};

interface AuditAccordionProps {
  auditData: AuditItem[];
}

const AuditAccordion: React.FC<AuditAccordionProps> = ({ auditData }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {auditData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <AccordionItem value={`item-${index}`}>
            <AccordionTrigger className="text-lg font-medium text-gray-300">
              {React.createElement(
                iconComponents[item.icon as keyof typeof iconComponents],
                {
                  className: "inline mr-2",
                }
              )}
              {item.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="mb-4">
                <h4 className="text-blue-400 mb-2">Problem:</h4>
                <p className="text-gray-300">{item.problem}</p>
              </div>
              <div className="mb-4">
                <h4 className="text-blue-400 mb-2">Solution:</h4>
                <p className="text-gray-300">{item.solution}</p>
              </div>
              <div>
                <h4 className="text-blue-400 mb-2">Impact:</h4>
                <p className="text-gray-300">{item.impact}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  );
};

export default AuditAccordion;
