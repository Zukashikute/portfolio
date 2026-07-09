import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  background: linear-gradient(135deg, #16213e 0%, #0f3460 100%);
  padding: 4rem 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 640px) {
    padding: 2rem 1rem;
  }
`;

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const experiences = [
    {
      company: "Bloom (BlueStep)",
      title: "Software Engineer",
      location: "Farmington, Utah, USA",
      date: "January 2025 - June 2026",
      bullets: [
        "Developed and maintained scalable web applications for real estate and healthcare clients using modern software engineering practices.",
        "Debugged and resolved production issues across web applications, improving application stability and supporting successful feature deployments.",
        "Partnered with clients and cross-functional teams to gather requirements and deliver customized software solutions aligned with business needs.",
        "Collaborated with engineers, project managers, and stakeholders during Agile ceremonies to prioritize development work and ensure timely delivery.",
        "Managed development tasks in ClickUp, prioritizing sprint work and tracking deliverables to maintain project visibility and meet deadlines.",
      ],
    },
    {
      company: "Celerity Studio",
      title: "Web Developer",
      location: "Palo Alto, California",
      date: "July 2024 - December 2024",
      bullets: [
        "Built responsive websites and web applications using Webflow, translating UI/UX designs into production-ready interfaces.",
        "Implemented Supabase for authentication, database management, and real-time data synchronization.",
        "Integrated Memberstack authentication and user management to streamline onboarding and improve access control.",
        "Automated business workflows using Make (Integromat), reducing manual processes through system integrations.",
        "Designed and deployed scalable web solutions focused on performance, security, and maintainability.",
      ],
    },
    {
      company: "Kynection",
      title: "Support Developer Engineer",
      location: "Seaford, Victoria, Australia",
      date: "April 2024 - August 2024",
      bullets: [
        "Troubleshot and resolved software defects involving JavaScript, PHP, jQuery, and SQL.",
        "Implemented feature enhancements and bug fixes while maintaining compatibility with existing systems.",
        "Provided technical support by investigating issues, documenting resolutions, and guiding users on best practices.",
      ],
    },
    {
      company: "GameMyBiz",
      title: "Frontend Engineer",
      location: "Boise, Idaho, USA",
      date: "October 2021 - January 2024",
      bullets: [
        "Developed responsive frontend interfaces from Figma designs using React, HTML, CSS, and JavaScript.",
        "Built interactive frontend features with modern JavaScript, asynchronous programming, and reusable components.",
        "Investigated and resolved frontend issues, improving application reliability and user experience.",
        "Collaborated with distributed teams using Git version control, pull requests, and code reviews.",
        "Implemented responsive web designs for consistent experiences across desktop, tablet, and mobile devices.",
        "Built reusable UI components using Styled Components and Emotion.",
      ],
    },
    {
      company: "GameMyBiz",
      title: "Scrum Lead / Sprint Lead",
      location: "Boise, Idaho, USA",
      date: "October 2022 - October 2023",
      bullets: [
        "Facilitated Agile sprint planning, stand-ups, and progress meetings across engineering, marketing, and executive teams.",
        "Coordinated sprint execution by tracking task progress, resolving blockers, and ensuring commitments were met.",
        "Managed backlog and development tickets to improve visibility into project progress and workload distribution.",
      ],
    },
    {
      company: "Focus Direct Inc",
      title: "Customer Service Representative",
      location: "Bacolod City, Philippines",
      date: "January 2019 - September 2019",
      bullets: [
        "Resolved customer inquiries related to debit card services and mobile applications for 50–70 customers daily.",
        "Consistently met quality KPIs exceeding 90% while maintaining high customer satisfaction.",
      ],
    },
    {
      company: "Panasiatic Solutions",
      title: "Technical Support Representative",
      location: "Bacolod City, Philippines",
      date: "August 2018 - December 2018",
      bullets: [
        "Provided technical support for telecommunications products by troubleshooting account, device, and service issues.",
        "Maintained quality performance metrics above 90% while assisting 60–70 customers daily.",
      ],
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
          variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 font-serif">
            Experience
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-12 max-w-2xl">
            Professional roles and achievements drawn directly from my resume.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate={mainControls} className="space-y-8">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white bg-opacity-5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-0 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">{item.company}</h3>
                  <p className="text-sm sm:text-base text-slate-300 mt-1">
                    {item.title} • {item.location}
                  </p>
                </div>
                <p className="text-sm sm:text-base text-slate-400">{item.date}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-200">
                {item.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Experience;
