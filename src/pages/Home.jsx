import NavigationBar from "../components/NavigationBar";
import PersonalInfo from "../components/PersonalInfo/PersonalInfo";
import WhatIDo from "../components/WhatIDo/WhatIDo";
import TechStack from "../components/TechStack/TechStack";
import ProjectsInfo from "../components/ProjectsInfo/ProjectsInfo";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <PersonalInfo />
      <WhatIDo />
      <TechStack />
      <ProjectsInfo />
      <Footer />
    </div>
  );
};

export default Home;
