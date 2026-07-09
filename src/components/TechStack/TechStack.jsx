import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  background: linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%);
  padding: 4rem 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 640px) {
    padding: 2rem 1rem;
  }
`;

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const techGroups = [
    {
      category: "Frontend",
      icon: "🎨",
      skills: [
        "React",
        "JavaScript ES6+",
        "TypeScript",
        "Webflow",
        "HTML5",
        "CSS3",
        "Responsive Design",
        "Component-Based Architecture",
        "Accessibility",
      ],
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "SQL",
        "Authentication",
        "API Integration",
      ],
    },
    {
      category: "Database",
      icon: "💾",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "JSON"],
    },
    {
      category: "Automation",
      icon: "🤖",
      skills: ["Make", "n8n", "API Integrations", "Webhooks", "Workflow Automation", "AI Automation"],
    },
    {
      category: "Tools & Platforms",
      icon: "🛠️",
      skills: ["Git", "GitHub", "ClickUp", "Vercel", "npm", "Figma"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const groupVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <SectionContainer ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 font-serif">
            Tech Stack
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-12 max-w-2xl">
            Technologies I&apos;m confident and proficient in
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={mainControls}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {techGroups.map((group, index) => (
            <motion.div
              key={index}
              variants={groupVariants}
              className="bg-white bg-opacity-5 backdrop-blur-md rounded-lg p-6 sm:p-8 border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl sm:text-4xl">{group.icon}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
                  {group.category}
                </h3>
              </div>

              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                initial="hidden"
                animate={mainControls}
                className="flex flex-wrap gap-2"
              >
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    variants={skillVariants}
                    className="bg-gradient-to-r from-[#0052CC] to-[#2196F3] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default TechStack;
