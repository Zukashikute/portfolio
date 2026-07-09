import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import projects from "../../constants/projectinfo";
import styled from "styled-components";

const SectionContainer = styled.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%);
  padding: 4rem 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 640px) {
    padding: 2rem 1rem;
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  padding: 1rem;
`;

const ModalContent = styled(motion.div)`
  background: linear-gradient(135deg, #16213e 0%, #0f3460 100%);
  border-radius: 12px;
  padding: 2rem;
  color: white;
  max-width: 700px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 640px) {
    padding: 1.5rem;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;

    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  }
`;

const ProjectsInfo = () => {
  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = projects.find((project) => project.id === selectedId);

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

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <SectionContainer>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 font-serif">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-12 max-w-2xl">
            A selection of my best work — from full-stack applications to frontend experiences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          {projects.slice(0, 4).map((item) => (
            <motion.div
              key={item.id}
              variants={projectVariants}
              onClick={() => setSelectedId(item.id)}
              className="group bg-white bg-opacity-5 backdrop-blur-md rounded-lg overflow-hidden border border-white border-opacity-10 cursor-pointer hover:border-opacity-30 transition-all duration-300 hover:scale-105"
            >
              <div
                className="relative h-48 sm:h-56 overflow-hidden flex items-center justify-center p-6"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.15)), linear-gradient(90deg,#374151,#6b7280)",
                }}
              >
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white font-serif">
                    {item.name}
                  </h3>
                  <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-[#0052CC]/30 text-[#2196F3] rounded-full">
                    {item.type}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-gray-300 line-clamp-2 mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.techStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-[#0052CC]/20 text-[#2196F3] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {item.techStack.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-[#0052CC]/20 text-[#2196F3] rounded">
                      +{item.techStack.length - 3} more
                    </span>
                  )}
                </div>

                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-block mt-4 px-4 py-2 bg-[#2196f3] text-white text-sm font-semibold rounded-lg hover:bg-[#1c7adf] transition-colors duration-200"
                  >
                    View Project
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center mt-12"
        >
          <Link
            to="/projects"
            className="px-8 py-3 bg-gradient-to-r from-[#0052CC] to-[#2196F3] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 inline-block"
          >
            View All Projects
          </Link>
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <Modal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            >
              <ModalContent
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-2">
                      {selectedProject.name}
                    </h2>
                    <span className="text-sm px-3 py-1 bg-[#0052CC]/30 text-[#2196F3] rounded-full inline-block">
                      {selectedProject.type}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedId(null)}
                    className="text-2xl text-gray-400 hover:text-white transition-colors"
                  >
                    ✕
                  </motion.button>
                </div>

                <div className="bg-gradient-to-br from-[#0052CC] to-[#2196F3] rounded-lg p-6 mb-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">About</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-2 bg-gradient-to-r from-[#0052CC] to-[#2196F3] text-white rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ModalContent>
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </SectionContainer>
  );
};

export default ProjectsInfo;
