// export default function Home() {
//   return (
//     <div>
//       <p>Something</p>
//     </div>
//   );
// }
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [movieTitle, setMovieTitle] = useState("");

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Enter a movie title"
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
        className="border p-2 rounded mr-2"
      />
      {movieTitle ? (
        <Link
          href={`/${encodeURIComponent(movieTitle)}`}
          className="bg-blue-500 text-white p-2 rounded inline-block"
        >
          Search
        </Link>
      ) : (
        // Optionally, you can disable the link or show nothing if there is no input.
        <span className="bg-gray-400 text-white p-2 rounded inline-block">
          Search
        </span>
      )}
    </div>
  );
}
