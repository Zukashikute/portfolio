import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 4rem 2rem;
  margin-top: -20px;
  position: relative;
  z-index: 2;

  @media (max-width: 640px) {
    padding: 2rem 1rem;
    margin-top: -60px;
  }
`;

const WhatIDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const focusAreas = [
    {
      icon: "🎨",
      title: "Build Scalable Web Applications",
      description: "Create production-ready interfaces with React, Webflow, and modern frontend architecture.",
    },
    {
      icon: "🔗",
      title: "Integrate Business Systems",
      description: "Connect SaaS platforms, APIs, and databases to support reliable operational workflows.",
    },
    {
      icon: "⚙️",
      title: "Automate Workflows",
      description: "Design workflow automation with Make, n8n, webhooks, and API orchestration.",
    },
    {
      icon: "👥",
      title: "Deliver Reliable Software",
      description: "Collaborate in Agile teams to ship maintainable, user-focused solutions that meet business goals.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
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
            What I Do
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-12 max-w-2xl">
            A clear focus on building value for users and teams
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={mainControls}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white bg-opacity-5 backdrop-blur-md rounded-lg p-6 sm:p-8 border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl mb-4">{area.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-serif">
                {area.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default WhatIDo;
