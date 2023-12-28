import Img from "@/components/Ui/Img";
import { getAnimeEps, getAnimeResponse } from "@/source/anime-api";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export async function generateMetadata({ params }) {
  const Media = await getAnimeResponse(params.id, "Media");

  if (!Media) return redirect("/");

  return {
    title: `Episodes - ${Media.title.romaji || Media.title.english} - ${
      process.env.NEXT_PUBLIC_APP_NAME
    }`,
  };
}

const Page = async ({ params: id }) => {
  const { streamingEpisodes } = await getAnimeEps(id.id, "Media");
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 lg:grid-cols-4 min-[1761px]:grid-cols-5 lg:-mx-12 2xl:-mx-28 pb-32 pt-20">
      {streamingEpisodes.length == 0 && (
        <div className="text-center col-span-full to-gray-300">
          No epsisode to display.
        </div>
      )}
      {streamingEpisodes.map((eps) => (
        <Link key={eps.title} href={eps.url} className="group">
          <Card
            radius="none"
            className="bg-inherit shadow-none hover:shadow-gray-600"
          >
            <CardBody className="aspect-w-16 aspect-h-9 p-0">
              <Img
                alt={eps.title}
                radius={"none"}
                className="object-cover w-full h-full"
                src={eps.thumbnail}
              />
            </CardBody>
            <CardFooter className="flex flex-col items-start px-0 space-y-1.5">
              <h3 className="text-base font-medium">{eps.title}</h3>
              <p className="text-sm font-normal text-gray-400">{eps.site}</p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Page;
