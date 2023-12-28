import React from "react";
import { getCollections } from "@/source/anime-api";
import Link from "next/link";

const Sidebar = async () => {
  const genres = await getCollections("genres");

  return (
    <>
      <h4 className="mb-4 px-5 text-xl font-bold text-white 2xl:text-2xl">
        Genre
      </h4>
      <div className="flex flex-wrap gap-1 px-5">
        {genres.map((genre) => {
          return (
            <Link
              href={"/"}
              className="basis-auto rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm duration-150 hover:scale-[.98] hover:bg-gray-700 focus:outline-none 2xl:text-base"
            >
              {genre}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
