import {
  authOptions,
  informationDetail,
} from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { authorize } from "./database/authorize";

export const authSession = async () => {
  const session = await getServerSession(authOptions);

  // const name = session.user.name;
  // const email = session.user.email;
  // const image = session.user.image;
  // const x = informationDetail();

  // let data = {
  //   name,
  //   email,
  //   image,
  // };

  // data = {
  //   ...data,
  //   ...x,
  // };

  // const res = await authorize(data);

  // console.log(informationDetail().id);
  // return;

  // if (session !== null) {
  //   session.user = {
  //     ...session.user,
  //     information: informationDetail(),
  //   };
  // }

  return session?.user; //if logged theres a user prop therfore dismis it
};
