import { getAnimeResponse } from "@/source/anime-api";
import { authSession } from "@/source/auth";
import NavigationDetail from "@/components/Partials/Anime";
import CollectButton from "@/components/Partials/CollectButton";
import Img from "@/components/Ui/Img";
import Link from "next/link";
import { Chip } from "@nextui-org/react";
import Hr from "@/components/Ui/Divider";
import ModalBox from "@/components/Ui/Modal";
import React from "react";

const Jumbotron = async ({ id }) => {
  const Media = await getAnimeResponse(id, "Media"); //get data prop from api

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

  const img = Media.coverImage.large;
  const banner = Media.bannerImage;
  return (
    <>
      <header
        style={{
          backgroundImage: `url(${banner})`,
        }}
        className="overlay-img container relative isolate bg-left bg-no-repeat px-[5vw] max-md:!bg-none py-3 md:py-12 bg-[#121212] min-[2368px]:px-[1.5vw]"
      >
        <div className="absolute inset-x-0 top-0 block md:hidden md:invisible -z-[1]">
          <div className="relative h-48">
            <Img
              src={banner}
              alt="..."
              radius={"none"}
              className="block md:hidden md:invisible h-full w-full object-cover"
            />
            <div className="absolute bg-gradient-to-t from-[#141414] inset-0 z-10"></div>
          </div>
        </div>
        <div className="txt flex flex-col z-30 min-w-full max-md:mt-32 sm:min-w-[500px]">
          <div className="aspc w-40 md:w-52">
            <Link
              href="https://anime.jp/anime/30/shinseiki_evangelion/pics"
              className="block h-full"
            >
              <Img
                src={img}
                alt="Poster"
                title={Media.title.romaji || Media.title.english}
                className="h-auto max-w-full hover:brightness-105 bg-gray-800"
                id="image"
                radius={"none"}
              />
            </Link>
          </div>
          <div className="mb-6 mt-4">
            <p className="text-2xl mt-3 font-headin font-semibold leading-8 text-white">
              {Media.title.romaji || Media.title.english}
            </p>
            <div className="mt-4 flex space-x-2.5 text-xs items-center h-5">
              <span className="inline-block text-sm text-slate-300">
                {Media.seasonYear || "?"}
              </span>
              <Hr orientaion={"vertical"} className={"bg-slate-400"} />
              <span className="inline-block text-sm text-slate-300">
                {Media.format}
              </span>
              <Hr orientaion={"vertical"} className={"bg-slate-400"} />
              <Chip
                variant="dot"
                classNames={{
                  base: "inline-flex text-sm text-slate-300 border border-gray-600 px-1 py-0",
                  dot: "bg-white/90 inline-block",
                }}
              >
                <span className="sr-only">{`Anime ${
                  Media.title.romaji || Media.title.english
                }`}</span>
                {Media.status.replaceAll("_", " ")}
              </Chip>
            </div>
            <p className="pt-4 text-base font-normal leading-5 text-white max-w-full line-clamp-3">
              {Media.description.replaceAll(/(<([^>]+)>)/gi, " ")}
            </p>
            <div className="space-x-3 mt-4">
              <CollectButton
                anime_mal_id={id}
                anime_image={img}
                anime_title={Media.title.romaji || Media.title.english}
                user_email={user?.email}
                text={collected ? "Collected" : "Collect"}
                collected={collected ? "delete" : "create"}
              />
              {Media.trailer && (
                <ModalBox
                  className={
                    "relative mx-auto inline-flex w-max items-center rounded-full bg-transparent px-2 py-1.5 text-sm font-normal text-gray-50 ring-1 ring-inset ring-white duration-500 hover:ring-2 active:scale-[.98] disabled:cursor-not-allowed min-[414px]:w-36 sm:mx-0"
                  }
                  header={`Trailer: ${
                    Media.title.english || Media.title.romaji
                  }`}
                  content={"embed"}
                  id={Media.trailer.id}
                  footer={true}
                >
                  Watch Trailer
                </ModalBox>
              )}
            </div>
            {!user && (
              <p className="text-white text-xs mt-3 border-l pl-2 border-gray-300">
                You must signin to collect this anime
              </p>
            )}
          </div>
        </div>
        <div className="header-sec absolute inset-y-0 left-0 w-2/5 z-10 hidden md:block"></div>
      </header>

      <NavigationDetail id={id} />
    </>
  );
};

export default Jumbotron;
