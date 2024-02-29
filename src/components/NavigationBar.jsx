import JradLogo from "../assets/img/JradTransparent.png";

const NavigationBar = () => {
  return (
    <div className="p-2 bg-dark">
      <div className="container flex items-center justify-between ">
        <div className="w-full max-w-[50px]">
          <img
            src={JradLogo}
            alt=""
            className="cursor-pointer"
            onClick={() => window.location.reload()}
          />
        </div>
        <div className="flex gap-4">
          <span className="text-white font-serif text-lg sm:text-xl">Home</span>
          <span className="text-white font-serif text-lg sm:text-xl">Projects</span>
          <span className="text-white font-serif text-lg sm:text-xl">About</span>
          <span className="text-white font-serif text-lg sm:text-xl">Contact</span>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
