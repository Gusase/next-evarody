const Pagination = ({ current, total, setPage }) => {
  const scrollTop = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  const handlePrevious = () => {
    setPage((setPage) => setPage - 1);
    scrollTop();
  };

  const handleNext = () => {
    setPage((setPage) => setPage + 1);
    scrollTop();
  };

  return (
    <>
      <nav
        role="navigation"
        aria-label="Pagination Navigation"
        className="flex items-center justify-between"
      >
        <div className="flex flex-1 justify-between">
          <div className="mt-3 gap-y-3 py-2 sm:flex sm:flex-1 sm:flex-col-reverse sm:items-center sm:justify-between">
            <ul className="flex items-center space-x-3 text-sm">
              {current <= 1 ? null : prev()}
              {current >= total ? null : next()}
            </ul>

            <div>
              <p className="text-sm leading-5 text-gray-200 space-x-2">
                <span className="font-semibold text-white">{current}</span>
                <span>Of</span>
                <span className="font-semibold text-white">{total}</span>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );

  function next() {
    return (
      <li>
        <div className="flex items-center justify-center">
          <button
            onClick={handleNext}
            className="more pointer-events-auto inline-flex h-12 items-center rounded-md bg-[#202020] px-6 text-sm font-semibold text-white duration-200 hover:bg-slate-900 dark:hover:bg-[#181818]"
          >
            Next 50
            <svg
              className="ml-1 h-3 w-3 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </button>
        </div>
      </li>
    );
  }

  function prev() {
    return (
      <li>
        <div className="flex items-center justify-center">
          <button
            onClick={handlePrevious}
            className="more pointer-events-auto inline-flex h-12 items-center rounded-md bg-[#202020] px-6 text-sm font-semibold text-white duration-200 hover:bg-slate-900 dark:hover:bg-[#181818]"
          >
            <svg
              className="mr-1 h-3 w-3 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
              />
            </svg>
            Prev 50
          </button>
        </div>
      </li>
    );
  }
};

export default Pagination;
