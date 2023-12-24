"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import PrimaryButton from "../Ui/PrimaryButton";

const CollectButton = ({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
  text,
  collected,
  user_image,
}) => {
  const [isCreated, setIsCreated] = useState(false);
  const [isClick, setClick] = useState(false);
  const route = useRouter();
  let handleCollect;

  if (!collected) {
    handleCollect = async (e) => {
      alert('ok')
      e.preventDefault();

      setClick(true);

      const data = {
        anime_mal_id,
        user_email,
        user_image,
        anime_image,
        anime_title,
      };

      const response = await fetch("/api/v1/collection", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const collection = await response.json();

      if (collection.status === 401) {
        route.push("/api/auth/signin");
      }

      if (collection.created && collection.status === 200) {
        setIsCreated(true);
        setClick(false);
      }

      return;
    };

    text = isCreated ? "Collected" : text;
  }

  return (
    <PrimaryButton
      disable={collected || isCreated}
      className="mt-4 relative inline-flex items-center rounded-full active:scale-[.98] disabled:bg-white/80 disabled:cursor-not-allowed bg-white px-2 py-1.5 text-sm font-normal mx-auto sm:mx-0 text-neutral-950 transition hover:bg-neutral-200 min-[414px]:w-36 w-max"
      handleClick={handleCollect}
      load={isClick}
    >
      <div className="mx-auto">{text}</div>
    </PrimaryButton>
  );
};

export default CollectButton;
