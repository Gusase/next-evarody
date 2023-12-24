"use client";

import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";

const Search = () => {
  const searchRef = useRef();
  const route = useRouter();
  const pathname = usePathname();

  const handleSearchRequest = () => {
    route.push(`/search/${searchRef.current.value}`);
  };

  if (pathname == "/search") {
    return;
  }

  return (
    <form className="w-4/5 max-md:mx-auto sm:w-full">
      <div className="relative">
        <button
          type="submit"
          className="absolute z-10 inset-y-0 start-0 flex items-center justify-center h-9 w-9 mt-[6px] ml-2 rounded-lg hover:bg-foreground-lg duration-150 mx-auto"
          title="Search something"
          onClick={handleSearchRequest}
        >
          <svg
            className="w-4 h-4 text-gray-500"
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
          <span className="sr-only">Enter to search</span>
        </button>
        <input
          type="text"
          id="global-search"
          className="block w-full p-4 pl-12 md:px-12 text-sm text-white border-0 focus:outline-none focus:ring-1 focus:ring-gray-300 rounded-xl focus:bg-[#181818] duration-150 bg-[#202020] h-12"
          placeholder="Search..."
          ref={searchRef}
        />
        <div className="absolute z-10 inset-y-0 end-0 hidden md:flex items-center ml-1 h-9 w-9 mt-[6px] mr-2 rounded-lg">
          <label
            htmlFor="global-search"
            className="mx-auto cursor-pointer flex"
            title="Press / to search"
          >
            <kbd className="px-2.5 py-1.5 text-xs font-semibold text-gray-800 select-none bg-gray-500 rounded-lg ring-1 ring-gray-900/20">
              /
            </kbd>
          </label>
        </div>
      </div>
    </form>
  );
};

export default Search;
