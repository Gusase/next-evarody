"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-full my-28">
      <div className="mx-auto flex max-w-xl flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12">
        <h2 className="text-xl font-bold">Oh no!</h2>
        <p className="my-2">
          There was an issue with our server. This could be a temporary issue,
          please try your action again.
        </p>
        <button
          className="mx-auto mt-4 flex w-full items-center justify-center rounded-full bg-gray-900 p-4 tracking-wide text-white hover:opacity-90"
          onClick={() => reset()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
