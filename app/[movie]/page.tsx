import { MovieProps } from "@/types";

export default async function Movie({
  params,
}: {
  params: Promise<{ movie: string }>;
}) {
  const { movie } = await params;
  const API_KEY = process.env.API_KEY;
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&t=${movie}`
  );
  const data: MovieProps = await res.json();
  console.log(data);

  return (
    <div>
      {data.Response === "True" && <p>Success</p>}
      {data.Response === "False" && <p>Something went wrong, failed request</p>}
    </div>
  );
}
