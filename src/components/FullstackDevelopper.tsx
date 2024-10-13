import React from "react";
import { Code, Server, GitBranch, Layers } from "lucide-react";
import Section from "./Section";

const FullstackDeveloper: React.FC = () => {
  return (
    <Section id="fullstack-developer" title="Fullstack Developer" Icon={Layers}>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {[
          {
            title: "Frontend Development",
            icon: <Code className="w-16 h-16 mb-4 text-blue-400" />,
            icons: [
              "typescript",
              "react",
              "tailwindcss",
              "html5",
              "css3",
              "redux",
              "jest",
              "materialui",
            ],
            content: (
              <>
                <p className="mb-2">
                  Over{" "}
                  <span className="font-semibold text-blue-400">
                    8 years of experience
                  </span>{" "}
                  in React, with expertise in Apollo Client, Tailwind CSS, and
                  Material UI.
                </p>
                <p className="mb-2">
                  Proficient in developing{" "}
                  <span className="italic">reusable components</span>,
                  implementing{" "}
                  <span className="underline">automated testing</span> with Jest
                  and React Testing Library, and optimizing performance for
                  responsive interfaces.
                </p>
                <p>
                  Skilled in state management with Redux and Context API, and
                  experienced in building{" "}
                  <span className="font-semibold text-blue-400">
                    progressive web apps (PWAs)
                  </span>{" "}
                  for enhanced user experience.
                </p>
              </>
            ),
          },
          {
            title: "Backend Development",
            icon: <Server className="w-16 h-16 mb-4 text-green-400" />,
            icons: [
              "nodejs",
              "nestjs",
              "python",
              "fastapi",
              "graphql",
              "mongodb",
              "docker",
            ],
            content: (
              <>
                <p className="mb-2">
                  Expertise in building{" "}
                  <span className="font-semibold text-green-400">
                    robust backends
                  </span>{" "}
                  with NestJS, FastAPI, and Apollo Federation.
                </p>
                <p className="mb-2">
                  Proficient in integrating services such as{" "}
                  <span className="italic">
                    Keycloak, OpenSearch, Camunda, and MongoDB
                  </span>{" "}
                  via GraphQL.
                </p>
                <p className="mb-2">
                  Advanced skills in Python for{" "}
                  <span className="underline">
                    data processing and machine learning integration
                  </span>
                  .
                </p>
                <p>
                  Experienced in containerization with Docker for cross-platform
                  deployments, and implementing{" "}
                  <span className="font-semibold text-green-400">
                    advanced security measures
                  </span>{" "}
                  including OAuth2 and JWT authentication.
                </p>
              </>
            ),
          },
          {
            title: "CI/CD & DevOps",
            icon: <GitBranch className="w-16 h-16 mb-4 text-purple-400" />,
            icons: [
              "docker",
              "gitlab",
              "amazonwebservices",
              "kubernetes",
              "azure",
              "jenkins",
            ],
            content: (
              <>
                <p className="mb-2">
                  Proficient in automating{" "}
                  <span className="font-semibold text-purple-400">
                    GitLab CI/CD pipelines
                  </span>{" "}
                  and implementing continuous integration with Kubernetes.
                </p>
                <p className="mb-2">
                  Experienced in setting up{" "}
                  <span className="italic">automated testing</span> with Jest
                  and other frameworks to ensure code quality.
                </p>
                <p className="mb-2">
                  Skilled in reducing technical debt through{" "}
                  <span className="underline">
                    refactoring and code optimization
                  </span>
                  .
                </p>
                <p>
                  Expertise in frequent and stable deployments to ensure{" "}
                  <span className="font-semibold text-purple-400">
                    rapid updates and minimal downtime
                  </span>
                  . Familiar with cloud platforms like AWS and Azure for
                  scalable infrastructure management.
                </p>
              </>
            ),
          },
        ].map((section, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-1 p-6 bg-gray-900 rounded-lg shadow-lg"
          >
            {section.icon}
            <h3 className="text-xl font-bold mb-2">{section.title}</h3>
            <div className="text-center text-gray-300 flex flex-col items-center">
              <span className="flex items-center mb-4 flex-wrap justify-center">
                {section.icons.map((icon, i) => (
                  <i
                    key={i}
                    className={`devicon-${icon}-plain colored text-2xl mr-2 last:mr-0`}
                  ></i>
                ))}
              </span>
              <div className="text-sm leading-relaxed">{section.content}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FullstackDeveloper;
