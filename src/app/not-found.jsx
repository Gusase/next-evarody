"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const route = useRouter();
  return (
    <div>
      <div className="h-screen text-center flex flex-col items-center justify-center">
        <div>
          <h1 className="next-error-h1 inline-block mr-5 pr-6 text-2xl font-medium leading-tight">
            404
          </h1>
          <div className="inline-block">
            <h2 className="text-sm font-normal leading-tight m-0">
              This page could not be found.
            </h2>
          </div>
        </div>
        <div className="mt-4 text-base">
          <Link
            href={"#"}
            className="m-link__underline"
            onClick={() => route.back()}
          >
            Return
          </Link>
        </div>
      </div>
    </div>
  );
}
