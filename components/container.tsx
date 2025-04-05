"use client";

import Link from "next/link";
import { useState } from "react";

export default function Container() {
  const [title, setTitle] = useState("");

  return (
    <div className="m-auto bg-[#fefae0] border border-dashed rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Movie Lookup</h2>
      <p className="text-center">Enter a movie title to get details about it</p>
      <p className="mb-6 text-center">
        (<span className="font-bold">Warning :</span> Case Sensitive)
      </p>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="e.g. Whiplash, Pulp Fiction, Avatar"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
        />
        {title ? (
          <Link
            href={`/${title}`}
            className="bg-[#ccd5ae] text-black py-2 rounded text-center font-bold"
          >
            Get Details
          </Link>
        ) : (
          <span className="bg-[#d4a373] text-black py-2 rounded text-center cursor-not-allowed font-bold">
            Get Details
          </span>
        )}
      </div>
    </div>
  );
}
