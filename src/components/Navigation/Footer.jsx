import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto max-w-7xl pb-12 px-12">
      <div className="flex flex-col justify-center items-center gap-1">
        <span className="text-sm text-gray-500 text-center dark:text-gray-400">
          © 2023{" "}
          <Link href="/" className="m-link__underline">
            {process.env.NEXT_PUBLIC_APP_NAME}
          </Link>
        </span>
        <Link
          className="relative transition-opacity flex justify-end items-center gap-2 mt-3"
          tabIndex={0}
          role="link"
          href="https://www.vercel.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <p className="font-normal">Deployed on</p>
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert scale-90"
            width={100}
            height={24}
            priority
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
