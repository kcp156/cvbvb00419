import { getServerSession } from 'next-auth/next';
import React from 'react'
import BtnSignin from './btn-signin';

export default async function LoginButton() {
    const session = await getServerSession();
  return (
    <div>
        <BtnSignin/>
      </div>
  )
}
