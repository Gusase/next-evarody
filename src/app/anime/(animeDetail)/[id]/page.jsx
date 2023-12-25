import { getAnimeResponse } from "@/source/anime-api";
import { authSession } from "@/source/auth";
import Comment from "@/components/Partials/Comment";
import CommentWrap from "@/components/Partials/CommentWrap";
import Detail from "@/components/Partials/Anime/Detail";

const Page = async ({ params: { id } }) => {
  const { data } = await getAnimeResponse(`anime/${id}`); //get data prop from api
  const user = await authSession();

  return (
    <>
      <Detail id={id} anime={data} />

      <div className="max-w-5xl mx-auto">
        <div className="my-5">
          <CommentWrap id={id} />
        </div>

        {user && (
          <Comment
            anime_image={data.images.webp.large_image_url}
            anime_title={data.title_english || data.title}
            user_email={user?.email}
            user_name={user?.name}
            user_image={user?.image}
            anime_mal_id={id}
          />
        )}
      </div>
    </>
  );
};

export default Page;
