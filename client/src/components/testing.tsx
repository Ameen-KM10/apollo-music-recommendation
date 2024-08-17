import React, { useState } from "react";
import { track_id, track_name, artist } from "./music_data.json";

const Testing = () => {
  const numbers = [1, 2, 3, 4, 5];
  const [selectedindex, setSelectedindex] = useState(-1);
  return (
    <div>
      {/* <div className="flex justify-center">
        <div className="flex h-10 rounded-3xl border-[#c0bfd0] border-[0.5px] items-center">
          {numbers.map((numbers, index) => (
            <div>
              <ul className="">
                <li
                  className= {selectedindex === index && selectedindex === 0 ? "font-['poppins'] font-medium  px-5 py-2 mix-blend-overlay bg-nblue " : selectedindex === index && selectedindex === 4 ? "font-['poppins'] font-medium  px-5 py-2 mix-blend-overlay bg-nblue " : selectedindex === index ? "font-['poppins'] font-medium  px-5 py-2 mix-blend-overlay bg-nblue" : "font-['poppins'] font-medium  px-5 py-2 mix-blend-overlay" }   
                  onClick={() => setSelectedindex(index)}
                >
                  {numbers}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div> */}
      <div className="flex flex-col items-center">
        {(track_name).map((track_name) => (
          <div className="flex" onClick={() => {console.log(track_name)}}>
            <div className="flex flex-col gap-5 w-[600px] group mx-2 cursor-pointer bg-[#263238] gr">
              <div className="flex flex-row place-items-center place-content-between px-3 pb-3">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-lg sm:text-xl relative after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:absolute after:origin-bottom-left after:transform after:ease-in-out after:duration-500 cursor-pointer w-full after:w-full group-hover:after:scale-x-100 group-hover:after:origin-bottom-left after:bg-[#c0ca33] dark:after:bg-[#cddc39] text-[#546e7a] dark:text-[#cddc39]">
                    {track_name}
                  </p>
                  <p className="text-sm text-[#607d8b]">artist</p>
                </div>
                <div className="-rotate-45 cursor-pointer">
                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#546e7a] font-semibold text-lg sm:text-xl transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:text-[#b0bec5] fill-[#c0ca33] group-hover:bg-[#c0ca33] group-hover:fill-midnight group-hover:rotate-45 p-px rounded-full w-10 group-hover:rounded-full group-hover:animate-pulse"
                  >
                    <path
                      d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z"
                      fill-rule="nonzero"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      <button
        className="bg-purple text-silver p-4"
        onClick={() => console.log(track_name[0])}
      >
        Test
      </button>
    </div>
  );
};

export default Testing;
