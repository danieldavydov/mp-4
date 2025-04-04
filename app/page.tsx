"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Enter a movie title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded mr-2"
      />
      {title ? (
        <Link
          href={`/${title}`}
          className="bg-blue-500 text-white p-2 rounded inline-block"
        >
          Search
        </Link>
      ) : (
        <span className="bg-gray-400 text-white p-2 rounded inline-block">
          Search
        </span>
      )}
    </div>
  );
}
