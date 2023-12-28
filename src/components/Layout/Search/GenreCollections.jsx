import React from "react";
import Hr from "@/components/Ui/Divider";
import Card from "@/components/Ui/Card";
import { getCollections } from "@/source/anime-api";

const GenreCollections = async () => {
  const genres = await getCollections("genres");
  return (
    <>
      <div class="grid grid-cols-1 gap-8 text-center lg:grid-cols-5">
        {genres.map((genre) => {
          return (
            <Card>
              <span className="block font-medium text-gray-200">Genre</span>
              <span
                className="text-lg md:text-2xl"
              >
                <strong className="text-white font-s-125">{genre}</strong>
              </span>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default GenreCollections;
