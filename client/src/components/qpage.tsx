import { useState } from "react";
import { Link } from "react-router-dom";

interface Track {
  id: string;
  name: string;
  artist: string;
}

const Qpage = () => {
  const numbers = [1, 2, 3, 4, 5];

  const [sleep, setSleep] = useState(1);
  const [appetite, setAppetite] = useState(1);
  const [intrest, setIntrest] = useState(1);
  const [fatigue, setFatigue] = useState(1);
  const [worthlesness, setWorthlesness] = useState(1);
  const [concentration, setConcentration] = useState(1);
  const [agitation, setAgitation] = useState(1);
  const [suicidal, setSuicidal] = useState(1);
  const [sleepdisturbance, setSleepdisturbance] = useState(1);
  const [agression, setAgression] = useState(1);
  const [panicattack, setPanicattack] = useState(1);
  const [hopelessness, setHopelessness] = useState(1);
  const [restlesness, setRestlesness] = useState(1);
  const [energylevel, setEnergylevel] = useState(1);

  const answers = [
    sleep,
    appetite,
    intrest,
    fatigue,
    worthlesness,
    concentration,
    agitation,
    suicidal,
    sleepdisturbance,
    agression,
    panicattack,
    hopelessness,
    restlesness,
    energylevel,
  ];

  const questions = [
    "Sleep",
    "Appetite",
    "Intrest",
    "Fatigue",
    "Worthlesness",
    "Concentration",
    "Agitation",
    "Suicidal Ideation",
    "Sleep disturbance",
    "Aggression",
    "Panic attack",
    "Hopelessness",
    "Restlessness",
    "Energy level",
  ];

  const [data, setData] = useState([]);
  let [id, setId] = useState();
  let [name, setName] = useState();
  let [artist, setArtist] = useState();
  const [tracks, setTracks] = useState<Track[]>([]);
  const [link, setLink] = useState("");
  const [showsongs, setShowsongs] = useState(false)

  const sendData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8080/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: answers }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response}`);
      }

      const result = await response.json();
      setId(result.track_id);
      setName(result.track_name);
      setArtist(result.artist);
      const formattedData: Track[] = result.track_id.map(
        (id: string, index: number) => ({
          id: id,
          name: result.track_name[index],
          artist: result.artist[index],
        })
      );
      setTracks(formattedData);
      setShowsongs(true)

      console.log(tracks);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="px-10 bg-grey50">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 place-items-center bg-grey50">
          {/* Sleep */}
          <div className="flex flex-col m-10">
            <p className="font-['poppins'] font-semibold text-[25px]">
              {questions[0]}
            </p>
            <div className="flex ">
              <div className="flex h-10 rounded-3xl  border-[#c0bfd0] border-[0.5px] items-center hover:cursor-pointer shadow-xl ">
                {numbers.map((numbers, index) => (
                  <div>
                    <ul className="">
                      <li
                        className={
                          sleep === index + 1 && sleep === 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-l-3xl ease-linear"
                            : sleep === index + 1 && sleep === 5
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-r-3xl"
                            : sleep === index + 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff]"
                            : "font-['poppins'] font-medium  px-5 py-2 bg-white  mix-blend-multiply"
                        }
                        onClick={() => setSleep(index + 1)}
                      >
                        {numbers}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Appetite */}
          <div className="flex flex-col m-10">
            <p className="font-['poppins'] font-semibold text-[25px] ">
              {questions[1]}
            </p>
            <div className="flex ">
              <div className="flex h-10 rounded-3xl  border-[#c0bfd0] border-[0.5px] items-center hover:cursor-pointer shadow-xl ">
                {numbers.map((numbers, index) => (
                  <div>
                    <ul className="">
                      <li
                        className={
                          appetite === index + 1 && appetite === 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-l-3xl ease-linear"
                            : appetite === index + 1 && appetite === 5
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-r-3xl"
                            : appetite === index + 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff]"
                            : "font-['poppins'] font-medium  px-5 py-2 bg-white  mix-blend-multiply"
                        }
                        onClick={() => setAppetite(index + 1)}
                      >
                        {numbers}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Intrest */}
          <div className="flex flex-col m-10">
            <p className="font-['poppins'] font-semibold text-[25px]">
              {questions[2]}
            </p>
            <div className="flex">
              <div className="flex h-10 rounded-3xl  border-[#c0bfd0] border-[0.5px] items-center hover:cursor-pointer shadow-xl ">
                {numbers.map((numbers, index) => (
                  <div>
                    <ul className="">
                      <li
                        className={
                          intrest === index + 1 && intrest === 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-l-3xl ease-linear"
                            : intrest === index + 1 && intrest === 5
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-r-3xl"
                            : intrest === index + 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff]"
                            : "font-['poppins'] font-medium  px-5 py-2 bg-white  mix-blend-multiply"
                        }
                        onClick={() => setIntrest(index + 1)}
                      >
                        {numbers}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Fatigue */}
          <div className="flex flex-col m-10">
            <p className="font-['poppins'] font-semibold text-[25px]">
              {questions[3]}
            </p>
            <div className="flex">
              <div className="flex h-10 rounded-3xl  border-[#c0bfd0] border-[0.5px] items-center hover:cursor-pointer shadow-xl ">
                {numbers.map((numbers, index) => (
                  <div>
                    <ul className="">
                      <li
                        className={
                          fatigue === index + 1 && fatigue === 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-l-3xl ease-linear"
                            : fatigue === index + 1 && fatigue === 5
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-r-3xl"
                            : fatigue === index + 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff]"
                            : "font-['poppins'] font-medium  px-5 py-2 bg-white  mix-blend-multiply"
                        }
                        onClick={() => setFatigue(index + 1)}
                      >
                        {numbers}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Worthlessness */}
          <div className="flex flex-col m-10">
            <p className="font-['poppins'] font-semibold text-[25px]">
              {questions[4]}
            </p>
            <div className="flex">
              <div className="flex h-10 rounded-3xl  border-[#c0bfd0] border-[0.5px] items-center hover:cursor-pointer shadow-xl ">
                {numbers.map((numbers, index) => (
                  <div>
                    <ul className="">
                      <li
                        className={
                          worthlesness === index + 1 && worthlesness === 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-l-3xl ease-linear"
                            : worthlesness === index + 1 && worthlesness === 5
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-r-3xl"
                            : worthlesness === index + 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff]"
                            : "font-['poppins'] font-medium  px-5 py-2 bg-white  mix-blend-multiply"
                        }
                        onClick={() => setWorthlesness(index + 1)}
                      >
                        {numbers}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Concentration */}
          <div className="flex flex-col m-10">
            <p className="font-['poppins'] font-semibold text-[25px]">
              {questions[5]}
            </p>
            <div className="flex">
              <div className="flex h-10 rounded-3xl  border-[#c0bfd0] border-[0.5px] items-center hover:cursor-pointer shadow-xl ">
                {numbers.map((numbers, index) => (
                  <div>
                    <ul className="">
                      <li
                        className={
                          concentration === index + 1 && concentration === 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-l-3xl ease-linear"
                            : concentration === index + 1 && concentration === 5
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-r-3xl"
                            : concentration === index + 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff]"
                            : "font-['poppins'] font-medium  px-5 py-2 bg-white  mix-blend-multiply"
                        }
                        onClick={() => setConcentration(index + 1)}
                      >
                        {numbers}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Agitation */}
          <div className="flex flex-col m-10">
            <p className="font-['poppins'] font-semibold text-[25px]">
              {questions[6]}
            </p>
            <div className="flex">
              <div className="flex h-10 rounded-3xl  border-[#c0bfd0] border-[0.5px] items-center hover:cursor-pointer shadow-xl ">
                {numbers.map((numbers, index) => (
                  <div>
                    <ul className="">
                      <li
                        className={
                          agitation === index + 1 && agitation === 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-l-3xl ease-linear"
                            : agitation === index + 1 && agitation === 5
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-r-3xl"
                            : agitation === index + 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff]"
                            : "font-['poppins'] font-medium  px-5 py-2 bg-white  mix-blend-multiply"
                        }
                        onClick={() => setAgitation(index + 1)}
                      >
                        {numbers}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Suicidal Ideation */}
          <div className="flex flex-col m-10">
            <p className="font-['poppins'] font-semibold text-[25px]">
              {questions[7]}
            </p>
            <div className="flex">
              <div className="flex h-10 rounded-3xl  border-[#c0bfd0] border-[0.5px] items-center hover:cursor-pointer shadow-xl ">
                {numbers.map((numbers, index) => (
                  <div>
                    <ul className="">
                      <li
                        className={
                          suicidal === index + 1 && suicidal === 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-l-3xl ease-linear"
                            : suicidal === index + 1 && suicidal === 5
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-r-3xl"
                            : suicidal === index + 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff]"
                            : "font-['poppins'] font-medium  px-5 py-2 bg-white  mix-blend-multiply"
                        }
                        onClick={() => setSuicidal(index + 1)}
                      >
                        {numbers}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sleep disturbance */}
          <div className="flex flex-col m-10">
            <p className="font-['poppins'] font-semibold text-[25px]">
              {questions[8]}
            </p>
            <div className="flex">
              <div className="flex h-10 rounded-3xl  border-[#c0bfd0] border-[0.5px] items-center hover:cursor-pointer shadow-xl ">
                {numbers.map((numbers, index) => (
                  <div>
                    <ul className="">
                      <li
                        className={
                          sleepdisturbance === index + 1 &&
                          sleepdisturbance === 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-l-3xl ease-linear"
                            : sleepdisturbance === index + 1 &&
                              sleepdisturbance === 5
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-r-3xl"
                            : sleepdisturbance === index + 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff]"
                            : "font-['poppins'] font-medium  px-5 py-2 bg-white  mix-blend-multiply"
                        }
                        onClick={() => setSleepdisturbance(index + 1)}
                      >
                        {numbers}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Aggression */}
          <div className="flex flex-col m-10">
            <p className="font-['poppins'] font-semibold text-[25px]">
              {questions[9]}
            </p>
            <div className="flex">
              <div className="flex h-10 rounded-3xl  border-[#c0bfd0] border-[0.5px] items-center hover:cursor-pointer shadow-xl ">
                {numbers.map((numbers, index) => (
                  <div>
                    <ul className="">
                      <li
                        className={
                          agression === index + 1 && agression === 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-l-3xl ease-linear"
                            : agression === index + 1 && agression === 5
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-r-3xl"
                            : agression === index + 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff]"
                            : "font-['poppins'] font-medium  px-5 py-2 bg-white  mix-blend-multiply"
                        }
                        onClick={() => setAgression(index + 1)}
                      >
                        {numbers}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Panic attack */}
          <div className="flex flex-col m-10">
            <p className="font-['poppins'] font-semibold text-[25px]">
              {questions[10]}
            </p>
            <div className="flex">
              <div className="flex h-10 rounded-3xl  border-[#c0bfd0] border-[0.5px] items-center hover:cursor-pointer shadow-xl ">
                {numbers.map((numbers, index) => (
                  <div>
                    <ul className="">
                      <li
                        className={
                          panicattack === index + 1 && panicattack === 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-l-3xl ease-linear"
                            : panicattack === index + 1 && panicattack === 5
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-r-3xl"
                            : panicattack === index + 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff]"
                            : "font-['poppins'] font-medium  px-5 py-2 bg-white  mix-blend-multiply"
                        }
                        onClick={() => setPanicattack(index + 1)}
                      >
                        {numbers}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hopelessness */}
          <div className="flex flex-col m-10">
            <p className="font-['poppins'] font-semibold text-[25px]">
              {questions[11]}
            </p>
            <div className="flex">
              <div className="flex h-10 rounded-3xl  border-[#c0bfd0] border-[0.5px] items-center hover:cursor-pointer shadow-xl ">
                {numbers.map((numbers, index) => (
                  <div>
                    <ul className="">
                      <li
                        className={
                          hopelessness === index + 1 && hopelessness === 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-l-3xl ease-linear"
                            : hopelessness === index + 1 && hopelessness === 5
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-r-3xl"
                            : hopelessness === index + 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff]"
                            : "font-['poppins'] font-medium  px-5 py-2 bg-white  mix-blend-multiply"
                        }
                        onClick={() => setHopelessness(index + 1)}
                      >
                        {numbers}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Restlessness */}
          <div className="flex flex-col m-10">
            <p className="font-['poppins'] font-semibold text-[25px]">
              {questions[12]}
            </p>
            <div className="flex">
              <div className="flex h-10 rounded-3xl  border-[#c0bfd0] border-[0.5px] items-center hover:cursor-pointer shadow-xl ">
                {numbers.map((numbers, index) => (
                  <div>
                    <ul className="">
                      <li
                        className={
                          restlesness === index + 1 && restlesness === 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-l-3xl ease-linear"
                            : restlesness === index + 1 && restlesness === 5
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-r-3xl"
                            : restlesness === index + 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff]"
                            : "font-['poppins'] font-medium  px-5 py-2 bg-white  mix-blend-multiply"
                        }
                        onClick={() => setRestlesness(index + 1)}
                      >
                        {numbers}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Energy level */}
          <div className="flex flex-col m-10">
            <p className="font-['poppins'] font-semibold text-[25px]">
              {questions[13]}
            </p>
            <div className="flex">
              <div className="flex h-10 rounded-3xl  border-[#c0bfd0] border-[0.5px] items-center hover:cursor-pointer shadow-xl ">
                {numbers.map((numbers, index) => (
                  <div>
                    <ul className="">
                      <li
                        className={
                          energylevel === index + 1 && energylevel === 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-l-3xl ease-linear"
                            : energylevel === index + 1 && energylevel === 5
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff] rounded-r-3xl"
                            : energylevel === index + 1
                            ? "font-['poppins'] font-medium  px-5 py-2  bg-[#0b75ff] text-[#ffffff]"
                            : "font-['poppins'] font-medium  px-5 py-2 bg-white  mix-blend-multiply"
                        }
                        onClick={() => setEnergylevel(index + 1)}
                      >
                        {numbers}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={sendData}
            className="mt-6 relative py-2 px-8 font-['poppins'] text-black text-base font-semibold rounded-md overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-lg hover:scale-105 hover:text-black hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-nblue before:to-skyblue before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-md hover:before:left-0"
          >
            Submit
          </button>
        </div>
        <div className={showsongs ? "flex flex-col items-center" : "flex flex-col items-center hidden" } >
          <p className="font-['poppins'] font-semibold text-[25px] mt-5 -mb-9">Songs that suits you</p>
          <div className="flex flex-col items-center rounded-3xl border-[0.5px] border-[#c0bfd0] shadow-xl p-4 m-10" >
            {tracks.map((track, index) => (
              <div
                className="flex"
                onClick={() => {
                  setLink("http://open.spotify.com/track/" + track.id);
                  console.log(link);
                }}
                key={index}
              >
                <a href={link} target="_blank">
                  <div className="flex flex-col gap-5 w-[600px] group mx-2 cursor-pointer bg-grey50 gr">
                    <div className="flex flex-row place-items-center place-content-between px-3 pb-3">
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-lg sm:text-xl relative after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:absolute after:origin-bottom-left after:transform after:ease-in-out after:duration-500 cursor-pointer w-full after:w-full group-hover:after:scale-x-100 group-hover:after:origin-bottom-left after:bg-[#c0ca33] dark:after:bg-[#0b75ff] text-[#546e7a] dark:text-[#0b75ff]">
                          {track.name}
                        </p>
                        <p className="text-sm text-[#607d8b]">{track.artist}</p>
                      </div>
                      <div className="-rotate-45 cursor-pointer">
                        <svg
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          stroke-linejoin="round"
                          stroke-miterlimit="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-[#546e7a] font-semibold text-lg sm:text-xl transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:text-[#b0bec5] fill-[#0b75ff] group-hover:bg-[#0b75ff] group-hover:fill-white group-hover:rotate-45 p-px rounded-full w-10 group-hover:rounded-full group-hover:animate-pulse"
                        >
                          <path
                            d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z"
                            fill-rule="nonzero"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qpage;
