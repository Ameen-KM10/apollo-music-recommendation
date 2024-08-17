import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

interface Track {
  id: string;
  name: string;
  artist: string;
}

const TrackList: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [link, setLink] = useState("");
  const s_link = "";

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8080/getmusic");
        const data = response.data;

        // Transform the data into an array of objects
        const formattedData: Track[] = data.id.map(
          (id: string, index: number) => ({
            id: id,
            name: data.name[index],
            artist: data.artist[index],
          })
        );

        setTracks(formattedData);
        console.log(formattedData);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchTracks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="flex flex-col items-center">
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
              <div className="flex flex-col gap-5 w-[600px] group mx-2 cursor-pointer bg-[#263238] gr">
                <div className="flex flex-row place-items-center place-content-between px-3 pb-3">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-lg sm:text-xl relative after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:absolute after:origin-bottom-left after:transform after:ease-in-out after:duration-500 cursor-pointer w-full after:w-full group-hover:after:scale-x-100 group-hover:after:origin-bottom-left after:bg-[#c0ca33] dark:after:bg-[#cddc39] text-[#546e7a] dark:text-[#cddc39]">
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
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackList;
