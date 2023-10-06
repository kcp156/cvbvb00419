"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { NavItem } from "@/types/nav";




interface MainNavProps {
  items?: NavItem[];
}
const navigation = [
  { name: "Home", href: "/" },
  { name: "Protected", href: "/protected" },

];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function NavMain({ items }: MainNavProps) {
  const pathname = usePathname();

  return (
    <div className="  flex space-x-4  items-center">
      <Link href="/" className=" flex items-center mr-1 ">
        <Image
          width={75}
          height={75}
          className=" h-9 w-9 rounded-full   shadow    "
          src="/logo.png"
          alt="logo"
        />
      </Link>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={classNames(
            pathname === item.href
              ? "    font-medium   text-stone-200  "
              : "font-medium text-stone-400 hover:text-stone-200/75",
            
          )}
          aria-current={pathname === item.href ? "page" : undefined}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
