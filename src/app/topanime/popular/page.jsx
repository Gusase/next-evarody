"use client";

import HeadingTop from "@/components/Partials/HeadingTop";
import Pagination from "@/components/Navigation/Pagination";
import AnimeSearchList from "@/components/Wrapper/AnimeSearchWrap";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "../../../source/anime-api";
import Loading from "../loading";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const dataAnime = async () => {
    const populer = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(populer);
  };

  useEffect(() => {
    dataAnime();
  }, [page]);

  return (
    <>
      <main className="overflow-hidden px-3 sm:px-10 lg:px-28 xl:px-32">
        <section className="mx-auto max-w-screen-2xl">
          <HeadingTop
            accent={"Anime"}
            text={"Most Popular Anime"}
            page={page}
          />
          <AnimeSearchList api={topAnime} />
          <Pagination
            current={page}
            total={topAnime.pagination?.last_visible_page}
            setPage={setPage}
          />
        </section>
      </main>
    </>
  );
};

export default Page;
