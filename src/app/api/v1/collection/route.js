import prisma from "@/source/database/prisma";

export async function POST(request) {
  const { anime_mal_id, user_email, anime_image, anime_title } =
    await request.json();

  const data = {
    anime_mal_id,
    user_email,
    anime_image,
    anime_title,
    created_at: Date.now().toString(),
  };

  if (typeof data.user_email === "undefined") {
    return Response.json({
      status: 401,
      message: "Unauthorized",
      created: false,
    });
  }

  const createNewCollection = await prisma.collections.create({ data });

  if (!createNewCollection)
    return Response.json({ status: 500, message: "Error", created: false });
  else return Response.json({ status: 200, message: "Success", created: true });
}
