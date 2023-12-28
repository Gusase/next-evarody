import Img from "@/components/Ui/Img";
import Link from "next/link";

const AnimeSearchList = ({ api }) => {
  return (
    <div className="mt-9 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6 lg:gap-y-8 lg:gap-x-9 2xl:grid-cols-6">
      {api.data?.map((anime) => {
        return (
          <Link
            key={anime.mal_id}
            href={`/anime/${anime.mal_id}`}
            className="group relative isolate flex w-full flex-col items-center shadow-sm ring-blue-800 duration-200focus:ring-2 active:scale-[.98]"
          >
            <div className="aspect-[2_/_3] w-full">
              <Img
                src={anime.images.webp.image_url}
                alt={"..."}
                radius={"md"}
                className="h-full w-full bg-gray-900 object-cover transition-transform group-hover:brightness-105 rounded"
              />
            </div>
            <p className="p-0.5 sm:p-1 mt-2 text-xs md:text-base font-normal text-white decoration-1 underline-offset-2 group-hover:underline group-hover:decoration-blue-700 overflow-hidden line-clamp-2">
              {anime.title}
            </p>
            {/* <span
                  className="absolute left-0 top-0 z-10 mr-2 rounded-e bg-[#202020]/90 px-2.5 py-0.5 text-base font-medium text-gray-100 backdrop-blur-sm">Ep
                  {{ $special->getEpisodes() }}</span>
                @if (is_null($special->getEpisodes()))
                  <span
                    className="absolute left-0 top-0 z-10 mr-2 rounded-e bg-gray-50/90 px-2.5 py-0.5 text-base font-medium text-[#202020] backdrop-blur-sm">N/A</span>
                @endif */}
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeSearchList;
