"use client";

import { createUrl } from "@/source/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";

const Search = () => {
  const searchRef = useRef();
  const route = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // const handleSearchRequest = (e) => {
  //   e.preventDefault()
  //   route.push(`/search/${searchRef.current.value}`);
  // };

  const submitQuery = (e) => {
    e.preventDefault();
    const val = e.target;
    const search = val.searchAnime;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set("q", search.value);
    } else {
      newParams.delete("q");
    }

    route.push(createUrl(`/search`, newParams));
  };

  if (pathname == "/search") {
    return;
  }

  return (
    <form className="w-4/5 max-md:mx-auto sm:w-full" onSubmit={submitQuery}>
      <div className="relative">
        <div
          className="absolute z-10 right-0 top-0 mr-3 flex items-center justify-center h-full ml-2 rounded-lg hover:bg-foreground-lg duration-150 mx-auto"
          title="Search something"
        >
          <MagnifyingGlassIcon className="h-4" />
        </div>
        <input
          key={searchParams?.get("q")}
          type="text"
          name="searchAnime"
          autoComplete="off"
          id="global-search"
          className="w-full rounded-lg border pl-4 pr-8 py-2.5 hover:border-neutral-700 text-sm border-neutral-800 bg-transparent text-white placeholder:text-neutral-400 focus:outline-none focus:ring ring-gray-500 ring-inset duration-300 focus:bg-neutral-900"
          placeholder="Search..."
          defaultValue={""}
          ref={searchRef}
        />
      </div>
    </form>
  );
};

export default Search;
