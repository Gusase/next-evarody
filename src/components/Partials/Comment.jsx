"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Rating from "./Rating";

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
  const [isClick, setClick] = useState(false);
  const [score, setScore] = useState(null);
  const inputRef = useRef("");
  const warn = inputRef.current;

  useEffect(() => {
    isClick && warn.classList.add("hidden");
  }, [!isClick]);

  function handleWriteLength() {
    warn.textContent = `${user_comment.length} of 191 character`;
    user_comment.length == 0
      ? warn.classList.add("hidden")
      : warn.classList.remove("hidden");
    user_comment.length > 191
      ? warn.classList.add("!text-red-600")
      : warn.classList.remove("!text-red-600");
  }

  const handleValue = (e) => {
    setUserComment(e.target.value);
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
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            onChange={handleValue}
            onKeyUpCapture={handleWriteLength}
            id="comment"
            rows="4"
            value={user_comment}
            className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 focus:outline-none"
            placeholder="Write a comment..."
          ></textarea>
        </div>
        <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
          <div className="flex items-center gap-x-3">
            <button
              role="button"
              onClick={handlePost}
              disabled={
                user_comment.length <= 3 ||
                user_comment.length > 191 ||
                score == null
              }
              className={`inline-flex items-center rounded-full active:scale-[.98] disabled:bg-white/80 disabled:cursor-not-allowed bg-white px-4 py-1.5 text-sm font-normal mx-auto sm:mx-0 text-neutral-950 transition hover:bg-neutral-200 min-[414px]:w-36 w-max`}
            >
              {isClick ? (
                <div className="mx-auto">
                </div>
              ) : (
                <div className="mx-auto">Post comment</div>
              )}
            </button>
            <Rating setScore={setScore} clear={isClick} />
          </div>
          <p className="text-white text-xs" ref={inputRef}></p>
        </div>
      </div>
    </>
  );
};

export default Comment;
