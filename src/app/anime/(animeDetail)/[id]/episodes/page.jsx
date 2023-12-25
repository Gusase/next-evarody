import Img from "@/components/Ui/Img";
import { getAnimeResponse } from "@/source/anime-api";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";

const Page = async({ params : id }) => {
  const episodes = await getAnimeResponse(`anime/${id.id}/episodes`)

  console.log("🚀 ~ file: page.jsx:9 ~ Page ~ episodes:", `anime/${id.id}/episodes`)
  
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Img
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />
      </CardBody>
    </Card>
  );
};

export default Page;
