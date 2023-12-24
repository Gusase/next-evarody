const HeadingTop = ({ accent, text, page }) => {
  return (
    <>
      <p className="-mb-3 mt-6 text-base text-gray-100 md:mt-12">{accent}</p>
      <h1 className="my-2 mb-8 mt-3 font-headin text-4xl font-extrabold capitalize tracking-tight text-white sm:mb-10 lg:mb-12 lg:text-5xl">
        {text}
        {page == false ? null : (
          <small className="ml-2 font-semibold text-gray-500 dark:text-gray-400">
            {`#${page}`}
          </small>
        )}
      </h1>
      <div className="border-t-2 h-px border-gray-300/90"></div>
    </>
  );
};

export default HeadingTop;
