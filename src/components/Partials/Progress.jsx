"use client";

import NextTopLoader from "nextjs-toploader";

const Progress = () => {
  return (
    <NextTopLoader
      color="#fff"
      height={2}
      shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      showSpinner={false}
    />
  );
};

export default Progress;
