import React from "react";

export default function Loading() {
  return (
    <main className="animate-pulse overflow-hidden px-3 sm:px-10 lg:px-28 xl:px-32 mb-14">
      <section className="mx-auto max-w-screen-2xl">
        <p className="-mb-3 mt-6 text-base text-gray-100 md:mt-12">
          <div className="inline-block h-3 w-20 rounded bg-gray-700"></div>
        </p>
        <h1 className="font-headin my-2 mb-8 mt-2.5 text-4xl font-extrabold capitalize tracking-tight text-white sm:mb-10 lg:mb-12">
          <div className="inline-block h-16 w-44 rounded bg-gray-700"></div>
          <div className="inline-block h-10 w-9 rounded bg-gray-700 ml-3"></div>
        </h1>
        <div className="h-px border-t-2 border-gray-600/90"></div>
        <div className="mt-9 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4 lg:grid-cols-5 lg:gap-x-9 lg:gap-y-8 2xl:grid-cols-6">
          {Array.from({ length: 7 }, (v,i) => {
            return (
              <div key={i}>
                <div className="aspect-[2_/_3] w-full">
                  <div className="inline-block h-full w-full rounded bg-gray-700"></div>
                </div>
                <div className="inline-block h-5 w-24 rounded bg-gray-700 mt-2"></div>
              </div>
            );
          })}
        </div>
        <nav
          role="navigation"
          aria-label="Pagination Navigation"
          className="flex items-center justify-between mt-3"
        >
          <div className="flex flex-1 justify-between">
            <div className="mt-3 gap-y-3 py-2 sm:flex sm:flex-1 sm:flex-col-reverse sm:items-center sm:justify-between">
              <ul className="flex items-center space-x-3 text-sm">
                <li>
                  <div className="flex items-center justify-center">
                    <button
                      onClick="{handleNext}"
                      className="more pointer-events-auto inline-flex h-12 items-center rounded-md bg-[#202020] px-5"
                    >
                      <div className="inline-block h-4 w-20 rounded bg-gray-700"></div>
                    </button>
                  </div>
                </li>
              </ul>

              <div>
                <p className="space-x-3 text-sm leading-5 text-gray-500">
                  <div className="inline-block h-4 w-14 rounded bg-gray-700"></div>
                  <span className="inline-block mx-1">Of</span>
                  <div className="inline-block h-4 w-14 rounded bg-gray-700"></div>
                </p>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </main>
  );
}
