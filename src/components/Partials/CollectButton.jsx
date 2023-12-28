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
  const [collect, setCollect] = useState(false);
  const [isClick, setClick] = useState(false);
  const route = useRouter();
  let handleCollect;

  handleCollect = async (e) => {
    e.preventDefault();

    setClick(true);

    const data = {
      anime_mal_id,
      user_email,
      user_image,
      anime_image,
      anime_title,
      action: collected,
    };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const collection = await response.json();

    if (collection.status === 401) {
      route.push("/api/auth/signin");
    }

    if (collection.created || collection.deleted) {
      route.refresh();
      collection.deleted ? setCollect(false) : setCollect(true);
      setClick(false);
    }
    return;
  };

  text = collect ? "Collected" : text;
  return (
    <PrimaryButton
      className="relative inline-flex items-center rounded-full active:scale-[.98] disabled:bg-white/80 disabled:cursor-not-allowed bg-white px-2 py-1.5 text-sm font-normal mx-auto sm:mx-0 text-neutral-950 transition hover:bg-neutral-200 min-[414px]:w-36 w-max"
      handleClick={handleCollect}
      load={isClick}
    >
      <div className="text-center">{text}</div>
    </PrimaryButton>
  );
};

export default CollectButton;
