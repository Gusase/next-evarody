import Image from "next/image";
import Link from "next/link";
import prisma from "@/source/database/prisma";
import { authSession } from "@/source/auth";
import Img from "@/components/Ui/Img";

const Page = async () => {
  const user = await authSession();
  const collection = await prisma.collections.findMany({
    where: { user_email: user.email },
  });

  return (
    <>
      <div className="container px-6 sm:px-16 min-h-screen">
        <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

        <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {collection.map((c, index) => {
            return (
              <div key={index} className="group relative place-self-start">
                  <Img
                    className="h-full w-full object-cover object-center"
                    src={c.anime_image}
                  />
                <h3 className="mt-6 text-sm text-gray-100">
                  <a href={c.href}>
                    <span className="absolute inset-0" />
                    {c.anime_title}
                  </a>
                </h3>
                {/* <p className="text-base font-semibold text-gray-900">{c.description}</p> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Page;
