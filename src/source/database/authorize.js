import prisma from "@/source/database/prisma";

export const authorize = async ({ informations }) => {
  const data = {
    informations,
  };

  const registerNewUser = await prisma.users.create({ data });

  if (!registerNewUser)
    return Response.json({ status: 500, message: "Error!", created: false });
  else
    return Response.json({ status: 200, message: "Success!", created: true });
};
