"use client";

import Card from "@/components/Ui/Card";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Detail = async ({ anime }) => {
  const Media = anime;

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
            <p
              className="mt-4 text-gray-300"
              dangerouslySetInnerHTML={{ __html: Media.description }}
            ></p>
          </div>
        </div>
      </div>

      <Accordion defaultExpandedKeys={["1"]}>
        <AccordionItem
          key="1"
          aria-label="Overview"
          title="Overview"
          classNames={{
            base: "-mx-2 mt-16",
            heading:
              "w-full Media-[open=true]:border-gray-200 cursor-pointer border-b border-gray-400 font-medium text-gray-2000 duration-150 hover:border-gray-500",
            title: "text-3xl",
          }}
        >
          <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
            <Card>
              <span className="block font-medium text-gray-200">
                Average Score
              </span>
              <span
                className="text-lg md:text-2xl"
                title="based on the top anime page. Please note that 'Not yet aired' and 'R18+' titles are excluded."
              >
                <strong className="text-white font-s-125">
                  {(Media.averageScore && `${Media.averageScore}%`) || "N/A"}
                </strong>
              </span>
            </Card>
            <Card>
              <span className="block font-medium text-gray-200">
                Rank&nbsp;
                <small className="text-gray-300/80">
                  {((Media.rankings.length != 0 && Media.rankings[1] && Media.rankings[1].context || '') + " " + ((Media.status == "NOT_YET_RELEASED" && Media.seasonYear) || "")) + ` (${Media.format})` || "-"}
                </small>
              </span>
              <span
                className="text-lg md:text-2xl"
                title="based on the top anime page. Please note that 'Not yet aired' and 'R18+' titles are excluded."
              >
                <strong className="text-white font-s-125">
                  {(Media.rankings[1] && Media.rankings[1].rank) || "N/A"}
                </strong>
              </span>
            </Card>
            <Card>
              <span className="block font-medium text-gray-200">
                Popularity
              </span>
              <span className="text-lg md:text-2xl">
                <strong className="text-white font-s-125">
                  {Media.popularity || "-"}
                </strong>
              </span>
            </Card>
            <Card>
              <span className="block font-medium text-gray-200">Favorites</span>
              <span
                className="text-lg md:text-2xl"
                title="based on the top anime page. Please note that 'Not yet aired' and 'R18+' titles are excluded."
              >
                <strong className="text-white font-s-125">
                  {(Media.favourites &&
                    new Intl.NumberFormat("id").format(Media.favourites)) ||
                    "N/A"}
                </strong>
              </span>
            </Card>
            <Card>
              <span className="block font-medium text-gray-200">Season</span>
              <span className="text-lg md:text-2xl">
                <strong className="text-white font-s-125 !capitalize">
                  {`${Media.season} ${Media.seasonYear}` || "-"}
                </strong>
              </span>
            </Card>
            <Card>
              <span className="block font-medium text-gray-200">
                Original Title
              </span>
              <span
                className={`text-lg md:${
                  Media.title.native > 60 ? "text-xl" : "text-2xl"
                }`}
              >
                <strong className="text-white font-s-125">
                  {Media.title.native || "-"}
                </strong>
              </span>
            </Card>
          </div>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Detail;
