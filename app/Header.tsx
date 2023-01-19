import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-[100vw] h-[70px] bg-gray-400 p-4 flex items-center gap-2">
      <Link
        href="/"
        className="border-gray-800 border-2 rounded-md px-4 py-2 bg-white opacity-90 hover:opacity-100"
      >
        Home
      </Link>
      <Link
        href="/todos"
        className="border-gray-800 border-2 rounded-md px-4 py-2 bg-white opacity-90 hover:opacity-100"
      >
        todoList
      </Link>
      <Link
        href="/search"
        className="border-gray-800 border-2 rounded-md px-4 py-2 bg-white opacity-90 hover:opacity-100"
      >
        Search
      </Link>
    </header>
  );
};

export default Header;
