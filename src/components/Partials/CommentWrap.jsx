import prisma from "@/source/database/prisma";
import { fullFormat, isMoreThanADay } from "@/source/time";

const CommentWrap = async ({ id }) => {
  const comments = await prisma.comments.findMany({
    where: {
      anime_mal_id: id,
    },
  });

  return (
    <div className="space-y-3">
      {comments.map((comment, index) => {
        const d = comment.created_at;
        const commentAt = isMoreThanADay(d);
        const precision = fullFormat(d);

        let star = [];
        let restStar = [];

        for (let i = 1; i < comment.score + 1; i++) {
          star.push(i);
        }
        restStar.push(5 - star.length);

        for (let i = 1; i < 5 - star.length; i++) {
          restStar.push(i);
        }
        return (
          <div className="flex items-start gap-2.5" key={index}>
            <img
              className="w-8 h-8 rounded-full"
              src={comment.user_image}
              alt="..."
            />
            <div className="flex flex-col w-full max-w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {comment.user_name}
                </span>
                <span
                  className="text-sm font-normal text-gray-500 dark:text-gray-400"
                  title={precision}
                >
                  {commentAt}
                </span>
              </div>
              <p
                className={`text-sm font-normal py-2.5 text-white ${
                  !comment.user_comment && "italic text-white/80"
                }`}
              >
                {(!comment.user_comment && "Empty review") ||
                  comment.user_comment}
              </p>
              <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                  {star.map((value, x) => (
                    <span key={x}>
                      {value <= star.length && (
                        <>
                          <svg
                            className="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        </>
                      )}
                    </span>
                  ))}
                  {restStar.map(
                    (r, y) =>
                      r != 0 && (
                        <span key={y} aria-label={r}>
                          <svg
                            className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        </span>
                      )
                  )}
                  {
                    // <svg
                    //   className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                    //   aria-hidden="true"
                    //   xmlns="http://www.w3.org/2000/svg"
                    //   fill="currentColor"
                    //   viewBox="0 0 22 20"
                    // >
                    //   <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    // </svg>
                  }
                  <p className="ms-1 font-medium text-gray-500 dark:text-gray-400">
                    {star.length}
                  </p>
                  <p className="ms-1 font-medium text-gray-500 dark:text-gray-400">
                    out of
                  </p>
                  <p className="ms-1 font-medium text-gray-500 dark:text-gray-400">
                    5
                  </p>
                </div>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentWrap;
