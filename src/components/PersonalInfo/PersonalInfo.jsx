import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
// import chroma from "chroma-js";
import WavingHand from "./WavingHand";
import WelcomeText from "./WelcomeText";
import SeaWaves from "./SeaWaves";
import styled, { keyframes } from "styled-components";

const gradientMove = keyframes`
0% {
  background-position: 0% 0%;
}
50% {
  background-position: 100% 100%;
}
100% {
  background-position: 0% 0%;
}
`;

const IntroBg = styled.div`
  overflow: auto;
  background: linear-gradient(
    157.5deg,
    rgba(101, 0, 94, 1) 5%,
    rgba(60, 132, 206, 1) 28.25%,
    rgba(0, 117, 94, 1) 50.85%,
    rgba(250, 218, 94, 1) 73.45%,
    rgba(255, 25, 25, 1) 98%
  );
  animation: ${gradientMove} 15s ease infinite;
  background-size: 400% 400%;
  background-attachment: fixed;
`;

const TitleText = styled.h1`
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
`;

const PersonalInfo = () => {
  // const [randomColor, setRandomColor] = useState(chroma.random().hex());
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setRandomColor(chroma.random().hex());
  //   }, 1500);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <IntroBg
      ref={ref}
      className="p-2 xs:p-5 sm:p-10 h-[500px] flex flex-col gap-3 sm:gap-10"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75, delay: 0.25 }}
      >
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <WavingHand>
            <img
              src="https://img.icons8.com/emoji/65/waving-hand-medium-skin-tone.png"
              alt="waving-hand-medium-skin-tone"
              className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px]"
            />
          </WavingHand>
          {/* <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-center"
            // style={{ color: randomColor }}
          >
            Welcome!
          </h1> */}
          <WelcomeText />
        </div>
      </motion.div>

      <div className="flex items-center justify-center flex-col xs:flex-row gap-4 sm:gap-8">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.75, delay: 2.5 }}
        >
          <div className="max-w-[120px] ">
            <motion.img
              whileHover={{ scale: 1.15 }}
              whileTap={{ borderRadius: "50%" }}
              src="https://zukashikute.github.io/resume/static/media/Self.55dd8cd8b4909253cc97.jpg"
              alt=""
              className="rounded-[10%] w-full cursor-pointer"
            />
          </div>
        </motion.div>
        <div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -200 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.75, delay: 1.5 }}
          >
            <TitleText className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-white mb-0">
              Hi, I&apos;m
            </TitleText>
            <TitleText className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-3 text-center xs:text-left">
              Jared Joshua Balajadia
            </TitleText>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -200 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.75, delay: 2 }}
          >
            <p className="text-sm xs:text-base sm:text-lg font-semibold text-white w-full max-w-[300px] xs:max-w-[400px] md:max-w-[500px] lg:max-w-[650px]">
              I&apos;m an aspiring full stack developer whose skills are focused
              in frontend. I have a passion for creating seamless and engaging
              user experiences on the web. Frontend development is where design
              meets functionality, and I find joy in bringing static designs to
              life through code.
            </p>
          </motion.div>
        </div>
      </div>
      <SeaWaves />
    </IntroBg>
  );
};

export default PersonalInfo;
