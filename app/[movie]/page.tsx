export default async function Movie({
  params,
}: {
  params: Promise<{ movie: string }>;
}) {
  const { movie } = await params;
  return (
    <div>
      <p>TESTING TESTING {movie} </p>
    </div>
  );
}
