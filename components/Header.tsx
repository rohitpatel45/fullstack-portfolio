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
    <header className="sticky top-0 bg-white p-2">
      <div className="flex justify-between items-center">
        <Link href="/">
          {/* Logo */}
          <Image
            src="/logo.png"
            alt=""
            width={50}
            height={50}
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
        <div className="hidden md:inline-flex space-x-6 font-medium text-cyan-600">
          <Link href="/">Home</Link>
          <Link href="/podcast">Podcast</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/signup" onClick={() => setMenuBar(false)}>
            SignUp
          </Link>
          <Link href="/signin" onClick={() => setMenuBar(false)}>
            SignIn
          </Link>
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
        className={`top-0 right-0  min-h-screen absolute bg-black text-white  ${
          menubar ? "flex w-80 justify-between p-10 " : "hidden sm:hidden"
        }`}
      >
        <div className="flex flex-col space-y-4 font-extralight">
          <Link href="/" onClick={() => setMenuBar(false)}>
            Home
          </Link>
          <Link href="/podcast" onClick={() => setMenuBar(false)}>
            Podcast
          </Link>
          <Link href="/blog" onClick={() => setMenuBar(false)}>
            Blog
          </Link>
          <Link href="/about" onClick={() => setMenuBar(false)}>
            About
          </Link>
          <Link href="/contact" onClick={() => setMenuBar(false)}>
            Contact
          </Link>
        </div>
        <div className="flex flex-col space-y-1 text-sm">
          <Link href="/signup" onClick={() => setMenuBar(false)}>
            SignUp
          </Link>
          <Link href="/signin" onClick={() => setMenuBar(false)}>
            SignIn
          </Link>
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
