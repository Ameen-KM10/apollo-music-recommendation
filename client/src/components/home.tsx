import { Link } from "react-router-dom";
import { FlipWords } from "./ui/flip-words";

const HomePage = () => {
  const words = ["Mood", "Music", "Way"];
  // let navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-grey50 min-h-screen flex items-center justify-center px-16">
        <div className="relative w-full max-w-3xl">
          {/* <div className="absolute -top-64 -left-80 font-['poppins'] font-bold text-4xl ">Apollon</div> */}
          <div className="absolute bottom-2 right-16 w-96 h-96 bg-nblue rounded-full  filter blur-xl opacity-50 animate-blob_b "></div>
          <div className="absolute bottom-4 w-96 h-96 bg-palepink rounded-full  filter blur-xl opacity-50 animate-blob_a"></div>
          {/* <div className="absolute -top-60 -right-48 w-72 h-72 bg-coral rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div> */}
          {/* <div className="absolute top-40 left-30 w-72 h-72 bg-nblue rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div> */}
          <div className=" relative -top-24">
            <div className="flex flex-col items-center">
              <p className="font-['poppins'] font-bold text-[65px]">
                Your <FlipWords words={words} />
              </p>
              <p className=" font-['poppins'] font-medium max-w-md text-xl">
                Tailoring Tunes to Your Emotions
              </p>
              <Link to="/qpage">
                <button className="mt-6 hover:cursor-pointer relative py-2 px-8 font-['poppins'] text-black text-base font-semibold rounded-full overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-lg hover:scale-105 hover:text-black hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-nblue before:to-skyblue before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
