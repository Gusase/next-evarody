"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Rating from "./Rating";
import { Textarea } from "@nextui-org/react";
import PrimaryButton from "../Ui/PrimaryButton";

const Comment = ({
  anime_mal_id,
  user_email,
  user_name,
  user_image,
  anime_image,
  anime_title,
}) => {
  const route = useRouter();
  const [user_comment, setUserComment] = useState("");
  const [invalid, isInvalid] = useState(false);
  const [isClick, setClick] = useState(false);
  const [score, setScore] = useState(null);

  const handleWriteLength = (e) => {
    let txt = e.target.value;
    txt.trim().length > 191 ? isInvalid(true) : isInvalid(false);
  };

  const handleValue = (value) => {
    setUserComment(value);
  };

  const handlePost = async (e) => {
    e.preventDefault();
    setClick(true);

    const data = {
      anime_mal_id,
      user_email,
      user_name,
      user_image,
      user_comment: !user_comment.trim().length ? null : user_comment,
      anime_image,
      anime_title,
      score,
    };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const commentResponse = await response.json();

    if (commentResponse.created && commentResponse.status === 200) {
      setUserComment("");
      setClick(false);
      route.refresh();
    }

    return;
  };

  return (
    <>
      <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
          <Textarea
            variant="bordered"
            label="Your comment"
            labelPlacement="outside"
            placeholder="Write a comment..."
            disableAutosize
            value={user_comment}
            classNames={{
              errorMessage: invalid ? "block" : "hidden",
              input: "resize-y min-h-[40px]",
            }}
            description="Your comment must be less than 191 chars and greater than 20 chars"
            className="w-full px-0 text-sm border-0 bg-gray-800 focus:ring-0 text-white placeholder-gray-400 focus:outline-none"
            errorMessage={`Your comments too long. (${user_comment.length} of 191)`}
            isInvalid={invalid}
            onValueChange={handleValue}
            onChange={handleWriteLength}
          />
        </div>
        <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
          <div className="flex items-center gap-x-3">
            <PrimaryButton load={isClick} handleClick={handlePost} disable={ user_comment.length <= 3 || user_comment.length > 191 || score == null} className={'inline-flex items-center rounded-full active:scale-[.98] disabled:bg-white/80 disabled:cursor-not-allowed bg-white px-2 py-1 text-sm font-normal mx-auto sm:mx-0 text-neutral-950 transition hover:bg-neutral-200 min-[414px]:w-36 w-max'}>
                <div className="text-center">Post comment</div>
            </PrimaryButton>
            <Rating setScore={setScore} clear={isClick} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
