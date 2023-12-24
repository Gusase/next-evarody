import Link from "next/link";
import React from "react";

const NavigationDetail = ({ id }) => {
  return (
    <div className="sticky top-0 px-0 md:top-[calc(3%_-_1rem)] z-30 mx-auto mt-0 sm:-mt-16 sm:mb-8 max-w-[1600px] sm:px-[5vw] min-[2368px]:px-[1.5vw]">
      <div className="w-full bg-neutral-900/90 text-center text-sm font-medium text-gray-500 shadow-xl backdrop-blur-sm  dark:bg-[#121212]/90 dark:text-gray-400">
        <ul className="-mb-px flex overflow-x-auto 50-sm px-2 capitalize">
          <li className="mr-px px-1 py-2">
            <Link
              href={`/anime/${id}`}
              className="inline-block rounded px-2 py-1 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Details
            </Link>
          </li>
          <li className="mr-px whitespace-nowrap px-1 py-2">
            <Link
              href={`/anime/${id}`}
              className="inline-block rounded px-2 py-1 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Characters & Staff
            </Link>
          </li>
          <li className="mr-px px-1 py-2">
            <Link
              href={`/anime/${id}`}
              className="inline-block rounded px-2 py-1 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Videos
            </Link>
          </li>
          <li className="mr-px px-1 py-2">
            <Link
              href={`/anime/${id}`}
              className="inline-block rounded px-2 py-1 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Episodes
            </Link>
          </li>
          <li className="mr-px px-1 py-2">
            <Link
              href={`/anime/${id}`}
              className="inline-block rounded px-2 py-1 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white"
            >
              stats
            </Link>
          </li>
          <li className="mr-px px-1 py-2">
            <Link
              href={`/anime/${id}`}
              className="inline-block rounded px-2 py-1 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white"
            >
              reviews
            </Link>
          </li>
          <li className="mr-px px-1 py-2">
            <Link
              href={`/anime/${id}`}
              className="inline-block rounded px-2 py-1 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Pictures
            </Link>
          </li>
          <li className="mr-px px-1 py-2">
            <Link
              href={`/anime/${id}`}
              className="inline-block rounded px-2 py-1 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white"
            >
              News
            </Link>
          </li>
          <li className="mr-px px-1 py-2">
            <Link
              href={`/anime/${id}`}
              className="inline-block rounded px-2 py-1 hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Recommendations
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationDetail;
