"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const SearchCore = () => {
  const searchRef = useRef();
  const route = useRouter();

  const handleSearchRequest = () => {
    route.push(`/search/${searchRef.current.value}`);
  };

  return (
    <div className="relative my-8 isolate overflow-hidden items-center bg-gray-900 px-6 pt-16 shadow-2xl sm:px-16 md:py-24 lg:flex lg:gap-x-20">
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#181818" />
            <stop offset="1" stopColor="rgb(30 58 138)" />
          </radialGradient>
        </defs>
      </svg>
      <form className="w-10/12 mx-auto">
        <div className="-mt-8 mb-5 text-center">
          <h1 className="text-4xl md:text-5xl font-bold capitalize dark:text-white py-2 pl-1 sticky top-0 bg-[#121212]/85 backdrop-blur-sm z-10 font-s-125">
            Anime Search
          </h1>
        </div>
        <label
          htmlFor="anime-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search Anime
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="anime-search"
            className="block w-full p-4 pl-10 text-sm text-white border-0 focus:outline-none focus:ring-1 focus:ring-gray-300 rounded-xl focus:bg-[#181818] duration-150 bg-[#202020]"
            placeholder="Search Anime..."
            required
            ref={searchRef}
          />
          <button
            type="submit"
            className="text-black font-normal absolute right-2.5 bottom-2 bg-gray-400 hover:bg-gray-100/50 duration-150 focus:ring-2 focus:outline-none focus:ring-slate-300 rounded-lg text-sm px-4 py-2"
            onClick={handleSearchRequest}
          >
            Search
          </button>
        </div>
        <div className="space-x-2 text-center mt-3 pt-1 border-gray-600 border-t">
          <Link
            href={"https://myanimelist.net/anime.php?letter=,"}
            className="text-sm capitalize hover:underline dark:hover:text-gray-100 underline-offset-4 hover:decoration-blue-500 hover:decoration-2 dark:text-gray-400"
          >
            #
          </Link>
          {/* <?php foreach (range('A', 'Z') as $alpha) : ?>
            <a href="https://myanimelist.net/anime.php?letter=<?= $alpha; ?>" className="text-sm capitalize hover:underline dark:hover:text-gray-100 underline-offset-4 hover:decoration-blue-500 hover:decoration-2 dark:text-gray-400"><?= $alpha ?></a>
          <?php endforeach; ?> */}
        </div>
      </form>
    </div>
  );
};

export default SearchCore;