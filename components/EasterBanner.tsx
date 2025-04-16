import Link from "next/link";
import React from "react";

export default function EasterBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 text-center py-3 px-4 flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-yellow-400 shadow-md">
      <span className="font-bold text-lg sm:text-xl text-purple-900">
        🐣 Easter Bootcamp: Unlock Your Web Dev Skills this April! 🐰
      </span>
      <Link
        href="https://forms.gle/3qC23DijtD33P3bb8"
        className="mt-2 sm:mt-0 inline-block bg-purple-700 hover:bg-purple-900 text-white font-semibold px-6 py-2 rounded-full shadow transition-all duration-200"
      >
        Join Now!
      </Link>
    </div>
  );
}
