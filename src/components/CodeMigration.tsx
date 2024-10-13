import React, { useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Search,
  Laptop,
  Code,
  TestTube,
  Rocket,
  Zap,
  GraduationCap,
  LineChart,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import Section from "./Section";

const CodeMigration = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const migrationSteps = [
    {
      icon: Search,
      title: "Analysis and Planning",
      description:
        "Evaluate existing code, define migration objectives, identify risks, and establish a realistic timeline.",
    },
    {
      icon: Laptop,
      title: "Environment Preparation",
      description:
        "Set up isolated development environment, configure versioning and CI tools, create automated tests for existing code.",
    },
    {
      icon: Code,
      title: "Progressive Migration",
      description:
        "Break the project into manageable phases, migrate module by module or feature by feature, use adaptation patterns for compatibility.",
    },
    {
      icon: TestTube,
      title: "Testing and Validation",
      description:
        "Run unit and integration tests, perform performance and load testing, verify compatibility with existing systems.",
    },
    {
      icon: Rocket,
      title: "Deployment and Monitoring",
      description:
        "Implement deployment strategy (e.g., blue-green deployment), closely monitor performance and errors, collect metrics to evaluate migration success.",
    },
    {
      icon: Zap,
      title: "Post-Migration Optimization",
      description:
        "Refactor code to fully leverage new architecture, optimize performance, update documentation.",
    },
    {
      icon: GraduationCap,
      title: "Training and Support",
      description:
        "Train the team on new technologies and practices, set up support to manage post-migration issues.",
    },
    {
      icon: LineChart,
      title: "Evaluation and Feedback",
      description:
        "Analyze migration results, identify lessons learned for future projects.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Section id="code-migration" title="Progressive Migration" Icon={Rocket}>
      <div ref={ref}>
        <motion.div
          className="text-lg mb-6 text-center text-gray-300"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className="font-semibold">Each migration</span> comes with its
          own <span className="text-blue-400">specific challenges</span>, but a{" "}
          <span className="italic">safe and efficient</span> code migration
          requires some <span className="underline">fundamental steps</span>:
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {migrationSteps.map((step, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="flex flex-col h-full bg-gray-900 border border-gray-700 hover:bg-gray-800 transition-colors duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-center text-xl font-bold flex items-center justify-center gap-2">
                    {React.createElement(step.icon, {
                      className: "w-6 h-6 text-blue-400",
                    })}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      {step.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 flex-grow px-6 py-4 text-center">
                  {step.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default CodeMigration;
