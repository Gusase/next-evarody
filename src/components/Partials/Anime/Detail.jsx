"use client";

import { getAnimeResponse } from "@/source/anime-api";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Detail = async ({ id, anime }) => {
  const [promoVideo, setPromoVideo] = useState(null);

  useEffect(() => {
    const fetchPromoVideo = async () => {
      const vp = await getAnimeResponse(`anime/${id}/videos`);
      setPromoVideo(vp?.data.promo[0]);
    };
    fetchPromoVideo();
  }, []);

  const data = anime;

  return (
    <>
      <div className="mx-auto mt-12 sm:mt-20 lg:flex lg:max-w-none">
        <div className="flex-1">
          <div>
            <h2
              id="synopys"
              className="text-3xl font-semibold tracking-tight text-white font-main scroll-mt-[calc(3.5rem+1rem)]"
            >
              Synopsis
            </h2>
            <p className="whitespace-pre-line mt-4 text-gray-300">
              {data.synopsis}
            </p>
          </div>
          <div className="mt-16">
            <h2 className="text-3xl font-semibold tracking-tight text-white font-main">
              Backgrounds
            </h2>
            <p className="whitespace-pre-line mt-4 text-gray-300">
              {data.background ? data.background : "No background provided"}
            </p>
          </div>
        </div>
        {promoVideo && (
          <div className="ml-3">
            <div className="h-[133px] w-[200px]">
              <Link
                href={promoVideo.trailer.url}
                className="group relative inline-flex aspect-video h-full w-full items-end rounded bg-cover bg-center bg-no-repeat shadow duration-150 dark:hover:brightness-125 overflow-hidden"
                style={{
                  backgroundImage: `url(
                      ${promoVideo.trailer.images.large_image_url}
                    )`,
                }}
              >
                <div className="absolute inset-0 rounded duration-150 group-hover:bg-black/10">
                  <span className="grid h-full place-items-center opacity-0 duration-150 group-hover:scale-110 group-hover:opacity-100">
                    <svg
                      className="h-6 w-6 text-white shadow-2xl"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 14 16"
                    >
                      <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z" />
                    </svg>
                  </span>
                </div>
                <span className="z-20 w-full bg-gradient-to-t from-black py-2 pl-1 text-sm text-white">
                  {promoVideo.title}
                </span>
              </Link>
              <small className="block text-right text-gray-400">
                <Link
                  href={`/anime/${id}/videos`}
                  className="hover:underline hover:underline-offset-2"
                ></Link>
                More videos
              </small>
            </div>
          </div>
        )}
      </div>

      <Accordion defaultExpandedKeys={["1"]}>
        <AccordionItem
          key="1"
          aria-label="Overview"
          title="Overview"
          classNames={{
            base: "-mx-2 mt-16",
            heading:
              "w-full data-[open=true]:border-gray-200 cursor-pointer border-b border-gray-400 font-medium text-gray-500 duration-150 hover:border-gray-500",
            title: "text-3xl",
          }}
        >
          <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
            <div className="rounded-sm bg-neutral-900 p-5 ring-1 ring-slate-900 duration-150 hover:shadow-md">
              <span className="block font-medium text-gray-50">
                Score&nbsp;
                <small className="text-gray-300/80">
                  {(data.scored_by &&
                    new Intl.NumberFormat("id").format(data.scored_by)) ||
                    "N/A"}
                  &nbsp;users
                </small>
              </span>
              <span
                className="text-lg md:text-2xl"
                title="based on the top anime page. Please note that 'Not yet aired' and 'R18+' titles are excluded."
              >
                <strong className="text-white">
                  {(data.score &&
                    new Intl.NumberFormat("id").format(data.score)) ||
                    "N/A"}
                </strong>
              </span>
            </div>
            <div className="rounded-sm bg-neutral-900 p-5 ring-1 ring-slate-900 duration-150 hover:shadow-md">
              <span className="block font-medium text-gray-50">Ranked</span>
              <span
                className="text-lg md:text-2xl"
                title="based on the top anime page. Please note that 'Not yet aired' and 'R18+' titles are excluded."
              >
                <strong className="text-white">
                  {(data.rank &&
                    new Intl.NumberFormat("id").format(data.rank)) ||
                    "N/A"}
                </strong>
              </span>
            </div>
            <div className="rounded-sm bg-neutral-900 p-5 ring-1 ring-slate-900 duration-150 hover:shadow-md">
              <span className="block font-medium text-gray-50">Popularity</span>
              <span className="text-lg md:text-2xl">
                <strong className="text-white">{data.popularity || "-"}</strong>
              </span>
            </div>
            <div className="rounded-sm bg-neutral-900 p-5 ring-1 ring-slate-900 duration-150 hover:shadow-md">
              <span className="block font-medium text-gray-50">Members</span>
              <span className="text-lg md:text-2xl">
                <strong className="text-white">
                  {(data.members &&
                    new Intl.NumberFormat("id").format(data.members)) ||
                    "-"}
                </strong>
              </span>
            </div>
            <div className="rounded-sm bg-neutral-900 p-5 ring-1 ring-slate-900 duration-150 hover:shadow-md">
              <span className="block font-medium text-gray-50">Favorites</span>
              <span
                className="text-lg md:text-2xl"
                title="based on the top anime page. Please note that 'Not yet aired' and 'R18+' titles are excluded."
              >
                <strong className="text-white">
                  {(data.favorites &&
                    new Intl.NumberFormat("id").format(data.favorites)) ||
                    "N/A"}
                </strong>
              </span>
            </div>
            <div className="rounded-sm bg-neutral-900 p-5 ring-1 ring-slate-900 duration-150 hover:shadow-md">
              <span className="block font-medium text-gray-50">
                Original Title
              </span>
              <span
                className={`text-lg md:${
                  data.title_japanese > 60 ? "text-xl" : "text-2xl"
                }`}
              >
                <strong className="text-white">
                  {data.title_japanese || "-"}
                </strong>
              </span>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Detail;
