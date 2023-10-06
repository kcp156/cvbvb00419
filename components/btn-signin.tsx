import { getServerSession } from "next-auth/next";

import React from "react";

import SignInPage from "./sign-in";
import ProfileMenu from "./profile-menu";

export default async function BtnSignin() {
  const session = await getServerSession();
  return session?.user ? (
    <>
      <ProfileMenu />
    </>
  ) : (
    <>
      <SignInPage />
    </>
  );
}
