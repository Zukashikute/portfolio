import JradLogo from "../assets/img/JradTransparent.png";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const NavContainer = styled.div`
  background: rgba(10, 15, 30, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(33, 150, 243, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavLink = styled(motion.div)`
  position: relative;
  color: ${({ active }) => (active ? "#2196f3" : "white")};
  text-decoration: none;
  font-family: serif;
  font-size: 1.125rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${({ active }) => (active ? "100%" : "0")};
    height: 2px;
    background: linear-gradient(90deg, #0052cc, #2196f3);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #2196f3;

    &::after {
      width: 100%;
    }
  }

  & a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;

const NavigationBar = () => {
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const isActive = (href) => {
    if (href.startsWith("#")) {
      return location.hash === href && location.pathname === "/";
    }
    return location.pathname === href;
  };

  const logoVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  return (
    <NavContainer>
      <div className="max-w-6xl mx-auto px-2 xs:px-5 sm:px-10 py-3 flex items-center justify-between">
        <motion.div
          whileHover="hover"
          whileTap="tap"
          variants={logoVariants}
          className="w-full max-w-[50px] cursor-pointer"
          onClick={() => window.location.reload()}
        >
          <img src={JradLogo} alt="Jared Logo" className="w-full" />
        </motion.div>

        <div className="flex gap-6 sm:gap-8">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              active={isActive(item.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={item.href}>
                {item.label}
              </Link>
            </NavLink>
          ))}
        </div>
      </div>
    </NavContainer>
  );
};

export default NavigationBar;
