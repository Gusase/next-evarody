import Img from "@/components/Ui/Img";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div>
      <div className="w-full mx-auto min-w-0 dark:highlight-white/5">
        <div className="overflow-x-auto no-scrollbar flex">
          {api.map((anime) => {
            return (
              <div key={anime.id} className="flex-none py-6 px-3 last:pr-4">
                <Link
                  href={`anime/${anime.id}`}
                  className="group relative flex h-[260px] w-44 flex-col items-center overflow-hidden shadow-sm ring-blue-800 duration-200 hover:ring-2 focus:ring-2 active:scale-[.98]"
                >
                  <Img
                    src={anime.coverImage.extraLarge}
                    alt={"..."}
                    radius={"none"}
                    className="h-full w-full bg-gray-900 object-cover transition-transform group-hover:brightness-105"
                  />
                  <p className="absolute bottom-2 z-20 px-1 text-sm font-normal text-white">
                    {anime.title.romaji || anime.title.english}
                  </p>
                  {anime.episodes ? (
                    <span className="absolute font-light left-0 top-0 z-10 mr-2 rounded-e bg-[#202020]/90 px-2.5 py-0.5 text-base text-gray-100 backdrop-blur-sm">
                      Ep {anime.episodes}
                    </span>
                  ) : (
                    <span className="absolute font-light left-0 top-0 z-10 mr-2 rounded-e bg-gray-50/90 px-2.5 py-0.5 text-base text-[#202020] backdrop-blur-sm">
                      N/A
                    </span>
                  )}

                  <div className="absolute z-10 inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/90 duration-200 group-hover:from-black/75"></div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AnimeList;
