import { getServerSession } from "next-auth/next";
import Link from "next/link";
import LoginButton from "./login-button";

export default async function AuthStatus() {
  const session = await getServerSession();
  return (
    <div className="absolute  w-full  p-4  justify-center items-center">
      {/* {session && (
        <p className="text-stone-200 text-sm">
          Signed in as {session.user?.name}
        </p>
      )}
      {session && (
        <p className="text-stone-200 text-sm">email: {session.user?.email}</p>
      )} */}
      <LoginButton/>
  <Link href={'/'} className="text-stone-400 hover:text-stone-200 transition-all">กลับ</Link>
    </div>
  );
}
