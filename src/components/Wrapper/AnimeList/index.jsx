import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div>
      <div className="w-full mx-auto min-w-0 dark:highlight-white/5">
        <div className="overflow-x-auto flex">
          {api.data?.map((anime) => {
            return (
              <div
                key={anime.mal_id}
                className="flex-none py-6 px-3 last:pr-4"
              >
                <Link
                  href={`anime/${anime.mal_id}`}
                  className="group relative flex h-[260px] w-44 flex-col items-center overflow-hidden shadow-sm ring-blue-800 duration-200 hover:ring-2 focus:ring-2 active:scale-[.98]"
                >
                  <Image
                    src={anime.images.webp.image_url}
                    width={"0"}
                    height={"0"}
                    alt="..."
                    sizes="100vw"
                    style={{ width: "100%", height: "100%" }}
                    className="object-cover transition-transform group-hover:brightness-105"
                  />
                  <p className="absolute bottom-2 z-10 px-1 text-sm font-normal text-white">
                    {anime.title}
                  </p>
                  {/* <span
                className="absolute left-0 top-0 z-10 mr-2 rounded-e bg-[#202020]/90 px-2.5 py-0.5 text-base font-medium text-gray-100 backdrop-blur-sm">Ep
                {{ $special->getEpisodes() }}</span>
              @if (is_null($special->getEpisodes()))
                <span
                  className="absolute left-0 top-0 z-10 mr-2 rounded-e bg-gray-50/90 px-2.5 py-0.5 text-base font-medium text-[#202020] backdrop-blur-sm">N/A</span>
              @endif */}

                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/80 duration-200 group-hover:from-black/75 dark:from-black/90"></div>
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
