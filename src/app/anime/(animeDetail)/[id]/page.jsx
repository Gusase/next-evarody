import { getAnimeResponse } from "@/source/anime-api";
import { authSession } from "@/source/auth";
import Comment from "@/components/Partials/Comment";
import CommentWrap from "@/components/Partials/CommentWrap";
import Detail from "@/components/Partials/Anime/Detail";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }) {
  const Media = await getAnimeResponse(params.id, "Media");

  if (!Media) return redirect("/");

  return {
    title: `${Media.title.romaji || Media.title.english} - ${
      process.env.NEXT_PUBLIC_APP_NAME
    }`,
  };
}

const Page = async ({ params: { id } }) => {
  const Media = await getAnimeResponse(id, "Media"); //get Media prop from api
  const user = await authSession();

  return (
    <>
      <Detail id={id} anime={Media} />

      <div className="max-w-5xl mx-auto">
        <div className="my-5">
          <CommentWrap id={id} />
        </div>

        {user && (
          <Comment
            anime_image={Media.coverImage.large}
            anime_title={Media.title.romaji || Media.title.english}
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
