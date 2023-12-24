import { authSession } from "@/source/auth";
import Image from "next/image";
import Link from "next/link";

const LoginAction = async () => {
  const user = await authSession();
  const img = user && user.image;
  return (
    <div className="hidden md:flex">
      {user ? null : (
        <Link
          href={"/api/auth/signin"}
          className="inline-flex items-center rounded py-2 pr-4 m-link md:px-3 md:py-2"
        >
          Login
        </Link>
      )}
      <Link
        className="inline-flex min-w-0 items-center group"
        href={"/user/dashboard"}
      >
        {img && (
          <Image
            className="rounded-full object-cover min-w-[2rem] w-full h-8 aspect-square"
            src={img}
            alt="..."
            width={"0"}
            height={"0"}
            sizes="100vw"
          />
        )}
      </Link>
    </div>
  );
};

export default LoginAction;
