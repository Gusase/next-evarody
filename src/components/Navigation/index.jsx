import Link from "next/link";
import Search from "./Search";
import LoginAction from "./LoginAction";

const Navigation = () => {
  return (
    <nav
      id="header"
      className="supports-backdrop-blur:bg-white/80 sticky top-0 z-20 w-full flex-none bg-black/80 py-4 backdrop-blur transition-all duration-500 border-slate-50/[0.06] sm:z-10 lg:z-50 lg:border-b lg:border-slate-900/10"
    >
      <div className="mx-auto flex max-w-[120rem] flex-wrap items-center md:px-12 justify-between">
        <div className="flex items-center gap-x-3">
          <Link
            href={"/"}
            className="flex items-center focus-within:outline-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:mr-5"
          >
            <span className="font-headin ml-5 self-center whitespace-nowrap text-xl font-semibold">
              {process.env.NEXT_PUBLIC_APP_NAME}
            </span>
          </Link>

          <div className="w-full items-center justify-between hidden md:flex md:w-auto">
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 dark:border-gray-700 md:mt-0 md:flex-row md:space-x-1 md:border-0 md:text-sm md:font-medium">
              <li>
                <Link
                  href={"/"}
                  className="block rounded py-2 pl-3 pr-4 m-link md:px-3 md:py-2"
                >
                  Top
                </Link>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="animTop"
                  data-dropdown-trigger=""
                  className="flex w-full items-center justify-between rounded py-2 pl-3 pr-4 m-link md:px-3 md:py-2"
                >
                  Top Anime
                  <svg
                    className="ml-2.5 h-2.5 w-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-x-2">
          <Search />

          <div className="flex items-center">
            <LoginAction />
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="mr-2 inline-flex items-center rounded-lg px-1 py-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
