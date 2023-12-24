"use client";

import HeadingTop from "@/components/Partials/HeadingTop";
import Pagination from "@/components/Navigation/Pagination";
import AnimeSearchList from "@/components/Wrapper/AnimeSearchWrap";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "../../../source/anime-api";

const Page = () => {
  const [page, setPage] = useState(1);
  const [seasonal, setSeasonal] = useState([]);

  const dataAnime = async () => {
    const season = await getAnimeResponse("seasons/now", `page=${page}`);
    setSeasonal(season);
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
            text={"fall 2023 Anime"}
            page={page}
          />
          <AnimeSearchList api={seasonal} />
          <Pagination
            current={page}
            total={seasonal.pagination?.last_visible_page}
            setPage={setPage}
          />
        </section>
      </main>
    </>
  );
};

export default Page;
