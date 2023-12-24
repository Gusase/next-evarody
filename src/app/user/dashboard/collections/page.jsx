import Image from "next/image";
import Link from "next/link";
import prisma from "@/source/database/prisma";
import { authSession } from "@/source/auth";

const Page = async () => {
  const user = await authSession();
  const collection = await prisma.collections.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4 px-4 w-full">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {collection.map((c, index) => {
          return (
            <Link
              key={index}
              href={`/anime/${c.anime_mal_id}`}
              className="relative"
            >
              <Image
                src={c.anime_image}
                alt=""
                width={350}
                height={350}
                className="w-full"
              />
              <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
                <h5 className="text-xl text-center">{c.anime_title}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
