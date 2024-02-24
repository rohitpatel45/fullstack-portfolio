import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
      <div className="items-center justify-center flex">
        <Image src="/logo.png" alt="" width={300} height={300} />
      </div>
      <div className="flex flex-col items-center my-4 space-y-2 text-blue-300">
        <Link href="/">Home</Link>
        <Link href="/podcast">Podcast</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className=" items-center flex flex-col">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your Wish"
          className="h-10 ml-2 rounded-sm bg-gray-300 text-black placeholder:text-black font-medium"
        />
      </div>
    </div>
  );
};

export default Footer;
