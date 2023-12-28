import AnimeGridWrap from "@/components/Wrapper/AnimeList";
import Header from "@/components/Wrapper/AnimeList/Header";
import { getOverview, refresh } from "../source/anime-api";
import { authSession } from "@/source/auth";
import Sidebar from "@/components/Layout/Sidebar";

const Page = async () => {
  const user = await authSession();
  // let relevantAnime = await getNestedResponse("recommendations/anime", "entry");
  // relevantAnime = refresh(relevantAnime, 14);
  // const { media } = await getAnimeBasedOn({
  //   order: ["TRENDING_DESC", "POPULARITY_DESC"],
  // });

  const overview = await getOverview({
    nextSeason: "WINTER",
    nextYear: 2024,
    season: "FALL",
    seasonYear: 2023,
  });

  const trendingAnime = overview.trending.media;
  const thisSeasonAnime = overview.season.media;
  const upcomingAnime = overview.nextSeason.media;
  const topAnime = overview.popular.media;

  return (
    <main className="px-5 min-[1760px]:px-36">
      <div className="container flex flex-row-reverse flex-wrap gap-x-7">
        <div className="mt-9 w-[calc(25%_-_1rem)] py-10 md:block hidden">
          <div className="sticky top-20 rounded-2xl bg-neutral-900 pb-8 pt-5 lg:flex lg:flex-col lg:justify-center">
            <Sidebar />
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
                  <Header text={"Trending now"} url={"/anime/trending"} />
                  <AnimeGridWrap api={trendingAnime} />
                </div>
              </div>
            </section>

            <section className="max-w-full py-12 mt-3 flex w-full flex-col items-center md:flex-row">
              <div className="w-full">
                <div className="cc relative">
                  <Header text={"Popular this season"} url={""} />
                  <AnimeGridWrap api={thisSeasonAnime} />
                </div>
              </div>
            </section>

            <section className="max-w-full pb-12 mt-3 flex w-full flex-col items-center md:flex-row">
              <div className="w-full">
                <div className="cc relative">
                  <Header
                    text={"Top Upcoming Anime"}
                    url={"/topanime/upcoming"}
                  />
                  <AnimeGridWrap api={upcomingAnime} />
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

            {/* <section className="max-w-full pb-12 mt-3 flex w-full flex-col items-center md:flex-row">
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
            </section> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
