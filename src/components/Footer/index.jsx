import JradLogo from "../../assets/img/JradTransparent.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex justify-center items-center gap-2 bg-dark p-2 ">
      <p className="text-xs text-white">© {currentYear}</p>
      <div className="w-full max-w-[25px]">
        <img src={JradLogo} alt="" className="cursor-pointer" />
      </div>
      <p className="text-xs text-white">- All Rights Reserved</p>
    </div>
  );
};

export default Footer;
