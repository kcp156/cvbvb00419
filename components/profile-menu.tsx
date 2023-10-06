
import { Avatar, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import SignOutPage from './sign-out';
import { getServerSession } from 'next-auth/next';


export default async function ProfileMenu() {
    const session = await getServerSession();
  return (
<Menu>
  <MenuButton >
  <Avatar name='dkhanchitpon@gmail.com' src='/01.jpg' className=' w-10 h-10  shadow' />
  </MenuButton>
  <MenuList>
  <MenuGroup title='Profile'>
      <MenuItem>{session?.user?.email}</MenuItem>

    </MenuGroup>
    <MenuDivider />
    <MenuItem as='a' href='/'>Home</MenuItem>
    <MenuItem as='a' href='/protected'>Protected</MenuItem>
    <MenuItem as='a' ><SignOutPage/></MenuItem>
  </MenuList>
</Menu>

  );
}
