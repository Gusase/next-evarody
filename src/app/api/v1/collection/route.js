import prisma from "@/source/database/prisma";

export async function POST(request) {
  const { anime_mal_id, user_email, anime_image, anime_title, action } =
    await request.json();

  if (typeof user_email === "undefined") {
    return Response.json({
      status: 401,
      message: "Unauthorized",
      created: false,
    });
  }

  if (action === "delete") {
    const deleteCollection = await prisma.collections.deleteMany({
      where: {
        AND: [
          {
            user_email: user_email,
          },
          {
            anime_mal_id: anime_mal_id,
          },
        ],
      },
    });

    if (!deleteCollection) {
      return Response.json({
        status: 500,
        message: "Error",
        deleted: false,
      });
    }
    return Response.json({ status: 200, message: "Success", deleted: true });
  } else if (action === "create") {
    const data = {
      anime_mal_id,
      user_email,
      anime_image,
      anime_title,
      created_at: Date.now().toString(),
    };

    const createNewCollection = await prisma.collections.create({ data });

    if (!createNewCollection) {
      return Response.json({ status: 500, message: "Error", created: false });
    }

    return Response.json({ status: 200, message: "Success", created: true });
  } else {
    return Response.json({
      status: 400,
      message: "Bad Request",
      action: "Invalid",
    });
  }
}
