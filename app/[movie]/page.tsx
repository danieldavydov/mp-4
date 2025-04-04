export default async function Movie({
  params,
}: {
  params: Promise<{ movie: string }>;
}) {
  const { movie } = await params;
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${movie}`
  );
  const data = await res.json();
  console.log(data);

  return (
    <div>
      <p>TESTING TESTING {movie} </p>
    </div>
  );
}
