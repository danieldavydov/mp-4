import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-20 bg-[#ccd5ae]">
      <h2 className="text-4xl font-semibold p-4">
        <Link href="/">CS391 Movie Lookup App</Link>
      </h2>
    </header>
  );
}
