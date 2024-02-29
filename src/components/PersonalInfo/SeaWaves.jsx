import styled, { keyframes } from "styled-components";

const seaWave = keyframes`
2% {
   transform: translateX(1);
}
25% {
   transform: translateX(-25%);
}
50% {
   transform: translateX(-50%);
}
75% {
   transform: translateX(-25%);
}
100% {
   transform: translateX(1);
}
`;

const WaveOne = styled.div`
  background: rgb(255 255 255 / 25%);
  border-radius: 1000% 1000% 0 0;
  position: fixed;
  width: 200%;
  height: 8em;
  animation: ${seaWave} 10s -3s linear infinite;
  transform: translate3d(0, 0, 0);
  opacity: 0.8;
  top: 440px;
  left: 0;
  z-index: 1;
`;

const WaveTwo = styled.div`
  background: rgb(255 255 255 / 25%);
  border-radius: 1000% 1000% 0 0;
  position: fixed;
  width: 200%;
  height: 8em;
  animation: ${seaWave} 18s linear reverse infinite;
  transform: translate3d(0, 0, 0);
  opacity: 0.8;
  top: 455px;
  left: 0;
  z-index: 1;
`;

const WaveThree = styled.div`
  background: rgb(255 255 255 / 25%);
  border-radius: 1000% 1000% 0 0;
  position: fixed;
  width: 200%;
  height: 8em;
  animation: ${seaWave} 20s -1s reverse infinite;
  transform: translate3d(0, 0, 0);
  opacity: 0.9;
  top: 470px;
  left: 0;
  z-index: 1;
`;

const Waves = () => {
  return (
    <>
      <WaveOne />
      <WaveTwo />
      <WaveThree />
    </>
  );
};

export default Waves;
