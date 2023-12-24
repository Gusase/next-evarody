import { getAnimeResponse } from "@/source/anime-api";
import HeadingTop from "@/components/Partials/HeadingTop";
import AnimeSearchList from "@/components/Wrapper/AnimeSearchWrap";
import Script from "next/script";

const Page = async ({ params }) => {
  const { query } = params;

  const animeResult = await getAnimeResponse("anime", `q=${query}`);

  return (
    <main className="overflow-hidden px-3 sm:px-10 lg:px-28 xl:px-32">
      <section className="mx-auto max-w-screen-2xl">
        <HeadingTop
          accent={"Search"}
          text={`Searching ${decodeURIComponent(query)}...`}
          page={false}
        />
        <AnimeSearchList api={animeResult} />
      </section>
    </main>
  );
};

export default Page;
