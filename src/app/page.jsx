import AnimeGridWrap from "@/components/Wrapper/AnimeList";
import Header from "@/components/Wrapper/AnimeList/Header";
import Script from "next/script";
import {
  getAnimeResponse,
  getNestedResponse,
  refresh,
} from "../source/anime-api";
import { authSession } from "@/source/auth";

const Page = async () => {
  const user = await authSession();
  let relevantAnime = await getNestedResponse("recommendations/anime", "entry");
  relevantAnime = refresh(relevantAnime, 14);
  const seasonNowAnime = await getAnimeResponse("seasons/now", "limit=14");
  const seasonDataName = seasonNowAnime && `${seasonNowAnime.data[0].season} ${seasonNowAnime.data[0].year} Anime`
  const topAnime = await getAnimeResponse("top/anime", "limit=14");
  const topUpcoming = await getAnimeResponse("top/anime", "limit=14&filter=upcoming");
  const topAiring = await getAnimeResponse("top/anime", "limit=14&filter=airing");
  const topSpecial = await getAnimeResponse("top/anime", "limit=14&type=special");
  const topMovie = await getAnimeResponse("top/anime", "limit=14&type=movie");

  return (
    <main className="px-5 min-[1760px]:px-36">
      <div className="container flex flex-row-reverse flex-wrap gap-x-7">
        <div className="mt-9 w-[calc(25%_-_1rem)] py-10">
          <div className="sticky top-20 rounded-2xl bg-[#232323] pb-8 pt-5 lg:flex lg:flex-col lg:justify-center">
            <h4 className="mb-4 px-5 text-xl font-bold text-white 2xl:text-2xl">
              Genre
            </h4>
            <div className="flex flex-wrap gap-1 px-5">
              <a className="basis-auto rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm duration-150 hover:scale-[.98] hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white 2xl:text-base">
                oke
                <span className="ml-px rounded bg-white px-2 py-0.5 text-xs font-medium text-black"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="w-[calc(75%_-_0.875rem)]">
          <div className="px-3 bg-none">
            <div className="my-10">
              <h3 className="text-2xl md:text-3xl font-semibold font-s-100">
                {user
                  ? `Hi, ${user.name}`
                  : `Welcome to ${process.env.NEXT_PUBLIC_APP_NAME}!`}
              </h3>
            </div>
            <section className="max-w-full py-12 mt-3 flex w-full flex-col items-center md:flex-row">
              <div className="w-full">
                <div className="cc relative">
                  <Header text={seasonDataName} url={"/anime/seasonal"} />
                  <AnimeGridWrap api={seasonNowAnime} />
                </div>
              </div>
            </section>

            <section className="max-w-full py-12 mt-3 flex w-full flex-col items-center md:flex-row">
              <div className="w-full">
                <div className="cc relative">
                  <Header text={"Recommendations"} url={""} />
                  <AnimeGridWrap api={relevantAnime} />
                </div>
              </div>
            </section>

            <section className="max-w-full pb-12 mt-3 flex w-full flex-col items-center md:flex-row">
              <div className="w-full">
                <div className="cc relative">
                  <Header text={"Most popular"} url={"/topanime/popular"} />
                  <AnimeGridWrap api={topAnime} />
                </div>
              </div>
            </section>

            <section className="max-w-full pb-12 mt-3 flex w-full flex-col items-center md:flex-row">
              <div className="w-full">
                <div className="cc relative">
                  <Header text={"Top Upcoming Anime"} url={"/topanime/upcoming"} />
                  <AnimeGridWrap api={topUpcoming} />
                </div>
              </div>
            </section>

            <section className="max-w-full pb-12 mt-3 flex w-full flex-col items-center md:flex-row">
              <div className="w-full">
                <div className="cc relative">
                  <Header text={"Top Airing Anime"} url={""} />
                  <AnimeGridWrap api={topAiring} />
                </div>
              </div>
            </section>

            <section className="max-w-full pb-12 mt-3 flex w-full flex-col items-center md:flex-row">
              <div className="w-full">
                <div className="cc relative">
                  <Header text={"Top Movies"} url={""} />
                  <AnimeGridWrap api={topMovie} />
                </div>
              </div>
            </section>

            <section className="max-w-full pb-12 mt-3 flex w-full flex-col items-center md:flex-row">
              <div className="w-full">
                <div className="cc relative">
                  <Header text={"Specials"} url={""} />
                  <AnimeGridWrap api={topSpecial} />
                </div>
              </div>
            </section>

            <Script src={"js/load.js"}></Script>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
