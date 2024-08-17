import logo from "../assets/logo3.png";
const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-11 bg-grey50">
      <div className="flex items-center p-2 ">
        <img src={logo} className="h-20 w-auto"></img>
        {/* <p className="font-['poppins'] text-[25px] font-semibold">
            Apollo
          </p> */}
      </div>
      <div>
        <a href="#" className="font-['poppins'] p-5 text-[20px] font-medium">
          How it works?
        </a>
      </div>
    </div>
  );
};

export default NavBar;
