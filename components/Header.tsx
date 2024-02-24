"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MagnifyingGlassIcon, XCircleIcon } from "@heroicons/react/16/solid";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Header = () => {
  const [menubar, setMenuBar] = useState(false);

  const menubaropen = () => {
    setMenuBar(!menubar);
  };
  return (
    <header className="sticky top-0">
      <div className="flex justify-between items-center">
        <div>
          {/* Logo */}
          <Image src="/logo.png" alt="" width={50} height={50} />
        </div>
        <div className="hidden md:inline-flex space-x-6 font-medium text-cyan-600">
          <Link href="/">Home</Link>
          <Link href="/podcast">Podcast</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <MagnifyingGlassIcon className="h-10 w-10" />
        </div>

        <Bars3Icon
          className="h-10 w-10 cursor-pointer md:hidden"
          onClick={menubaropen}
        />
      </div>

      <div
        className={`top-0 right-0  min-h-screen absolute bg-gray-400   ${
          menubar ? "flex w-80 justify-between p-10 " : "hidden sm:hidden"
        }`}
      >
        <div className="flex flex-col">
          <Link href="/">Home</Link>
          <Link href="/podcast">Podcast</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <XCircleIcon
          className="h-10 w-10 cursor-pointer"
          onClick={() => setMenuBar(false)}
        />
      </div>
    </header>
  );
};

export default Header;
