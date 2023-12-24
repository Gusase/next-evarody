import { getAnimeResponse } from "@/source/anime-api";
import Image from "next/image";
import Link from "next/link";
import CollectButton from "@/components/Partials/CollectButton";
import { authSession } from "@/source/auth";
import prisma from "@/source/database/prisma";
import Comment from "@/components/Partials/Comment";
import CommentWrap from "@/components/Partials/CommentWrap";
import NavigationDetail from "@/components/Partials/Anime";
import Detail from "@/components/Partials/Anime/Detail";

const Page = async ({ params: { id } }) => {
  const { data } = await getAnimeResponse(`anime/${id}`); //get data prop from api
  const image = await getAnimeResponse(`anime/${id}/pictures`);
  const rand =image &&image.data[Math.floor(Math.random() * image.data.length)].jpg.large_image_url;
  const user = await authSession();
  let collected = false;

  if (user) {
    collected = await prisma.collections.findFirst({
      where: {
        AND: [
          {
            user_email: user.email,
          },
          {
            anime_mal_id: id,
          },
        ],
      },
    });
  }

  const img = data.images.webp.large_image_url;
  return (
    <>
      <header
        style={{
          backgroundImage: `url(${rand})`,
        }}
        className="overlay-img container relative isolate bg-cover bg-center bg-no-repeat px-[5vw] max-md:!bg-none py-3 md:py-12 bg-[#121212] min-[2368px]:px-[1.5vw]"
      >
        <div className="absolute inset-x-0 top-0 block md:hidden md:invisible -z-[1]">
          <div className="relative h-48">
            <Image
              src={rand}
              width={"0"}
              height={"0"}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              alt=""
              className="block md:hidden md:invisible h-full w-full object-cover"
            />
            <div className="absolute bg-gradient-to-t from-[#141414] inset-0"></div>
          </div>
        </div>
        <div className="txt flex flex-col z-30 min-w-full sm:min-w-[500px]">
          <div className="aspc w-40 md:w-52">
            <Link
              href="https://anime.jp/anime/30/shinseiki_evangelion/pics"
              className="block h-full"
            >
              <Image
                src={img}
                alt="Poster"
                title={data.title_english || data.title}
                className="h-auto max-w-full hover:brightness-105 bg-gray-800"
                width={"0"}
                height={"0"}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                id="image"
              />
            </Link>
          </div>
          <div className="mb-6 mt-4">
            <p className="text-2xl mt-3 font-headin font-semibold leading-8 text-white">
              {data.title_english || data.title}
            </p>
            <div className="mt-4 flex space-x-2 text-xs items-center">
              <span className="inline-block text-sm text-slate-300">
                {data.year || "?"}
              </span>
              <span className="text-slate-300">|</span>
              <span className="inline-block text-sm text-slate-300">
                {data.type}
              </span>
              <span className="text-slate-300">|</span>
              <span className="inline-block text-sn text-slate-300 border border-gray-500 px-1.5 py-px">
                <span className="sr-only">Rating Usia:</span>
                {data.rating}
              </span>
            </div>
            <p className="pt-4 text-base font-normal leading-5 text-white max-w-full line-clamp-4">
              {data.synopsis}
            </p>
            {collected ? (
              <CollectButton text={"Collected"} collected={true} />
            ) : (
              <CollectButton
                anime_mal_id={id}
                anime_image={img}
                anime_title={data.title_english || data.title}
                user_email={user?.email}
                text={"Collect"}
                collected={false}
              />
            )}
            {!user && (
              <p className="text-white text-xs mt-3 border-l pl-2 border-gray-300">
                You must signin to collect this anime
              </p>
            )}
          </div>
        </div>
        <div className="header-sec absolute inset-y-0 left-0 w-2/5 z-10 hidden md:block"></div>
      </header>

      <NavigationDetail id={id}/>

      <main className="mx-auto sm:px-10 md:px-28 lg:px-32 max-w-[1600px] px-[5vw] min-[2368px]:px-[1.5vw]">
          <Detail id={id} anime={data}/>
      </main>

      <div className="max-w-5xl mx-auto">
        <div className="my-5">
          <CommentWrap id={id} />
        </div>

        {user && (
          <Comment
            anime_image={img}
            anime_title={data.title_english || data.title}
            user_email={user?.email}
            user_name={user?.name}
            user_image={user?.image}
            anime_mal_id={id}
          />
        )}
      </div>
    </>
  );
};

export default Page;
