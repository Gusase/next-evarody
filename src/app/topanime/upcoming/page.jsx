"use client";

import HeadingTop from "@/components/Partials/HeadingTop";
import Pagination from "@/components/Navigation/Pagination";
import AnimeSearchList from "@/components/Wrapper/AnimeSearchWrap";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "../../../source/anime-api";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topUpcoming, setTopUpcoming] = useState([]);

  const dataAnime = async () => {
    const upcoming = await getAnimeResponse("top/anime", `&filter=upcoming&page=${page}`);
    setTopUpcoming(upcoming);
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
            text={"Top Upcoming Anime"}
            page={page}
          />
          <AnimeSearchList api={topUpcoming} />
          <Pagination
            current={page}
            total={topUpcoming.pagination?.last_visible_page}
            setPage={setPage}
          />
        </section>
      </main>
    </>
  );
};

export default Page;
