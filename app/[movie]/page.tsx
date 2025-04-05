import { MovieProps } from "@/types";
import Link from "next/link";

export default async function Movie({
  params,
}: {
  params: Promise<{ movie: string }>;
}) {
  const { movie } = await params;
  const API_KEY = process.env.API_KEY;
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&t=${movie}&plot=full`
  );
  const data: MovieProps = await res.json();
  console.log(data);

  return (
    <div className="min-h-[50vh] mt-2.5 mb-5 flex flex-col justify-center items-center text-center">
      {data.Response === "True" && (
        <>
          <div className="m-auto bg-[#fefae0] border border-dashed rounded-lg p-6">
            {data.Title && <h2 className="font-bold text-2xl">{data.Title}</h2>}
            {data.Poster && (
              <img
                src={data.Poster}
                alt={`Poster for the movie: ${data.Title}`}
                className="rounded w-[1/2] my-2"
              />
            )}
            {data.Director && (
              <p className="my-2">
                <span className="font-bold">Director:</span> {data.Director}
              </p>
            )}
            {data.Genre && (
              <p className="my-2">
                <span className="font-bold">Genre:</span> {data.Genre}
              </p>
            )}
            {data.Year && (
              <p className="my-2">
                <span className="font-bold">Released:</span> {data.Year}
              </p>
            )}
          </div>
          {data.Plot && (
            <div className="max-w-lg m-auto bg-[#fefae0] border border-dashed rounded-lg p-6 my-2.5">
              <h3 className="font-bold text-xl">Plot</h3>
              <p>{data.Plot}</p>
            </div>
          )}
        </>
      )}
      {data.Response === "False" && <p>Something went wrong, failed request</p>}
      <Link
        href="/"
        className="bg-[#d4a373] text-black p-2 rounded text-center font-bold hover:bg-[#ccd5ae]"
      >
        Explore More Movies!
      </Link>
    </div>
  );
}
