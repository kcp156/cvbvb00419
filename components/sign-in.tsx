"use client";

import Link from "next/link";

export default function SignInPage() {
  return (
    <Link href={"/login"}>
      <button className=" bg-indigo-600 hover:bg-indigo-600/70 py-1.5 px-3 rounded text-white text-sm  transition-all">
        เข้าสู่ระบบ
      </button>

    </Link>
  );
}
