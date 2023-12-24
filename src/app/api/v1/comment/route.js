import prisma from "@/source/database/prisma";

export async function POST(request) {
  const {
    anime_mal_id,
    user_email,
    user_name,
    user_comment,
    user_image,
    anime_image,
    anime_title,
    score,
  } = await request.json();
  const data = {
    anime_mal_id,
    user_email,
    user_name,
    user_comment,
    user_image,
    anime_image,
    anime_title,
    score,
    created_at: Date.now().toString(),
  };

  const createNewComment = await prisma.comments.create({ data });

  if (!createNewComment)
    return Response.json({ status: 500, message: "Error!", created: false });
  else
    return Response.json({ status: 200, message: "Success!", created: true });
}
