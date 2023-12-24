import { authSession } from "@/source/auth";
import prisma from "@/source/database/prisma";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: `Profile - ${process.env.NEXT_PUBLIC_APP_NAME}`,
};

const Page = async () => {
  const user = await authSession();

  return (
    <>
      <section className="relative isolate bg-[#202020] py-9 sm:-mx-4 lg:px-20 min-[2368px]:px-28 mx-auto w-full">
        <div className="flex flex-col items-center justify-between md:flex-row max-w-[110rem] mx-auto">
          <div className="flex w-full max-w-xl flex-col items-center gap-x-4 sm:flex-row sm:items-start sm:gap-x-6 lg:max-w-full xl:pl-6">
            <div className="min-w-0">
              <Image
                src={user.image}
                loading="lazy"
                decoding="async"
                alt="..."
                width={"0"}
                height={"0"}
                sizes="100vw"
                className="aspect-square w-20 rounded-full border-2 border-gray-300 object-cover p-1 sm:block sm:h-[8.3rem] sm:w-[8.3rem]"
              />
            </div>
            <div className="z-10 flex w-full flex-1 flex-col items-center justify-center gap-y-3 text-center sm:mt-2 sm:items-start sm:text-left md:gap-y-2.5">
              <div className="mt-1 md:mt-0">
                <a
                  href="#flnm"
                  data-sr=""
                  className="sr-only text-sm text-gray-100 focus:not-sr-only"
                >
                  Open fullname
                </a>
                <h1 className="font-mona mt-2 break-all text-2xl font-semibold leading-tight tracking-tight text-white duration-150 sm:mt-0 sm:text-4xl">
                  {user.name}
                </h1>
                <p className="font-poppins -mt-px pl-px font-light text-gray-300">
                  {user.email}
                </p>
              </div>
              <p className="inline-flex items-center gap-x-0.5 text-xs font-light text-slate-200 sm:gap-x-1 md:text-sm">
                Joined on Dec 02, 2023 // {user.created_at}
              </p>
              <div className="flex item-center space-x-2">
                <Link
                  href={"/user/dashboard/collections"}
                  className="z-10 inline-flex w-[calc(100%_-_2.5rem)] rounded-full bg-white px-4 py-1.5 text-sm font-normal text-neutral-950 transition hover:bg-neutral-200 min-[414px]:w-48 sm:w-max"
                >
                  <span className="relative top-px mx-auto">Collections</span>
                </Link>
                <Link
                  href={"/user/dashboard/comments"}
                  className="z-10 inline-flex w-[calc(100%_-_2.5rem)] rounded-full bg-white px-4 py-1.5 text-sm font-normal text-neutral-950 transition hover:bg-neutral-200 min-[414px]:w-48 sm:w-max"
                >
                  <span className="relative top-px mx-auto">Comments</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative mt-8 max-w-xl p-4 before:absolute before:left-0 before:top-0 before:h-px before:w-6 before:bg-gray-200 after:absolute after:left-8 after:right-0 after:top-0 after:h-px after:bg-gray-200/70 sm:mt-12 sm:w-full md:mt-0 md:before:hidden md:after:hidden lg:w-auto">
            <div className="flex w-full items-center max-md:justify-around max-md:gap-x-3">
              <div className="relative w-full rounded-lg p-4 text-center before:absolute before:left-0 before:top-0 before:hidden before:h-6 before:w-px before:bg-white after:absolute after:bottom-0 after:left-0 after:top-8 after:hidden after:w-px after:bg-white/30 max-md:ring-1 max-md:ring-gray-50/30 sm:py-5 sm:pl-8 sm:pr-7 md:before:block md:after:block">
                <h1 className="font-mona text-2xl font-semibold text-white sm:text-4xl font-s-125">
                  15
                </h1>
                <p className="font-poppins mt-2 text-[0.7rem] font-light text-gray-100 sm:text-sm">
                  Collections
                </p>
              </div>
              <div className="relative w-full rounded-lg p-4 text-center before:absolute before:left-0 before:top-0 before:hidden before:h-6 before:w-px before:bg-white after:absolute after:bottom-0 after:left-0 after:top-8 after:hidden after:w-px after:bg-white/30 max-md:ring-1 max-md:ring-gray-50/30 sm:py-5 sm:pl-8 sm:pr-7 md:before:block md:after:block">
                <h1 className="font-mona text-2xl font-semibold text-white sm:text-4xl font-s-125">
                  15
                </h1>
                <p className="font-poppins mt-2 text-[0.7rem] font-light text-gray-100 sm:text-sm">
                  Discuss
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="mt-2 space-y-8 px-2 py-6">
        <div>
          <div className="relative mb-5 pb-4 before:absolute before:bottom-0 before:left-0 before:h-px before:w-6 before:bg-gray-950 after:absolute after:bottom-0 after:left-8 after:right-0 after:h-px after:bg-gray-900/20">
            <h2 className="font-mona text-2xl font-medium leading-7 text-gray-900">
              Overview
            </h2>
          </div>
          <ul
            role="list"
            className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-3 text-sm sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
          >
            <li className="flex flex-col items-start gap-x-1.5 rounded-2xl border border-gray-200 p-7">
              <div className="h-8 w-8">
                <h2 className="font-mona text-3xl font-semibold font-s-125">
                  3
                </h2>
              </div>
              <h3 className="font-mona mt-2 font-normal text-gray-900">
                Image files
              </h3>
            </li>
            <li className="flex flex-col items-start gap-x-1.5 rounded-2xl border border-gray-200 p-7">
              <div className="h-8 w-8">
                <h2 className="font-mona text-3xl font-semibold font-s-125">
                  0
                </h2>
              </div>
              <h3 className="font-mona mt-2 font-normal text-gray-900">
                Video files
              </h3>
            </li>
            <li className="flex flex-col items-start gap-x-1.5 rounded-2xl border border-gray-200 p-7">
              <div className="h-8 w-8">
                <h2 className="font-mona text-3xl font-semibold font-s-125">
                  12
                </h2>
              </div>
              <div>
                <h3 className="font-mona mt-2 inline-block font-normal text-gray-900">
                  Other files
                </h3>
                <span className="font-mona ml-px text-xs font-normal text-gray-500/80">
                  Excluding Image and Video files{" "}
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <div className="relative mb-5 pb-4 before:absolute before:bottom-0 before:left-0 before:h-px before:w-6 before:bg-gray-950 after:absolute after:bottom-0 after:left-8 after:right-0 after:h-px after:bg-gray-900/20">
            <h2 className="font-mona text-2xl font-medium leading-7 text-gray-900">
              All file
            </h2>
          </div>
          <div className="-mx-px flex flex-wrap gap-y-4 md:-mx-6">
            <div className="w-full px-0 sm:w-2/4 md:w-3/12 md:px-8 2xl:w-2/12">
              <div className="h-full flex-col border-b border-gray-300 py-6">
                <div className="mt-px cursor-default">
                  <a
                    href="https://pro-roso.jp/ryyeii/file/60"
                    className="group grid h-40 place-items-center overflow-hidden bg-white"
                  >
                    <img
                      alt="aa linuxaa linuxaa linuxaa linuxaa linuxaa linuxaa linuxaa linuxaa linux"
                      className="h-[inherit] object-contain"
                      src="https://pro-roso.jp/storage/users/17/files/7a2eogYat9FT9lYCx74zPyK299BaYXt2eV2kn33h.jpg"
                    />
                  </a>
                </div>
                <div className="mt-2 space-y-1.5 px-3 py-2">
                  <a
                    href="https://pro-roso.jp/ryyeii/file/60"
                    className="font-mona relative isolate line-clamp-2 w-fit p-0.5 pb-0 text-lg font-medium text-gray-800 no-underline duration-150 before:absolute before:inset-0 before:-z-[1] before:block before:origin-bottom-right before:scale-x-0 before:bg-gray-300/75 before:transition-transform after:absolute after:bottom-0 after:left-[.05em] after:right-[.05em] after:-z-[1] after:block after:h-px after:origin-bottom-left after:scale-x-100 after:bg-gray-400 after:transition-transform hover:text-black hover:before:origin-bottom-left hover:before:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0"
                    title="aa linuxaa linuxaa linuxaa linuxaa linuxaa linuxaa linuxaa linuxaa linux"
                  >
                    aa linuxaa linuxaa linuxaa linuxaa linuxaa linuxaa linuxaa
                    linuxaa linux
                  </a>
                  <p className="font-mona -mt-2 line-clamp-2 w-full text-base font-light text-gray-600">
                    aa linuxaa linuxaa linuxaa linuxaa linuxaa linuxaa linuxaa
                    linuxaa linux
                  </p>
                  <p
                    className="font-mono text-base font-light leading-relaxed text-gray-500/80 antialiased"
                    title="Sunday, 10 December 2023 09:12:19"
                  >
                    December 10, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Page;
